import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundClass?: string;
}

const HeroSection = ({
  title = "Turn Ops Chaos Into Momentum!",
  subtitle = "Convert Your Ops into a Revenue DRIVER. Let's Talk How.",
  ctaText = "Book 15 Min Intro Call",
  ctaLink = "https://calendly.com/morgan-t12/salesopssurgeintro",
  backgroundClass = "bg-slate-900",
}: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showUnderline, setShowUnderline] = useState(false);
  const fullText = title;
  const typingSpeed = 50; // milliseconds per character

  // Typewriter effect
  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (displayText.length === fullText.length) {
      setIsTyping(false);
      // Show the animated underline after typing is complete
      setTimeout(() => {
        setShowUnderline(true);
      }, 200);
    }
  }, [displayText, fullText, isTyping]);

  // Smooth scroll function for CTA button
  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(ctaLink, "_blank");
  };

  return (
    <section
      className={cn(
        "min-h-[85vh] flex flex-col justify-center relative px-4 md:px-8 lg:px-16",
        backgroundClass,
      )}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />

      {/* Green accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />

      <div className="max-w-7xl mx-auto w-full pt-24 pb-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight relative">
              <span>{displayText}</span>
              <span
                className={`absolute bottom-[-8px] left-0 h-2 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.9)] transition-all duration-1000 ease-in-out ${showUnderline ? "w-full animate-pulse-glow" : "w-0"}`}
                style={{
                  filter: showUnderline
                    ? "drop-shadow(0 0 8px rgba(34,197,94,0.8))"
                    : "none",
                }}
              ></span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-4">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCtaClick}
                className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-6 h-auto group animate-pulse-glow relative overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-shadow"
              >
                {ctaText}
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="w-full">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-green-500/30 h-[300px] md:h-[350px] lg:h-[400px]">
              {/* Cartoon office split image */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>
                <img
                  src="/images/office-chaos-cartoon-split.jpg?v=2"
                  alt="Before and After Office Transformation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
