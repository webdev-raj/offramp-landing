import { Anton, Poppins } from "next/font/google";
import Script from "next/script";
import TourKitProvider from "@/components/shared/TourKitProvider";
import "./globals.css";

const TOURKIT_SDK_SRC =
  "https://cdn.jsdelivr.net/gh/webdev-raj/Tourkit@sdk-v14/sdk/dist/tourkit.min.js";
const TOURKIT_SCRIPT_KEY = process.env.NEXT_PUBLIC_TOURKIT_SCRIPT_KEY;
const TOURKIT_API =
  process.env.NEXT_PUBLIC_TOURKIT_API || "https://tourkit-phi.vercel.app";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "OffRamp | Smart Food Swaps - India",
  description: "Helping people change what they eat without changing who they are — through AI-guided food transitions using familiar Indian flavors.",
  keywords: "food swap, healthy Indian food, nutrition, tofu makhani, diet transition, Indian kitchen metrics",
  openGraph: {
    title: "OffRamp - Love the Food, Swap the Rest",
    description: "AI-guided food transitions tailored for Indian cuisine.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-poppins bg-[#FDF8EE] text-[#1E1E1E] min-h-full flex flex-col selection:bg-[#E0187A] selection:text-white">
        <TourKitProvider />
        {children}
        {TOURKIT_SCRIPT_KEY ? (
          <Script
            src={TOURKIT_SDK_SRC}
            strategy="afterInteractive"
            data-key={TOURKIT_SCRIPT_KEY}
            data-api={TOURKIT_API}
          />
        ) : null}
      </body>
    </html>
  );
}
