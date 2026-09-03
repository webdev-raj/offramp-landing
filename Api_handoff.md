# OffRamp — Backend API Handoff

**Project:** OffRamp — Indian Food Swaps & Expert Consultation Platform
**From:** Frontend team
**To:** Backend team
**Status:** Frontend is fully built against a mock data layer. This document specifies every endpoint needed to replace that mock layer with a real API.

---

## 1. How the frontend is wired (read this first)

Every piece of dynamic data in the app currently flows through **two files**:

- `src/lib/api/dashboard.js` — user dashboard mock functions
- `src/lib/api/expert-dashboard.js` — expert dashboard mock functions

Each function is `async` and returns a `Promise` (with an artificial 300ms delay to simulate latency), consumed by matching React hooks in `src/lib/hooks/` (e.g. `useUserProfile`, `useExpertPoints`). Components never touch mock data directly — they only call the hook.

**What this means for integration:** once real endpoints exist, swapping mock → real is a contained change inside those two files (replace the mock return with a real `fetch()`/`axios` call). No component code needs to change, as long as the **response shape matches what's documented below**. Please treat the shapes in this doc as the contract — if a shape needs to change on your end, flag it back to frontend before shipping so hooks/components can be updated together.

---

## 2. Priority order

We'd suggest building in this order, since each layer unblocks the next:

1. **Auth (Section 3)** — nothing else can go from mock to real until real login/session/token issuance exists. Every dashboard's auth guard is currently just checking a fake `localStorage` flag.
2. **User Dashboard reads (Section 4)** and **Expert Dashboard reads (Section 5)** — straightforward GETs, no side effects, safe to parallelize once auth exists.
3. **Write actions (Sections 4.4, 5.6)** — accept/reject requests, sending chat messages, scheduling calls, logging swaps. These have real business logic (points deduction, status transitions) worth a design discussion before building — see open questions in Section 7.
4. **Public/marketing endpoints (Section 6)** — lowest urgency, currently static data in the frontend, works fine as-is until you're ready.

---

## 3. Authentication & Onboarding

Public endpoints — no auth required to call these, they *establish* auth.

| Action | Endpoint | Method | Request Body | Response |
|---|---|:---:|---|---|
| Email sign in | `/api/auth/login` | `POST` | `{ email: string, password: string }` | `{ token: string, user: { id, name, email, role: "user" \| "expert" } }` |
| User sign up | `/api/auth/signup` | `POST` | `{ fullName: string, email: string, password: string, termsAccepted: true }` | `{ token: string, user: {...} }` |
| Google OAuth | `/api/auth/google` | `POST` | `{ idToken: string }` | `{ token: string, user: {...} }` |
| Forgot password | `/api/auth/forgot-password` | `POST` | `{ email: string }` | `{ success: true, message: string }` |
| Record terms acceptance | `/api/users/terms-acceptance` | `POST` | `{ accepted: true, timestamp: number }` | `{ success: true }` |

**Important — role separation:** the frontend treats **user** and **expert** as two completely separate account types with independent sessions (`offramp_user_session` vs `offramp_expert_session` in the current mock). Confirm with frontend/product whether `role` should live on a single account (one login, two possible roles) or whether these are meant to be fully distinct accounts that can never overlap — this affects your user table design and is worth locking down before building.

---

## 4. User Dashboard

All endpoints below are **protected** — require a valid auth token, scoped to the authenticated user.

### 4.1 Get Profile
`GET /api/users/:userId/profile` (or `/api/users/me`)

```typescript
interface UserProfileResponse {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  badge: string;              // gamification badge, e.g. "ZERO WASTE PRO"
  dietTag: string;            // "VEGAN" | "VEGETARIAN" | "FLEX"
  location: string;
  dietType: string;
  budgetFocus: string;        // "Low" | "Medium" | "High"
  cuisine: string;
  stats: {
    mealsReplaced: number;
    currentWeek: number;
    baselinePerWeek: number;
    totalWeeks: number;
  };
}
```
Consumed by: `useUserProfile` → `ProfileCard`, `ProfileQuickStats`, `Sidebar` greeting.

### 4.2 Get Weekly Plan
`GET /api/users/:userId/weekly-plan`

```typescript
interface WeekPlanItem {
  week: number;
  swapDays: boolean[];        // fixed 7-item array, [Mon, Tue, Wed, Thu, Fri, Sat, Sun]
  swapCount: number;          // count of true values — can be derived, but return it precomputed
}
type WeeklyPlanResponse = WeekPlanItem[];
```
Consumed by: `useWeeklyPlan` → `WeeklyPlanTable`.

### 4.3 Get Swap History
`GET /api/users/:userId/swaps?limit=10&page=1`

```typescript
interface SwapHistoryEntry {
  id: string;
  fromDish: string;
  toDish: string;
  imageUrl: string;
  createdAt: string;          // ISO 8601 — frontend formats relative/absolute display itself
  rating: number;              // 1–5
  accentColor: string;         // hex, e.g. "#E0187A"
}
type SwapHistoryResponse = SwapHistoryEntry[];
```
Consumed by: `useSwapHistory` → `SwapHistoryList` (`/dashboard/swaps`).

### 4.4 Write actions (not yet built)

| Action | Endpoint | Method | Body |
|---|---|:---:|---|
| Update preferences | `/api/users/:userId/preferences` | `PATCH` | `{ dietType, budgetFocus, cuisine, location }` |
| Log a completed swap | `/api/users/:userId/swaps` | `POST` | `{ fromDish, toDish, date, rating, notes? }` |
| Rate an existing swap | `/api/users/:userId/swaps/:swapId/rating` | `PATCH` | `{ rating: number }` |

---

## 5. Expert Dashboard

All endpoints below are **protected**, scoped to the authenticated expert.

### 5.1 Get Overview
`GET /api/experts/:expertId/overview` (or `/api/experts/me`)

```typescript
interface ExpertOverviewResponse {
  id: string;
  firstName: string;
  lastName: string;
  title: string;               // "Dr." | "Dt."
  avatarUrl: string;
  sessionCount: number;
  newRequestsCount: number;
  activeSessionsCount: number;
  openQueriesCount: number;
  pointsThisMonth: number;
}
```
Consumed by: `useExpertOverview` → `ExpertSidebar`, `WelcomeBanner`, `StatCardsRow`.

### 5.2 Get Requests
`GET /api/experts/:expertId/requests?status=all|new|accepted|ongoing|completed|rejected`

```typescript
type RequestStatus = "new" | "accepted" | "ongoing" | "completed" | "rejected";
type ContactMethod = "WhatsApp" | "Video call" | "Email";
type UrgencyLevel = "ASAP" | "THIS WEEK" | "SCHEDULED" | "DONE" | "CLOSED";

interface HealthProfile {
  age: string;
  gender: string;
  primaryCondition: string;
  targetHbA1c: string;
  dietaryPreference: string;
  allergies: string;
  activityLevel: string;
  medications: string;
}

interface ExpertRequestItem {
  id: string;
  name: string;
  avatarUrl: string;
  status: RequestStatus;
  isNew: boolean;
  location: string;
  createdAt: string;            // ISO 8601
  contactMethod: ContactMethod;
  urgency: UrgencyLevel;
  points: number;
  subject: string;
  message: string;              // short preview
  fullMessage?: string;         // complete text, for detail view
  healthProfile?: HealthProfile;
}
type ExpertRequestsResponse = ExpertRequestItem[];
```
Consumed by: `useExpertRequests` → `AttentionRequestsList`, `RequestCard`, `/expert/requests`.

### 5.3 Get Single Request
`GET /api/experts/requests/:requestId` → returns one `ExpertRequestItem`.
Consumed by: `/expert/requests/[requestId]` detail page.

### 5.4 Get Conversations (Queries)
`GET /api/experts/:expertId/conversations`

```typescript
interface ChatMessage {
  id: string;
  sender: "user" | "expert";
  text: string;
  createdAt: string;            // ISO 8601
}

interface ConversationItem {
  id: string;
  userId: string;
  userName: string;
  avatarUrl: string;
  unreadCount: number;
  lastMessageAt: string;        // ISO 8601
  messages: ChatMessage[];
}
type ExpertQueriesResponse = ConversationItem[];
```
Consumed by: `useExpertQueries` → `ConversationList`, `ChatThread`, `UnansweredQueriesList` (`/expert/queries`).

### 5.5 Get Points
`GET /api/experts/:expertId/points`

```typescript
interface PointsActivityItem {
  id: string;
  type: "session" | "profile_view" | "query";
  description: string;
  createdAt: string;             // ISO 8601
  points: number;
}

interface ExpertPointsResponse {
  totalPoints: number;
  sessions: number;
  pointsThisMonth: number;
  perSessionRate: number;        // e.g. 200
  queryBonusRate: number;        // e.g. 15
  recentActivity: PointsActivityItem[];
}
```
Consumed by: `useExpertPoints` → `PointsHeroCard`, `RecentActivityList` (`/expert/points`).

### 5.6 Write actions (not yet built)

| Action | Endpoint | Method | Body |
|---|---|:---:|---|
| Accept request | `/api/experts/requests/:requestId/accept` | `PATCH` | `{ status: "accepted" }` |
| Reject request | `/api/experts/requests/:requestId/reject` | `PATCH` | `{ status: "rejected", reason? }` |
| Send chat message | `/api/experts/conversations/:convId/messages` | `POST` | `{ text: string }` |
| Schedule/confirm call | `/api/experts/conversations/:convId/schedule` | `POST` | `{ date: string, timeSlot: string, notes? }` — see open question in Section 7 re: 3-day scheduling window |

---

## 6. Public / Marketing

No auth required.

### 6.1 Explore Swaps Catalog
`GET /api/swaps?q=&goal=weight|fitness|budget|diabetes&diet=ALL|VEG|NO-OIL|FLEX&region=All|North|South|West|Pan-India`

```typescript
interface SwapCatalogItem {
  id: string;
  original: string;
  swap: string;
  matchScore: string;          // "90%"
  protein: string;             // "17g pro"
  carbs: string;               // "11g carbs"
  calories: string;            // "340 kcal"
  diet: "VEG" | "NO-OIL" | "FLEX";
  region: "North" | "South" | "West" | "Pan-India";
  cuisineTag: string;
  goal: "weight" | "fitness" | "budget" | "diabetes";
}
```
Currently: static array in frontend. No urgency to build until content needs to be dynamic/CMS-driven.

### 6.2 Experts Directory
`GET /api/experts?category=blood-sugar|gut-health|fitness&region=south|north`

```typescript
interface PublicExpertItem {
  id: string;
  name: string;
  specialty: string;
  credential: string;
  description: string;
  rating: number;
  sessions: number;
  location: string;
  languages: string;
  points: number;               // consultation cost
  about: string;
  qualifications: string[];
  helpTopics: string[];
}
```
Currently: static array in frontend.

### 6.3 Submit Consultation Request
`POST /api/experts/:expertId/consultations` — auth required (or guest capture via email)

```typescript
interface SubmitConsultationRequest {
  helpMessage: string;          // min 50 characters
  selectedContact: "WhatsApp" | "Video call" | "Email";
  selectedUrgency: "ASAP" | "This week" | "Flexible";
}
```
Note: point deduction should happen server-side based on the expert's rate — do not trust a client-submitted balance/cost field.

### 6.4 Newsletter Subscribe
`POST /api/newsletter/subscribe`
`{ email: string }` → `{ success: true, message: string }`

---

## 7. Open questions for a design discussion (please don't just guess these)

- **Request status lifecycle:** can a request move backward (e.g. rejected → new)? What triggers "ongoing" vs "accepted"? Does scheduling a call auto-transition status?
- **Scheduling window:** the UI restricts call scheduling to the next 3 calendar days only. Confirm whether that's a hard product rule to enforce server-side too, or purely a frontend UX constraint.
- **Points economy:** who is the source of truth for a user's point balance — is it computed from a ledger of earn/spend events (recommended, avoids drift) or a single mutable balance field? Recommend a ledger table (`points_transactions`) with running balance computed on read, not stored/mutated directly.
- **Role model:** see Section 3 — one account with roles, or two separate account types?

---

## 8. Naming/consistency issues to resolve before building

The mock layer grew organically across separate features and has some naming drift. Please standardize rather than copying these inconsistencies into the real schema:

| Concept | Inconsistent mock naming | Recommended |
|---|---|---|
| User identifier | `id` (user dashboard) vs `userId` (expert dashboard conversations) | Pick one — recommend `id` everywhere, with `userId`/`expertId` only used for **foreign key** references on other resources |
| Person's name | `name` vs `userName` | `name` everywhere |
| Timestamps | Mixed: `"2d ago"`, `"3 hrs ago"`, `"21/2/2026"` (pre-formatted strings) | **Always return ISO 8601** (`"2026-09-01T14:00:00Z"`). Frontend will handle all relative/absolute display formatting — do not pre-format dates server-side. |
| Image URL field | `avatarUrl` vs `imageUrl` vs `avatar` | `avatarUrl` for people, `imageUrl` for dish/content photos |

---

## 9. General API conventions (recommended, not yet decided)

Not covered by the mock layer since it doesn't need to handle these, but worth agreeing on before writing real endpoints:

- **Error format** — recommend a consistent shape, e.g. `{ error: { code: string, message: string } }`, rather than ad-hoc error bodies per endpoint.
- **Pagination** — `getSwapHistory` and `getExpertRequests` will need it in production even though mock data is small. Recommend `?page=&limit=` query params with `{ data: [...], total: number, page: number, limit: number }` response envelope.
- **Auth header** — confirm `Authorization: Bearer <token>` vs cookie-based sessions. Affects how the frontend's fetch calls get built.
- **Versioning** — consider `/api/v1/...` prefix now, before any client depends on unversioned paths.
- **Rate limiting on public endpoints** — `/api/newsletter/subscribe` and the consultation-request endpoint are public-facing and worth basic abuse protection (rate limit by IP) before launch.

---

## 10. Master endpoint summary

| Endpoint | Method | Auth | Status |
|---|:---:|:---:|---|
| `/api/auth/login` | POST | No | Not built |
| `/api/auth/signup` | POST | No | Not built |
| `/api/auth/google` | POST | No | Not built |
| `/api/auth/forgot-password` | POST | No | Not built |
| `/api/users/terms-acceptance` | POST | Yes | Not built |
| `/api/users/:userId/profile` | GET | Yes | Mocked, needs real impl |
| `/api/users/:userId/weekly-plan` | GET | Yes | Mocked, needs real impl |
| `/api/users/:userId/swaps` | GET | Yes | Mocked, needs real impl |
| `/api/users/:userId/swaps` | POST | Yes | Not built |
| `/api/users/:userId/preferences` | PATCH | Yes | Not built |
| `/api/users/:userId/swaps/:swapId/rating` | PATCH | Yes | Not built |
| `/api/experts/:expertId/overview` | GET | Yes | Mocked, needs real impl |
| `/api/experts/:expertId/requests` | GET | Yes | Mocked, needs real impl |
| `/api/experts/requests/:requestId` | GET | Yes | Mocked, needs real impl |
| `/api/experts/requests/:requestId/accept` | PATCH | Yes | Not built |
| `/api/experts/requests/:requestId/reject` | PATCH | Yes | Not built |
| `/api/experts/:expertId/conversations` | GET | Yes | Mocked, needs real impl |
| `/api/experts/conversations/:convId/messages` | POST | Yes | Not built |
| `/api/experts/conversations/:convId/schedule` | POST | Yes | Not built |
| `/api/experts/:expertId/points` | GET | Yes | Mocked, needs real impl |
| `/api/swaps` | GET | No | Static in frontend |
| `/api/experts` | GET | No | Static in frontend |
| `/api/experts/:expertId/consultations` | POST | Yes | Not built |
| `/api/newsletter/subscribe` | POST | No | Not built |

**Totals:** 8 read endpoints currently mocked · 12 write/auth endpoints not yet built · 2 public catalog endpoints (static for now).