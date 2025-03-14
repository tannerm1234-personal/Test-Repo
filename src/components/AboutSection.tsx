import React from "react";
import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  headshot?: string;
  linkedinUrl?: string;
  background?: string;
}

const AboutSection = ({
  title = "Startup Survivor Turned Ops Leader",
  subtitle = "VP of Enterprise Growth",
  description = "I started out as the go-to guy at a scrappy software startup - just 10 of us, figuring things out with grit, hustle, and a little chaos. Coming in with fresh eyes, I quickly found my groove, blending execution with operations to keep things moving fast without letting them fall apart. Over the years, I've led sales, ops, and marketing teams, scaling the company to over 200 people and bringing 60% of the entire industry onto our platform.\n\nI've seen it all – CRMs that the Sales team won't use, manual tasks being missed, delays that cause revenue loss, and tough processes that are hard to change. Now, I'm here to dive into your ops mess and pull you out—let's do this!",
  headshot = "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&q=80",
  linkedinUrl = "https://linkedin.com/in/tanner-morgan-33976ba5",
  background = "bg-slate-900",
}: AboutSectionProps) => {
  return (
    <section
      id="about"
      className={`${background} py-16 px-4 md:px-8 lg:px-16 w-full`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center flex items-center justify-center gap-2">
            <span className="text-white border-b-2 border-green-500 pb-1">
              Startup Operator, Growth Leader
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
                <path d="M3 3v18h18"></path>
                <path d="m19 6-5 8-4-2-3 9"></path>
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Abstract graphic and LinkedIn */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 mb-6 rounded-lg overflow-hidden border-4 border-green-500/30 bg-slate-800 flex items-center justify-center mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"></div>
              <div className="relative z-10 text-center p-4">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="relative mb-6">
                    <div className="absolute -inset-1 bg-green-500/30 rounded-full blur-md"></div>
                    <div className="relative bg-slate-800 p-4 rounded-full border border-green-500/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#39FF14"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold text-xl mb-2">
                    Sales Operations Expert
                  </div>
                  <div className="text-slate-300 text-sm">
                    Transforming Chaos into Growth
                  </div>
                </div>
              </div>
            </div>

            <Button
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-md transition-colors shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]"
              onClick={() => window.open(linkedinUrl, "_blank")}
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>

          {/* Right column - Professional story */}
          <div className="text-slate-300">
            {description.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
