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

// ─── USER PREFERENCES MOCK DATA & OPTIONS ──────────────────────────────────────
export const MOCK_USER_PREFERENCES = {
  region: "east-india",
  preferredCuisines: ["tamil", "malayalam"],
  allergies: ["peanuts", "tree-nuts", "eggs"],
  transitionPath: "veg-to-vegan",
  budgetLevel: "budget-conscious",
};

export const REGION_OPTIONS = [
  { id: "south-india", label: "South India", available: true },
  { id: "north-india", label: "North India", available: true },
  { id: "east-india", label: "East India", available: true },
  { id: "west-india", label: "West India", available: false },
  { id: "central-india", label: "Central India", available: false },
  { id: "global-fusion", label: "Global Fusion", available: false },
];

export const CUISINE_OPTIONS = [
  { id: "telugu", label: "Telugu", available: true },
  { id: "tamil", label: "Tamil", available: true },
  { id: "kannada", label: "Kannada", available: true },
  { id: "malayalam", label: "Malayalam", available: true },
  { id: "punjab", label: "Punjab", available: true },
  { id: "rajasthan", label: "Rajasthan", available: true },
  { id: "uttar-pradesh", label: "Uttar Pradesh", available: true },
  { id: "delhi", label: "Delhi", available: true },
  { id: "bengali", label: "Bengali", available: false },
  { id: "goan", label: "Goan", available: false },
  { id: "indo-chinese", label: "Indo-Chinese", available: false },
  { id: "konkan", label: "Konkan", available: false },
];

export const ALLERGY_OPTIONS = [
  { id: "peanuts", label: "Peanuts", available: true },
  { id: "tree-nuts", label: "Tree Nuts", available: true },
  { id: "soy", label: "Soy", available: true },
  { id: "milk", label: "Milk", available: true },
  { id: "eggs", label: "Eggs", available: true },
  { id: "sesame", label: "Sesame", available: true },
  { id: "gluten", label: "Gluten", available: false },
  { id: "shellfish", label: "Shellfish", available: false },
  { id: "mustard", label: "Mustard", available: false },
];

export const TRANSITION_PATH_OPTIONS = [
  { id: "veg-to-vegan", label: "VEG → VEGAN", available: true },
  { id: "vegan-to-jain", label: "VEGAN → JAIN", available: true },
  { id: "jain-to-keto", label: "JAIN → KETO", available: true },
  { id: "vegan-explorer", label: "Vegan Explorer", available: false },
  { id: "jain-explorer", label: "Jain Explorer", available: false },
  { id: "veg-explorer", label: "Veg Explorer", available: false },
];

export const BUDGET_OPTIONS = [
  {
    id: "budget-conscious",
    label: "BUDGET-CONSCIOUS",
    description: "Affordable, accessible ingredients",
    color: "#CB5638",
  },
  {
    id: "standard",
    label: "STANDARD",
    description: "Balanced between cost and quality",
    color: "#1B7042",
  },
  {
    id: "premium",
    label: "PREMIUM",
    description: "Premium ingredients, specialty items",
    color: "#2542A5",
  },
];

/**
 * Fetches user preferences for the given userId.
 */
export async function getUserPreferences(userId = "user_001") {
  // TODO: replace with real fetch(`/api/users/${userId}/preferences`) once backend exists
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_USER_PREFERENCES;
}

/**
 * Saves user preferences for the given userId.
 */
export async function saveUserPreferences(userId = "user_001", preferences) {
  // TODO: replace with real fetch(`/api/users/${userId}/preferences`, { method: "PATCH", body: JSON.stringify(preferences) })
  await new Promise((r) => setTimeout(r, 500));
  return { success: true, preferences };
}

