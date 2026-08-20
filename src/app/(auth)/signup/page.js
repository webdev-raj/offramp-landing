import AuthPage from "@/components/auth/AuthPage";

export const metadata = {
  title: "Create Account | OffRamp",
  description: "Join OffRamp for free. Smarter ingredient swaps for Indian dishes.",
};

export default function SignUpPage() {
  return <AuthPage initialMode="signup" />;
}
