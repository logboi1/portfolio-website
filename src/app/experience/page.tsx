import type { Metadata } from "next";
import ExperienceCard from "@/components/cards/ExperienceCard";
import AnimatedSection from "@/components/common/AnimatedSection";
import PageTransition from "@/components/common/PageTransition";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional journey and work experience in frontend development.",
};

export default function ExperiencePage() {
  const workExperiences = experiences.filter((exp) => exp.type === "work");
  const otherExperiences = experiences.filter((exp) => exp.type !== "work");

  return (
    <PageTransition>
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              My Experience
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My professional journey through various roles and projects that
              have shaped my expertise in frontend development.
            </p>
          </AnimatedSection>

          {/* Work Experience */}
          <AnimatedSection delay={0.1} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Work Experience
            </h2>
            <div className="space-y-8">
              {workExperiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Other Experience */}
          {otherExperiences.length > 0 && (
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold mb-8 text-center">
                Other Experience
              </h2>
              <div className="space-y-8">
                {otherExperiences.map((experience, index) => (
                  <ExperienceCard
                    key={experience.id}
                    experience={experience}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
