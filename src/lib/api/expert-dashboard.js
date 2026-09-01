// ─── EXPERT DASHBOARD MOCK DATA ─────────────────────────────────────────────
// All functions are async and return Promises, simulating real API latency.
// Replace each function body with real fetch() calls once the backend exists.

// ── Mock Data Definitions ────────────────────────────────────────────────────

const MOCK_EXPERT_OVERVIEW = {
  id: "expert_001",
  firstName: "Meera",
  lastName: "Iyer",
  title: "Dr.",
  avatarUrl: "/images/experts/meera_iyer.jpg",
  sessionCount: 112,
  newRequestsCount: 3,
  activeSessionsCount: 2,
  openQueriesCount: 2,
  pointsThisMonth: 640,
};

const MOCK_EXPERT_REQUESTS = [
  {
    id: "req_001",
    name: "Priya Sharma",
    avatarUrl: "/images/dashboard/avatars/priya-sharma.jpg",
    isNew: true,
    location: "Chennai",
    timeAgo: "2 hrs ago",
    contactMethod: "WhatsApp",
    urgency: "ASAP",
    points: 200,
    subject: "Managing HbA1c through South Indian diet",
    message:
      "I have Type 2 diabetes diagnosed 8 months ago. My HbA1c is at 7.8 and my doctor wants it under 6.5 in 3 months. I eat mostly South Indian food — idli, dosa, sambar, rice. I need help",
  },
  {
    id: "req_002",
    name: "Rahul Verma",
    avatarUrl: "/images/dashboard/avatars/rahul-verma.jpg",
    isNew: true,
    location: "Hyderabad",
    timeAgo: "5 hrs ago",
    contactMethod: "Video call",
    urgency: "THIS WEEK",
    points: 200,
    subject: "Pre-diabetes reversal — sustainable diet plan",
    message:
      "Recently told I'm pre-diabetic (fasting glucose 108). I want to reverse it through diet without giving up my favourite foods. I primarily eat Andhra food and I travel a lot for work",
  },
];

const MOCK_EXPERT_QUERIES = [
  {
    id: "query_001",
    userId: "user_priya_sharma",
    name: "Priya Sharma",
    avatarUrl: "/images/dashboard/avatars/priya-sharma.jpg",
    timeAgo: "3 hrs ago",
    question:
      "Can I eat idli every day if I have Type 2 diabetes? My usual breakfast is 3 idlis with sambar and coconut chutney.",
  },
  {
    id: "query_002",
    userId: "user_rohit_m",
    name: "Rohit M.",
    avatarUrl: "/images/dashboard/avatars/rohit-m.jpg",
    timeAgo: "1 day ago",
    question:
      "What is the glycaemic index of ragi dosa compared to regular rice dosa? Is it significantly better for blood sugar control?",
  },
];

// ── API Functions ─────────────────────────────────────────────────────────────

/**
 * Fetches the expert's overview/profile stats.
 * TODO: replace with real fetch(`/api/experts/${expertId}/overview`) once backend exists
 */
export async function getExpertOverview(expertId = "expert_001") {
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_EXPERT_OVERVIEW;
}

/**
 * Fetches the expert's incoming consultation requests.
 * TODO: replace with real fetch(`/api/experts/${expertId}/requests`) once backend exists
 */
export async function getExpertRequests(expertId = "expert_001") {
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_EXPERT_REQUESTS;
}

/**
 * Fetches unanswered queries directed at this expert.
 * TODO: replace with real fetch(`/api/experts/${expertId}/queries`) once backend exists
 */
export async function getExpertQueries(expertId = "expert_001") {
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_EXPERT_QUERIES;
}
