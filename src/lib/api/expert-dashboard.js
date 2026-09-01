// ─── EXPERT DASHBOARD MOCK DATA ─────────────────────────────────────────────
// All functions are async and return Promises, simulating real API latency.
// Replace each function body with real fetch() calls once the backend exists.

// ── Mock Data Definitions ────────────────────────────────────────────────────

export const MOCK_EXPERT_OVERVIEW = {
  id: "expert_001",
  firstName: "Meera",
  lastName: "Iyer",
  title: "Dr.",
  avatarUrl: "/images/experts/meera_iyer.jpg",
  sessionCount: 112,
  newRequestsCount: 3,
  activeSessionsCount: 2,
  openQueriesCount: 2, // Total unread conversations count
  pointsThisMonth: 640,
};

export const MOCK_EXPERT_REQUESTS = [
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
    fullMessage:
      "I have Type 2 diabetes diagnosed 8 months ago. My HbA1c is at 7.8 and my doctor wants it under 6.5 in 3 months. I eat mostly South Indian food — idli, dosa, sambar, white rice, rasam, and curd rice. Every time I try low-carb diets recommended online, I feel fatigued and find it impossible to sustain because our family kitchen prepares traditional South Indian meals daily. I need practical swaps and portion strategies that allow me to eat with my family while bringing my fasting blood glucose down below 110 mg/dL safely.",
    healthProfile: {
      age: "42 years",
      gender: "Female",
      primaryCondition: "Type 2 Diabetes (HbA1c 7.8%)",
      targetHbA1c: "< 6.5%",
      dietaryPreference: "Vegetarian (South Indian)",
      allergies: "None",
      activityLevel: "Moderate (30-min brisk walk 4x/week)",
      medications: "Metformin 500mg (twice daily)",
    },
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
    fullMessage:
      "Recently told I'm pre-diabetic (fasting glucose 108, HbA1c 5.9%). I want to reverse this early through diet without giving up my favourite regional foods. I primarily eat spicy Andhra food with gongura, pappu, and rice. Additionally, I travel 10-12 days a month for corporate consulting, which leads to unpredictable hotel dining. I need a straightforward meal decision framework that keeps insulin spikes minimal whether I am eating homemade Andhra meals or ordering from hotel buffets.",
    healthProfile: {
      age: "36 years",
      gender: "Male",
      primaryCondition: "Pre-diabetes (Fasting Glucose 108 mg/dL)",
      targetHbA1c: "< 5.5%",
      dietaryPreference: "Non-Vegetarian (Andhra cuisine)",
      allergies: "Shellfish",
      activityLevel: "Sedentary (desk job + frequent flights)",
      medications: "None currently prescribed",
    },
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
    fullMessage:
      "I am 28 weeks pregnant (second trimester) and my OGTT oral glucose tolerance test showed an elevated fasting level of 98 mg/dL and 1-hr post-prandial of 152 mg/dL. My obstetrician advised an immediate medical nutrition therapy plan before considering insulin. I eat a vegetarian North Indian diet (dal, roti, sabzi, paneer, parathas). I need a balanced meal plan with proper carbohydrate distribution throughout the day that supports healthy fetal growth without triggering post-meal spikes.",
    healthProfile: {
      age: "31 years",
      gender: "Female (Pregnant, 28 Weeks)",
      primaryCondition: "Gestational Diabetes Mellitus (GDM)",
      targetHbA1c: "Fasting < 90 mg/dL, 1-hr post < 140 mg/dL",
      dietaryPreference: "Lacto-Vegetarian (North Indian)",
      allergies: "Lactose sensitive (mild)",
      activityLevel: "Light prenatal yoga & walking",
      medications: "Prenatal multivitamins & iron supplements",
    },
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
    fullMessage:
      "Looking for plant-based high protein breakfast options without relying heavily on soy or processed protein powders. I do strength training 4 mornings a week and require around 25-30g of bioavailable protein in my post-workout meal. Transitioning from vegetarian to vegan and seeking whole-food Indian combinations (lentils, sprouted pulses, seed flours) to meet my macro targets without digestive bloating.",
    healthProfile: {
      age: "29 years",
      gender: "Female",
      primaryCondition: "Fitness & Plant-based transition",
      targetHbA1c: "Normal (5.1%)",
      dietaryPreference: "Strict Vegan",
      allergies: "Soy isolate sensitivity",
      activityLevel: "High (Strength training 4x/week)",
      medications: "Vitamin B12 & D3 drops",
    },
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
    fullMessage:
      "Need low sodium spice combinations and potassium-rich swaps for traditional Punjabi gravies and flatbreads. Resting blood pressure is currently 142/90 mmHg. I want to reduce sodium intake under 1500mg daily while preserving authentic aromatics and taste in home-cooked meals.",
    healthProfile: {
      age: "54 years",
      gender: "Male",
      primaryCondition: "Stage 1 Hypertension (BP 142/90 mmHg)",
      targetHbA1c: "< 125/80 mmHg",
      dietaryPreference: "North Indian (Flexitarian)",
      allergies: "None",
      activityLevel: "Light walking",
      medications: "Telmisartan 20mg",
    },
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
    fullMessage:
      "Completed 4-week meal adjustment plan. Fasting TSH levels improved from 5.4 to 3.2 mIU/L and digestive bloating has largely resolved. Following up on long-term maintenance guidelines for cruciferous vegetables and selenium-rich Indian food sources.",
    healthProfile: {
      age: "38 years",
      gender: "Female",
      primaryCondition: "Hypothyroidism (Subclinical, stabilized)",
      targetHbA1c: "TSH 1.5 - 3.5 mIU/L",
      dietaryPreference: "Gujarati Vegetarian",
      allergies: "Gluten sensitive (mild)",
      activityLevel: "Moderate (Pilates 3x/week)",
      medications: "Levothyroxine 25mcg",
    },
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
    fullMessage:
      "Requested rapid 10kg weight cut within 3 weeks via 0-carb extreme caloric restriction. Declined after clinical review due to medical risks of unmonitored crash ketosis with underlying hepatic markers.",
    healthProfile: {
      age: "24 years",
      gender: "Male",
      primaryCondition: "Weight loss inquiry (Rejected for clinical safety)",
      targetHbA1c: "N/A",
      dietaryPreference: "Non-Vegetarian",
      allergies: "None",
      activityLevel: "Heavy gym training",
      medications: "None",
    },
  },
];

export const MOCK_EXPERT_CONVERSATIONS = [
  {
    id: "conv_001",
    userId: "user_priya_sharma",
    userName: "Priya Sharma",
    avatarUrl: "/images/dashboard/avatars/priya-sharma.jpg",
    unreadCount: 1,
    lastMessageAt: "3 hrs ago",
    messages: [
      {
        id: "msg_001",
        sender: "user",
        text: "Can I eat idli every day if I have Type 2 diabetes? My usual breakfast is 3 idlis with sambar and coconut chutney.",
        timestamp: "3 hrs ago",
      },
    ],
  },
  {
    id: "conv_002",
    userId: "user_rohit_m",
    userName: "Rohit M.",
    avatarUrl: "/images/dashboard/avatars/rohit-m.jpg",
    unreadCount: 1,
    lastMessageAt: "1 day ago",
    messages: [
      {
        id: "msg_002",
        sender: "user",
        text: "What is the glycaemic index of ragi dosa compared to regular rice dosa? Is it significantly better for blood sugar control?",
        timestamp: "1 day ago",
      },
    ],
  },
  {
    id: "conv_003",
    userId: "user_deepa_k",
    userName: "Deepa K.",
    avatarUrl: "/images/dashboard/avatars/deepa-k.jpg",
    unreadCount: 0,
    lastMessageAt: "2 days ago",
    messages: [
      {
        id: "msg_003",
        sender: "user",
        text: "How much jaggery is safe for a diabetic person per day? Can it replace sugar entirely or should I avoid it too?",
        timestamp: "2 days ago",
      },
      {
        id: "msg_004",
        sender: "expert",
        text: "Great question — I'd recommend keeping jaggery under 1 tsp per day and monitoring your post-meal glucose. It's not a full substitute for avoiding sugar.",
        timestamp: "2 days ago",
      },
    ],
  },
  {
    id: "conv_004",
    userId: "user_amit_s",
    userName: "Amit S.",
    avatarUrl: "/images/dashboard/avatars/amit-s.jpg",
    unreadCount: 0,
    lastMessageAt: "3 days ago",
    messages: [
      {
        id: "msg_005",
        sender: "user",
        text: "Is coconut rice bad for blood sugar? My family makes it every week and I love it but I'm worried about the coconut oil and white rice combination.",
        timestamp: "3 days ago",
      },
      {
        id: "msg_006",
        sender: "expert",
        text: "The coconut oil is fine in moderation — the bigger concern is the white rice portion size. Try swapping half the rice for cauliflower rice to lower the glycaemic load.",
        timestamp: "3 days ago",
      },
    ],
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
 * Fetches a single expert request by its ID.
 * TODO: replace with real fetch(`/api/experts/requests/${requestId}`) once backend exists
 */
export async function getExpertRequestById(requestId) {
  await new Promise((r) => setTimeout(r, 200));
  const req = MOCK_EXPERT_REQUESTS.find((r) => r.id === requestId);
  return req || null;
}

/**
 * Fetches WhatsApp-style conversation threads directed at this expert.
 * TODO: replace with real fetch(`/api/experts/${expertId}/conversations`) once backend exists
 */
export async function getExpertQueries(expertId = "expert_001") {
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_EXPERT_CONVERSATIONS;
}
