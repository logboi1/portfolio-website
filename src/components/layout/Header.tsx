"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import Navigation from "./Navigation";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold gradient-text">
              {SITE_CONFIG.name}
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Navigation />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
