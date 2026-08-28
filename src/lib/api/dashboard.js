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
