import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface ServiceCardProps {
  title?: string;
  description?: string;
  hoverDescription?: string;
  icon?: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const ServiceCard = ({
  title = "CRM Rescue",
  description = "",
  hoverDescription = "Additional wins and achievements will appear here.",
  icon = (
    <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
      <ArrowRight className="w-6 h-6 text-green-400" />
    </div>
  ),
  ctaText = "Fix This Now",
  ctaLink = "#",
  className = "",
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`bg-[#2A3A4A] border-slate-700 hover:border-[#39FF14] hover:border-2 transition-all duration-300 h-[450px] flex flex-col w-full md:w-[300px] mx-auto p-[20px] shadow-md ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center gap-4 mb-3">
          {icon}
          <CardTitle className="text-2xl font-bold text-white">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-[#E0E0E0] h-[280px] text-base flex flex-col">
          {isHovered ? (
            <div
              className="animate-fade-in h-full"
              dangerouslySetInnerHTML={{ __html: hoverDescription }}
            ></div>
          ) : (
            <div
              className="text-left h-full flex flex-col justify-between"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 mt-auto">
        {/* Additional content can be added here */}
      </CardContent>
      <CardFooter className="pt-4 px-0 pb-0 mt-auto">
        <Button
          className="w-full bg-green-500 hover:bg-green-600 text-white group transition-colors font-bold text-base shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]"
          onClick={() => (window.location.href = ctaLink)}
        >
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
