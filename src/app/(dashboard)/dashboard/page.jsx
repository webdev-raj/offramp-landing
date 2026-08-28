"use client";

import DashboardHeader from "@/components/dashboard/layout/DashboardHeader";
import ProfileCard from "@/components/dashboard/profile/ProfileCard";
import ProfileQuickStats from "@/components/dashboard/profile/ProfileQuickStats";
import ProfileDashboardStats from "@/components/dashboard/profile/ProfileDashboardStats";
import WeeklyPlanTable from "@/components/dashboard/profile/WeeklyPlanTable";
import DiamondDivider from "@/components/shared/DiamondDivider";

import { useUserProfile } from "@/lib/hooks/useUserProfile";
import { useWeeklyPlan } from "@/lib/hooks/useWeeklyPlan";

export default function ProfilePage() {
  const { data: profile, loading: profileLoading, error: profileError } = useUserProfile();
  const { data: weeklyPlan, loading: planLoading, error: planError } = useWeeklyPlan();

  return (
    <div>
      {/* Page Header */}
      <DashboardHeader eyebrow="PROFILE CONTROL CENTER" title="Profile" />

      {/* Main Profile Info Card */}
      <ProfileCard profile={profile} loading={profileLoading} error={profileError} />

      {/* 3 Quick Stat Cards (Diet Type, Budget Focus, Cuisine) */}
      <ProfileQuickStats profile={profile} loading={profileLoading} error={profileError} />

      {/* 4 Colored Dashboard Stat Boxes + Update Preferences Button */}
      <ProfileDashboardStats stats={profile?.stats} loading={profileLoading} error={profileError} />

      {/* Weekly Plan Schedule Table */}
      <WeeklyPlanTable weeklyPlan={weeklyPlan} loading={planLoading} error={planError} />

      {/* Decorative Bottom Diamond/Triangle Divider */}
      <DiamondDivider variant="triangles" count={44} className="pt-6 pb-12" />
    </div>
  );
}
