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
    status: "new",
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
    status: "new",
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
  {
    id: "req_003",
    name: "Nadia Kapoor",
    avatarUrl: "/images/dashboard/avatars/nadia-kapoor.jpg",
    status: "new",
    isNew: true,
    location: "Mumbai",
    timeAgo: "6 hrs ago",
    contactMethod: "WhatsApp",
    urgency: "ASAP",
    points: 250,
    subject: "Gestational diabetes & meal timing",
    message:
      "28 weeks pregnant and recently flagged with elevated fasting glucose. Looking for a vegetarian North Indian meal guide that maintains fetal nutrition while preventing glucose spikes.",
  },
  {
    id: "req_004",
    name: "Ananya Rao",
    avatarUrl: "/images/dashboard/avatars/ananya-rao.jpg",
    status: "accepted",
    isNew: false,
    location: "Bengaluru",
    timeAgo: "1 day ago",
    contactMethod: "Video call",
    urgency: "THIS WEEK",
    points: 200,
    subject: "Post-workout recovery & high-protein vegan swaps",
    message:
      "Looking for plant-based high protein breakfast options without relying heavily on soy or processed protein powders.",
  },
  {
    id: "req_005",
    name: "Vikram Malhotra",
    avatarUrl: "/images/dashboard/avatars/vikram-malhotra.jpg",
    status: "ongoing",
    isNew: false,
    location: "Delhi",
    timeAgo: "2 days ago",
    contactMethod: "WhatsApp",
    urgency: "SCHEDULED",
    points: 300,
    subject: "Hypertension & Low-sodium meal framework",
    message:
      "Need low sodium spice combinations and potassium-rich swaps for traditional Punjabi gravies and flatbreads.",
  },
  {
    id: "req_006",
    name: "Sneha Patel",
    avatarUrl: "/images/dashboard/avatars/sneha-patel.jpg",
    status: "completed",
    isNew: false,
    location: "Ahmedabad",
    timeAgo: "4 days ago",
    contactMethod: "Video call",
    urgency: "DONE",
    points: 200,
    subject: "Thyroid & Gut health transition review",
    message:
      "Completed 4-week meal adjustment plan. Fasting TSH levels improved and digestive discomfort subsided.",
  },
  {
    id: "req_007",
    name: "Karan Joshi",
    avatarUrl: "/images/dashboard/avatars/karan-joshi.jpg",
    status: "rejected",
    isNew: false,
    location: "Pune",
    timeAgo: "5 days ago",
    contactMethod: "WhatsApp",
    urgency: "CLOSED",
    points: 150,
    subject: "Extreme keto crash diet consultation",
    message:
      "Requested rapid 10kg weight cut via 0-carb extreme diet, outside clinically safe nutritional parameters.",
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
