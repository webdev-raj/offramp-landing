import { MOCK_PROFILE_DATA, MOCK_WEEKLY_PLAN } from "./mockData/dashboard.mock";

/**
 * Fetches user profile data for the given userId.
 * Currently uses mock data with simulated network latency.
 */
export async function getUserProfile(userId = "user_001") {
  // TODO: replace with real fetch(`/api/users/${userId}`) once backend exists
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_PROFILE_DATA;
}

/**
 * Fetches weekly plan data for the given userId.
 * Currently uses mock data with simulated network latency.
 */
export async function getWeeklyPlan(userId = "user_001") {
  // TODO: replace with real fetch(`/api/users/${userId}/weekly-plan`) once backend exists
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_WEEKLY_PLAN;
}

// ─── SWAP HISTORY MOCK DATA ────────────────────────────────────────────────────
const MOCK_SWAP_HISTORY = [
  {
    id: "swap_001",
    fromDish: "Butter Chicken",
    toDish: "Gobi Tikka Masala",
    imageUrl: "/images/dashboard/swaps/butter-chicken.jpg",
    daysAgo: "2d ago",
    rating: 5,
    accentColor: "#E0187A",
  },
  {
    id: "swap_002",
    fromDish: "Chickpea Masala",
    toDish: "Mushroom Pepper Fry",
    imageUrl: "/images/dashboard/swaps/chickpea-masala.jpg",
    date: "21/2/2026",
    rating: 4,
    accentColor: "#2542A5",
  },
  {
    id: "swap_003",
    fromDish: "Butter Chicken",
    toDish: "Malai Kofta",
    imageUrl: "/images/dashboard/swaps/butter-chicken-2.jpg",
    date: "21/2/2026",
    rating: 5,
    accentColor: "#1B7042",
  },
  {
    id: "swap_004",
    fromDish: "Dal Makhani",
    toDish: "Lentil Stew",
    imageUrl: "/images/dashboard/swaps/dal-makhani.jpg",
    date: "18/2/2026",
    rating: 4,
    accentColor: "#CB5638",
  },
  {
    id: "swap_005",
    fromDish: "Aloo Paratha",
    toDish: "Oats Methi Paratha",
    imageUrl: "/images/dashboard/swaps/aloo-paratha.jpg",
    date: "15/2/2026",
    rating: 5,
    accentColor: "#F5AE38",
  },
];

/**
 * Fetches swap history for the given userId.
 * Currently uses mock data with simulated network latency.
 */
export async function getSwapHistory(userId = "user_001") {
  // TODO: replace with real fetch(`/api/users/${userId}/swaps`) once backend exists
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_SWAP_HISTORY;
}
