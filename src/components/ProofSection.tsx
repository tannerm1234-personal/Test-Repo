import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

interface StatItemProps {
  value?: number;
  label?: string;
  prefix?: string;
  suffix?: string;
}

const StatItem = ({
  value = 0,
  label = "Stat",
  prefix = "",
  suffix = "",
}: StatItemProps) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="text-4xl font-bold text-green-400 mb-2">
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="text-slate-300 font-medium">{label}</div>
    </div>
  );
};

interface TestimonialProps {
  quote?: string;
  author?: string;
  company?: string;
  image?: string;
}

const Testimonial = ({
  quote = "Tanner completely transformed our sales process. His CRM rescue saved us countless hours and increased our close rate by 35%.",
  author = "Jane Smith",
  company = "TechStart Inc.",
  image = "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
}: TestimonialProps) => {
  return (
    <Card className="bg-slate-800 border-green-500/30 p-6 max-w-2xl mx-auto shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-green-400">
            <img
              src={image}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <blockquote className="text-slate-300 italic mb-4">
              "{quote}"
            </blockquote>
            <div className="font-semibold text-white">{author}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface ProofSectionProps {
  stats?: StatItemProps[];
  testimonials?: TestimonialProps[];
  className?: string;
}

const ProofSection = ({
  stats = [
    {
      value: 200,
      label: "Scaled a team from 10 to 200+ in 2 years",
      suffix: "+",
    },
    {
      value: 68,
      label:
        "Enhanced Sales Teams, Increasing Rev. by avg. 68% within 3 months",
      suffix: "%",
    },
    {
      value: 1,
      label: "Generated $1M+ of qualified pipeline through Ops fixes",
      prefix: "$",
      suffix: "M+",
    },
    {
      value: 600,
      label: "Migrated 600K+ CRM records with zero downtime",
      suffix: "K+",
    },
    {
      value: 2,
      label: "Saved 2+ hours daily per employee from recurring, 'unseen' tasks",
      suffix: "+ hrs",
    },
    {
      value: 50,
      label: "Reduced employee onboarding time by 50%",
      suffix: "%",
    },
  ],
  testimonials = [
    {
      quote: "Tanner fixed our CRM chaos—lifesaver.",
      author: "Future Client",
      company: "Your Company Next",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=future",
    },
  ],
  className,
}: ProofSectionProps) => {
  return (
    <section
      id="proof"
      className={cn(
        "py-16 px-4 bg-slate-900 flex flex-col justify-center",
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <span className="text-white border-b-2 border-green-500 pb-1">
              My Track Record
            </span>
            <span className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
