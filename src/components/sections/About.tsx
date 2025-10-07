import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/common/AnimatedSection";
import PageTransition from "@/components/common/PageTransition";
import { aboutMe, personalInfo, skills } from "@/lib/data";
import SkillsSection from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about my background, experience, and passion for frontend development.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get to know more about my journey, skills, and what drives my
              passion for creating amazing web experiences.
            </p>
          </AnimatedSection>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Profile Image */}
            <AnimatedSection delay={0.1} className="lg:col-span-1">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src="/profile.jpg"
                      alt={personalInfo.name}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Bio Content */}
            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {`Hello! I'm ${personalInfo.name}`}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {aboutMe.intro}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {aboutMe.story}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutMe.mission}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {`What I'm Passionate About`}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.interests.map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Fun Facts */}
          <AnimatedSection delay={0.3} className="mb-16">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Fun Facts About Me
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {aboutMe.funFacts.map((fact, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">{fact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Skills Section */}
          <SkillsSection />
        </div>
      </div>
    </PageTransition>
  );
}
