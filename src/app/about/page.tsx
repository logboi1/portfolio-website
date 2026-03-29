import type { Metadata } from "next";
import AboutPage from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about my background, experience, and product engineering approach across frontend, mobile, and backend integrations.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
