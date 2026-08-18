import AuthPage from "@/components/AuthPage";

export const metadata = {
  title: "Create Account | OffRamp",
  description: "Join OffRamp for free. Smarter ingredient swaps for Indian dishes.",
};

export default function SignUpPage() {
  return <AuthPage initialMode="signup" />;
}
