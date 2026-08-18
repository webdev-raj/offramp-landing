import AuthPage from "@/components/AuthPage";

export const metadata = {
  title: "Sign In | OffRamp",
  description: "Sign in to your OffRamp account for personalized Indian food swaps.",
};

export default function LoginPage() {
  return <AuthPage initialMode="signin" />;
}
