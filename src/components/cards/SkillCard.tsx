"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/types";

const skillIcons: Record<string, string> = {
  react: "⚛️",
  nextjs: "▲",
  typescript: "📘",
  javascript: "🟨",
  vue: "💚",
  tailwind: "🎨",
  sass: "🎨",
  framer: "🎭",
  nodejs: "🟢",
  express: "🚂",
  postgresql: "🐘",
  mongodb: "🍃",
  prisma: "💎",
  graphql: "📊",
  git: "🔧",
  docker: "🐳",
  aws: "☁️",
  vercel: "▲",
  figma: "🎨",
  vscode: "📝",
  design: "🎨",
  responsive: "📱",
  performance: "⚡",
  seo: "📈",
};

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

export default function SkillCard({ skill, index = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="cursor-default"
    >
      <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
        <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {skillIcons[skill.icon] || "🔹"}
          </div>
          <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
            {skill.name}
          </h3>

          {/* Skill Level Indicator */}
          <div className="w-full max-w-[120px] mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-muted-foreground">Level</span>
              <span className="text-xs font-medium">{skill.level}/5</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                className="bg-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(skill.level / 5) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              />
            </div>
          </div>

          <Badge
            variant="outline"
            className="text-xs capitalize group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            {skill.category}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  );
}
