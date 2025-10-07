"use client";

import ExperienceCard from "@/components/cards/ExperienceCard";
import AnimatedSection from "@/components/common/AnimatedSection";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <AnimatedSection>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          Professional Experience
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My journey through various roles and projects that have shaped my
          expertise.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
