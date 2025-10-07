"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/common/AnimatedSection";
import { skills } from "@/lib/data";
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

const categoryNames = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & Technologies",
  others: "Other Skills",
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
        <CardContent className="p-4 text-center">
          <div className="text-2xl mb-2">{skillIcons[skill.icon] || "🔹"}</div>
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
            {skill.name}
          </h3>
          <div className="flex justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < skill.level ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <Badge variant="outline" className="text-xs">
            Level {skill.level}/5
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function SkillsSection() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <AnimatedSection>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          Skills & Technologies
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to
          life.
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="text-2xl font-bold mb-6 text-center">
              {categoryNames[category as keyof typeof categoryNames]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categorySkills.map((skill, index) => (
                <SkillCard key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
