"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/common/AnimatedSection";
import PageTransition from "@/components/common/PageTransition";
import { SITE_CONFIG } from "@/lib/constants";
import { personalInfo } from "@/lib/data";
import type { ContactForm } from "@/types";
import Link from "next/link";

function ContactPageClient() {
  const [isOpeningDraft, setIsOpeningDraft] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    setIsOpeningDraft(true);

    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Hi Ibraheem,

Name: ${data.name}
Email: ${data.email}

${data.message}`
    );

    window.location.href = `mailto:${SITE_CONFIG.links.email}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setIsOpeningDraft(false);
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: SITE_CONFIG.links.email,
      href: `mailto:${SITE_CONFIG.links.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 810 901 9750",
      href: "tel:+2348109019750",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: SITE_CONFIG.links.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: SITE_CONFIG.links.linkedin,
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: SITE_CONFIG.links.twitter,
    },
  ];

  return (
    <PageTransition>
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {` Have a project in mind or want to discuss opportunities? I'd love
              to hear from you. Let's create something amazing together!`}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">{`Let's Connect`}</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {`  I'm always interested in new opportunities and exciting
                    projects. Whether you have a question, want to collaborate,
                    or just want to say hi, feel free to reach out through any
                    of the channels below.`}
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        {item.href === "#" ? (
                          <p className="text-muted-foreground">{item.value}</p>
                        ) : (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={link.label}
                      >
                        <link.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <Card>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Email Draft Ready
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {` Your email app should open with a drafted message to me.
                        If it doesn't, you can still reach me directly with the
                        contact details on this page.`}
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          Send Me a Message
                        </h2>
                        <p className="text-muted-foreground">
                          {`This opens your email app with a pre-filled draft.`}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            placeholder="Your Name"
                            {...register("name", {
                              required: "Name is required",
                            })}
                            className={errors.name ? "border-red-500" : ""}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address",
                              },
                            })}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Input
                          placeholder="Subject"
                          {...register("subject", {
                            required: "Subject is required",
                          })}
                          className={errors.subject ? "border-red-500" : ""}
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Textarea
                          placeholder="Your message..."
                          rows={5}
                          {...register("message", {
                            required: "Message is required",
                            minLength: {
                              value: 10,
                              message:
                                "Message must be at least 10 characters long",
                            },
                          })}
                          className={errors.message ? "border-red-500" : ""}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isOpeningDraft}
                      >
                        {isOpeningDraft ? (
                          <div className="flex items-center">
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                            Opening draft...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="h-4 w-4 mr-2" />
                            Draft Email
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default function ContactPage() {
  return <ContactPageClient />;
}
