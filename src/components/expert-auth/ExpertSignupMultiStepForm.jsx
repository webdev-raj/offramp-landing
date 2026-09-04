"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, ArrowLeft, CheckCircle2, Award, Sparkles } from "lucide-react";

const STEP_TITLES = [
  "YOUR DETAILS",
  "EXPERTISE",
  "REVIEW & SUBMIT",
];

const SPECIALTY_OPTIONS = [
  "Diabetes & Blood Sugar",
  "Fitness & Muscle Gain",
  "Weight Management",
  "Gut Health & Digestion",
  "Cardiovascular & Lipid",
  "Women's Health / PCOS",
];

export default function ExpertSignupMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State across all 3 steps
  const [formData, setFormData] = useState({
    // Step 1
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    yearsExperience: "",
    // Step 2
    specialty: "Diabetes & Blood Sugar",
    qualifications: "",
    languages: "English, Hindi",
    contactPreference: "WhatsApp",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isStep1Valid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.email.trim() &&
    formData.password.length >= 8 &&
    formData.location.trim();

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep === 1 && !isStep1Valid) return;
    setCurrentStep((prev) => Math.min(3, prev + 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate application submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-[28rem] relative z-10">
        <div className="bg-[#FFFDF5] border border-[#E8DCC4] rounded-2xl shadow-2xl p-8 sm:p-10 text-center">
          <div className="w-16 h-16 bg-[#1B7042]/10 border-2 border-[#1B7042] text-[#1B7042] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <p className="font-jetbrains font-extrabold text-[10px] tracking-[0.25em] uppercase text-[#1B7042] mb-2">
            APPLICATION RECEIVED
          </p>

          <h2 className="font-montserrat-bold font-black text-2xl sm:text-3xl text-[#1E1E1E] tracking-tight mb-3">
            Application Submitted!
          </h2>

          <p className="font-dmsans text-sm text-[#5A5042] leading-relaxed mb-6">
            Thank you, <strong className="text-[#1E1E1E]">{formData.firstName || "Dr. Applicant"}</strong>. We review every application personally to maintain our clinical standard. Our onboarding coordinator will contact you at{" "}
            <span className="font-medium text-[#1B2264] underline">{formData.email || "your email"}</span> within 3&ndash;5 business days.
          </p>

          <div className="bg-[#FFF5DB] border border-[#EADFC7] rounded-xl p-4 text-left mb-6">
            <div className="flex items-center gap-2 text-[#8B6830] font-jetbrains text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-[#F5AE38]" />
              <span>Next Steps</span>
            </div>
            <ul className="text-xs font-dmsans text-[#6A5A48] space-y-1.5 list-disc list-inside">
              <li>Verification of degree / RD council registration</li>
              <li>15-minute introductory alignment call</li>
              <li>Expert profile activation and dashboard setup</li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <Link
              href="/"
              className="w-full bg-[#1B2264] hover:bg-[#141A4F] text-white font-montserrat-bold font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>Back to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/expert/login"
              className="w-full bg-[#FFF5DB] hover:bg-[#FBE8B5] text-[#523A0B] font-montserrat-bold font-bold text-xs py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>Go to Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[28rem] relative z-10">
      {/* ── Form Card ── */}
      <div className="bg-[#FFFDF5] border-t-4 border-black  shadow-2xl p-6 sm:p-8 relative">
        {/* Tab Switcher at Top */}
        <div className="grid grid-cols-2 bg-[#FFF5DB] border border-[#EADFC7] rounded-xl mb-6 overflow-hidden">
          <Link
            href="/expert/login"
            className="text-[#1E1E1E] hover:text-[#E0187A] font-montserrat-bold font-bold text-xs sm:text-sm py-2.5 px-4 transition-all text-center flex items-center justify-center"
          >
            Sign In
          </Link>
          <button
            type="button"
            className="bg-[#1B2264] text-white font-montserrat-bold font-black text-xs sm:text-sm py-2.5 px-4 shadow-sm transition-all text-center"
          >
            Apply as Expert
          </button>
        </div>

        {/* Heading & Subtext */}
        <div className="mb-5">
          <h2 className="font-montserrat-bold font-black text-2xl sm:text-3xl text-[#1E1E1E] tracking-tight">
            Join OffRamp Experts
          </h2>
          <p className="text-xs sm:text-sm font-dmsans text-[#8B6830] font-medium mt-1 leading-snug">
            Complete the form below &mdash; we review every application personally.
          </p>
        </div>

        {/* ── 3-Step Progress Indicator ── */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
            {/* Circle 1 */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-jetbrains font-bold text-xs transition-all ${
                currentStep >= 1
                  ? "bg-[#1B2264] text-white shadow-sm"
                  : "bg-[#FDE3A0] text-[#8C734B]"
              }`}
            >
              1
            </div>

            <div
              className={`flex-1 h-0.5 rounded transition-all ${
                currentStep >= 2 ? "bg-[#1B2264]" : "bg-[#FDE3A0]"
              }`}
            />

            {/* Circle 2 */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-jetbrains font-bold text-xs transition-all ${
                currentStep >= 2
                  ? "bg-[#1B2264] text-white shadow-sm"
                  : "bg-[#FDE3A0] text-[#8C734B]"
              }`}
            >
              2
            </div>

            <div
              className={`flex-1 h-0.5 rounded transition-all ${
                currentStep >= 3 ? "bg-[#1B2264]" : "bg-[#FDE3A0]"
              }`}
            />

            {/* Circle 3 */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-jetbrains font-bold text-xs transition-all ${
                currentStep === 3
                  ? "bg-[#1B2264] text-white shadow-sm"
                  : "bg-[#FDE3A0] text-[#8C734B]"
              }`}
            >
              3
            </div>
          </div>

          <p className="text-center font-jetbrains font-bold text-[10px] tracking-[0.2em] uppercase text-[#1B2264] mt-2.5">
            STEP {currentStep} OF 3 &mdash; {STEP_TITLES[currentStep - 1]}
          </p>
        </div>

        {/* ── STEP 1: YOUR DETAILS ── */}
        {currentStep === 1 && (
          <form onSubmit={handleNext} className="space-y-4">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Meera"
                  required
                  className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-2.5 px-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 placeholder:text-[#A8946B]"
                />
              </div>
              <div>
                <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1">
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Iyer"
                  required
                  className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-2.5 px-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 placeholder:text-[#A8946B]"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-2.5 px-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 placeholder:text-[#A8946B]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  required
                  minLength={8}
                  className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-2.5 px-3.5 pr-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 placeholder:text-[#A8946B]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C827A] hover:text-[#1E1E1E] transition-colors p-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[10.5px] font-dmsans text-[#8B6830] mt-1 leading-tight">
                Use a strong password &mdash; this is your expert account.
              </p>
            </div>

            {/* City / Location & Years of Experience */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1">
                  CITY / LOCATION
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Chennai"
                  required
                  className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-2.5 px-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 placeholder:text-[#A8946B]"
                />
              </div>
              <div>
                <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1">
                  YEARS OF EXPERIENCE
                </label>
                <input
                  type="text"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  placeholder="e.g. 8"
                  className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-2.5 px-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 placeholder:text-[#A8946B]"
                />
              </div>
            </div>

            {/* Next Step 2 Button */}
            <button
              type="submit"
              disabled={!isStep1Valid}
              className={`w-full font-montserrat-bold font-black text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider mt-5 ${
                isStep1Valid
                  ? "bg-[#FDE3A0] hover:bg-[#FCD34D] text-[#523A0B] cursor-pointer active:scale-98"
                  : "bg-[#FDE3A0]/60 text-[#8B734B]/60 cursor-not-allowed"
              }`}
            >
              <span>NEXT &mdash; EXPERTISE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* ── STEP 2: EXPERTISE ── */}
        {currentStep === 2 && (
          <form onSubmit={handleNext} className="space-y-4">
            {/* Primary Specialty */}
            <div>
              <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1.5">
                PRIMARY SPECIALTY / DOMAIN
              </label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-xs sm:text-sm py-2.5 px-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 cursor-pointer"
              >
                {SPECIALTY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Qualifications / Certifications */}
            <div>
              <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1">
                CREDENTIALS &amp; QUALIFICATIONS
              </label>
              <textarea
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                rows={2}
                placeholder="e.g. Registered Dietitian (IDA), MSc Clinical Nutrition, Certified Diabetes Educator"
                required
                className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-xs sm:text-sm py-2.5 px-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 placeholder:text-[#A8946B] resize-none"
              />
            </div>

            {/* Languages Spoken */}
            <div>
              <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1">
                LANGUAGES SPOKEN
              </label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                placeholder="e.g. English, Hindi, Tamil"
                required
                className="w-full bg-[#FFE8B0] text-[#1E1E1E] font-medium text-sm py-2.5 px-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B2264]/40 placeholder:text-[#A8946B]"
              />
            </div>

            {/* Contact Method Preference */}
            <div>
              <label className="text-[10px] font-jetbrains font-bold tracking-[0.18em] uppercase text-[#8B6830] block mb-1">
                PREFERRED CONSULTATION FORMAT
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["WhatsApp", "Video Call"].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setFormData({ ...formData, contactPreference: method })}
                    className={`py-2 px-3 rounded-lg text-xs font-montserrat font-bold transition-all border ${
                      formData.contactPreference === method
                        ? "bg-[#1B2264] text-white border-[#1B2264] shadow-sm"
                        : "bg-[#FFF5DB] text-[#5A4838] border-[#EADFC7] hover:bg-[#FBE8B5]"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 Action Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="w-1/3 bg-[#FFF5DB] hover:bg-[#FBE8B5] text-[#523A0B] font-montserrat-bold font-bold text-xs py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 uppercase"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>BACK</span>
              </button>

              <button
                type="submit"
                className="w-2/3 bg-[#FDE3A0] hover:bg-[#FCD34D] text-[#523A0B] font-montserrat-bold font-black text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <span>NEXT &mdash; REVIEW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* ── STEP 3: REVIEW & SUBMIT ── */}
        {currentStep === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Summary Review Card */}
            <div className="bg-[#FFF5DB] border border-[#EADFC7] rounded-xl p-3.5 space-y-2.5 text-xs font-dmsans">
              <div className="flex justify-between border-b border-[#EADFC7]/60 pb-1.5">
                <span className="text-[#8B6830] font-jetbrains uppercase text-[10px] font-bold">NAME</span>
                <span className="text-[#1E1E1E] font-bold">{formData.firstName} {formData.lastName}</span>
              </div>

              <div className="flex justify-between border-b border-[#EADFC7]/60 pb-1.5">
                <span className="text-[#8B6830] font-jetbrains uppercase text-[10px] font-bold">EMAIL</span>
                <span className="text-[#1E1E1E] font-medium">{formData.email}</span>
              </div>

              <div className="flex justify-between border-b border-[#EADFC7]/60 pb-1.5">
                <span className="text-[#8B6830] font-jetbrains uppercase text-[10px] font-bold">LOCATION / EXP</span>
                <span className="text-[#1E1E1E]">{formData.location} &middot; {formData.yearsExperience || "N/A"} yrs</span>
              </div>

              <div className="flex justify-between border-b border-[#EADFC7]/60 pb-1.5">
                <span className="text-[#8B6830] font-jetbrains uppercase text-[10px] font-bold">SPECIALTY</span>
                <span className="text-[#1E1E1E] font-medium">{formData.specialty}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8B6830] font-jetbrains uppercase text-[10px] font-bold">LANGUAGES</span>
                <span className="text-[#1E1E1E]">{formData.languages}</span>
              </div>
            </div>

            {/* Note on Manual Review */}
            <div className="bg-[#1B2264]/5 border border-[#1B2264]/20 rounded-xl p-3 text-xs font-dmsans text-[#1B2264] flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#F5AE38] shrink-0 mt-0.5" />
              <p className="leading-snug">
                We review every application personally to protect Indian nutritional health. You will receive an onboarding decision within 3&ndash;5 business days.
              </p>
            </div>

            {/* Step 3 Action Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="w-1/3 bg-[#FFF5DB] hover:bg-[#FBE8B5] text-[#523A0B] font-montserrat-bold font-bold text-xs py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 uppercase"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>BACK</span>
              </button>

              <button
                type="submit"
                className="w-2/3 bg-[#1B2264] hover:bg-[#141A4F] text-white font-montserrat-bold font-black text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-[#1B2264]/25 transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer active:scale-98"
              >
                <span>SUBMIT APPLICATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Under-Card Link */}
      <div className="mt-4 text-center font-montserrat">
        <p className="text-xs text-[#3A2F1D] font-medium">
          Already registered?{" "}
          <Link
            href="/expert/login"
            className="font-extrabold text-[#1B2264] hover:underline inline-flex items-center gap-1"
          >
            Sign in &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
