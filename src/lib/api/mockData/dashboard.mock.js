export const MOCK_PROFILE_DATA = {
  id: "user_001",
  name: "Anshuman",
  email: "anshuman@example.in",
  avatarUrl: "/images/dashboard/avatar-placeholder.png",
  badge: "ZERO WASTE PRO",
  dietTag: "VEGAN",
  location: "East India",
  dietType: "Vegan",
  budgetFocus: "Medium",
  cuisine: "South Indian",
  stats: {
    mealsReplaced: 14,
    currentWeek: 7,
    baselinePerWeek: 7,
    totalWeeks: 12,
  },
};

export const WEEKDAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

export const MOCK_WEEKLY_PLAN = [
  { week: 1, swapDays: [true, false, false, false, false, false, false], swapCount: 1 },
  { week: 2, swapDays: [true, false, false, false, false, false, false], swapCount: 1 },
  { week: 3, swapDays: [true, false, false, false, false, false, false], swapCount: 1 },
  { week: 4, swapDays: [true, true, false, false, false, false, false], swapCount: 2 },
  { week: 5, swapDays: [true, true, false, false, false, false, false], swapCount: 2 },
  { week: 6, swapDays: [true, true, false, false, false, false, false], swapCount: 2 },
  { week: 7, swapDays: [true, true, true, false, false, false, false], swapCount: 3 },
  { week: 8, swapDays: [true, true, true, true, false, false, false], swapCount: 4 },
];
