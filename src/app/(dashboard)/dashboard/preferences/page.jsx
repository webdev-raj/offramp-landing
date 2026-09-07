"use client";

import DashboardHeader from "@/components/dashboard/layout/DashboardHeader";
import PreferencesWizard from "@/components/dashboard/preferences/PreferencesWizard";

export default function PreferencesPage() {
  return (
    <div>
      <DashboardHeader eyebrow="PROFILE CONTROL CENTER" title="Preferences" />
      <PreferencesWizard />
    </div>
  );
}
