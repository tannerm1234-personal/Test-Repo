import React from "react";
import { Calendar, Database, Wrench, Zap } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface ServicesProps {
  id?: string;
  title?: string;
  subtitle?: string;
  subtitleSecondLine?: string;
  services?: {
    title: string;
    description: string;
    hoverDescription?: string;
    icon: React.ReactNode;
    ctaText: string;
    ctaLink: string;
  }[];
}

const ServicesSection = ({
  id = "services",
  title = "Is this you?",
  subtitle = "Ops Chaos is COMMON for everyone",
  subtitleSecondLine = "ranging from SaaS Startups to Blue-Collar Businesses.",
  services = [
    {
      title: "CRM Data Nightmares",
      description:
        '<ul class="pl-5 space-y-2 mb-auto">\n<li class="flex items-start"><span class="inline-block w-2 h-2 rounded-full bg-[#39FF14] mt-2 mr-2 flex-shrink-0"></span><span>Leads buried in CRM mess</span></li>\n<li class="flex items-start"><span class="inline-block w-2 h-2 rounded-full bg-[#39FF14] mt-2 mr-2 flex-shrink-0"></span><span>Hours wasted digging for data</span></li>\n<li class="flex items-start"><span class="inline-block w-2 h-2 rounded-full bg-[#39FF14] mt-2 mr-2 flex-shrink-0"></span><span>Outdated info everywhere</span></li>\n</ul>\n\n<div class="mt-auto text-center"><span class="font-bold">Your team says...</span>\n<div class="text-[#39FF14]/70 italic text-sm mt-1 font-[\'Open_Sans\',sans-serif]">"I can never find what I\'m looking for in the system"</div></div>',
      hoverDescription:
        '<div class="h-full flex flex-col justify-between">\n<div>Clean Up your data and unlock its purpose with no downtime. Recover lost leads, drive Thousands in additional revenue, and save hundreds of hours.</div>\n<div class="mt-auto text-center"><span class="font-bold">Your Team will NOW Say...</span>\n<div class="text-[#39FF14]/70 italic text-sm mt-1 font-[\'Open_Sans\',sans-serif]">"I found leads I forgot about months ago... Just got another 10 meetings set up from these!!"</div></div>\n</div>',
      icon: <Database className="w-6 h-6 text-green-400" />,
      ctaText: "Fix This Now",
      ctaLink: "#contact",
    },
    {
      title: "Manual Task Overload",
      description:
        '<ul class="pl-5 space-y-2 mb-auto">\n<li class="flex items-start"><span class="inline-block w-2 h-2 rounded-full bg-[#39FF14] mt-2 mr-2 flex-shrink-0"></span><span>Drowning in repetitive tasks</span></li>\n<li class="flex items-start"><span class="inline-block w-2 h-2 rounded-full bg-[#39FF14] mt-2 mr-2 flex-shrink-0"></span><span>Team burned out due to low-value, low-impact work</span></li>\n<li class="flex items-start"><span class="inline-block w-2 h-2 rounded-full bg-[#39FF14] mt-2 mr-2 flex-shrink-0"></span><span>Mistakes piling up</span></li>\n</ul>\n\n<div class="mt-auto text-center"><span class="font-bold">Your team says...</span>\n<div class="text-[#39FF14]/70 italic text-sm mt-1 font-[\'Open_Sans\',sans-serif]">"I spend hours on this, it\'s the same thing every week but it has to get done"</div></div>',
      hoverDescription:
        '<div class="h-full flex flex-col justify-between">\n<div>Automation can reduce human error, save each person 2+ hours per day, and ensure your team is focusing on the right tasks that move the needle.</div>\n<div class="mt-auto text-center"><span class="font-bold">Your Team will NOW Say...</span>\n<div class="text-[#39FF14]/70 italic text-sm mt-1 font-[\'Open_Sans\',sans-serif]">"I didn\'t realize, that report was taking me 3 hours every week and I was still missing things!"</div></div>\n</div>',
      icon: <Zap className="w-6 h-6 text-green-400" />,
      ctaText: "Fix This Now",
      ctaLink: "#contact",
    },
    {
      title: "Resistant, Inefficient Team",
      description:
        '<ul class="pl-5 space-y-2 mb-auto">\n<li class="flex items-start"><span class="inline-block w-2 h-2 rounded-full bg-[#39FF14] mt-2 mr-2 flex-shrink-0"></span><span>System changes are hated</span></li>\n<li class="flex items-start"><span class="inline-block w-2 h-2 rounded-full bg-[#39FF14] mt-2 mr-2 flex-shrink-0"></span><span>Team stuck in outdated habits</span></li>\n<li class="flex items-start"><span class="inline-block w-2 h-2 rounded-full bg-[#39FF14] mt-2 mr-2 flex-shrink-0"></span><span>Growth is slowing but team is hesitant to change</span></li>\n</ul>\n\n<div class="mt-auto text-center"><span class="font-bold">Your team says...</span>\n<div class="text-[#39FF14]/70 italic text-sm mt-1 font-[\'Open_Sans\',sans-serif]">"It\'s too much work to use, I\'m just going to do what I\'ve been doing."</div></div>',
      hoverDescription:
        '<div class="h-full flex flex-col justify-between">\n<div>Turn your CRM from a \'task\' into an assistant and salary booster!</div>\n<div class="mt-auto text-center"><span class="font-bold">Your Team will NOW Say...</span>\n<div class="text-[#39FF14]/70 italic text-sm mt-1 font-[\'Open_Sans\',sans-serif]">"I wasn\'t sure at first, but it\'s SO much easier. Now I don\'t have to use my notepad for follow ups!"</div></div>\n</div>',
      icon: <Wrench className="w-6 h-6 text-green-400" />,
      ctaText: "Fix This Now",
      ctaLink: "#contact",
    },
  ],
}: ServicesProps) => {
  return (
    <section
      id={id}
      className="py-16 px-4 md:px-8 lg:px-16 bg-slate-900 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow-[0_0_8px_#39FF14]">
            <span className="text-white border-b-2 border-green-500 pb-1">
              {title}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[30px]">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                hoverDescription={service.hoverDescription}
                icon={
                  <div className="w-12 h-12 rounded-full bg-[#39FF14]/20 flex items-center justify-center shadow-[0_0_8px_rgba(57,255,20,0.3)]">
                    <div className="scale-125 text-[#39FF14]">
                      {service.icon}
                    </div>
                  </div>
                }
                ctaText={service.ctaText}
                ctaLink={service.ctaLink}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-32 mb-16">
          <div className="text-[#D3D3D3] w-full mx-auto text-lg relative flex flex-col items-center">
            <p className="font-['Open_Sans',sans-serif] text-lg">{subtitle}</p>
            <p className="font-['Open_Sans',sans-serif] text-lg mb-16">
              {subtitleSecondLine}
            </p>
            <h3 className="text-2xl font-bold text-green-400 mb-20">
              Let me help you.
            </h3>
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
                <span className="inline-block border-b-2 border-green-500 pb-1">
                  My Offer to You
                </span>
                <span className="text-green-500 inline-block ml-2 align-middle">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
              </h2>
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-8 mx-auto max-w-screen-xl">
                {/* Step 1 */}
                <div className="bg-slate-800 px-4 py-4 rounded-lg border-2 border-slate-700 hover:border-green-500 transition-all duration-300 flex flex-col items-center justify-between shadow-lg hover:shadow-green-500/20 group flex-1 min-w-[250px] max-h-[180px]">
                  <div className="w-full flex justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-400 font-bold mx-auto shadow-[0_0_10px_rgba(34,197,94,0.3)] group-hover:bg-green-500/30 transition-all duration-300">
                      <span className="text-xl">1</span>
                    </div>
                  </div>
                  <div className="text-center flex-grow">
                    <h5 className="text-white font-semibold text-center w-full text-[18px] mt-2">
                      15-Min Intro Call
                    </h5>
                  </div>
                  <div className="text-center mt-auto">
                    <p className="text-green-400 text-[11px] text-center w-full font-semibold"></p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-800 px-4 py-4 rounded-lg border-2 border-slate-700 hover:border-green-500 transition-all duration-300 flex flex-col items-center justify-between shadow-lg hover:shadow-green-500/20 group flex-1 min-w-[250px] max-h-[180px]">
                  <div className="w-full flex justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-400 font-bold mx-auto shadow-[0_0_10px_rgba(34,197,94,0.3)] group-hover:bg-green-500/30 transition-all duration-300">
                      <span className="text-xl">2</span>
                    </div>
                  </div>
                  <div className="text-center flex-grow">
                    <h5 className="text-white font-semibold text-center w-full text-[18px] mt-2">
                      3-4 Hour Deep Dive
                    </h5>
                  </div>
                  <div className="text-center mt-auto">
                    <p className="text-green-400 text-[11px] text-center w-full font-semibold"></p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-800 px-4 py-4 rounded-lg border-2 border-slate-700 hover:border-green-500 transition-all duration-300 flex flex-col items-center justify-between shadow-lg hover:shadow-green-500/20 group flex-1 min-w-[250px] max-h-[180px]">
                  <div className="w-full flex justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-400 font-bold mx-auto shadow-[0_0_10px_rgba(34,197,94,0.3)] group-hover:bg-green-500/30 transition-all duration-300">
                      <span className="text-xl">3</span>
                    </div>
                  </div>
                  <div className="text-center flex-grow">
                    <h5 className="text-white font-semibold text-center w-full text-[18px] mt-2">
                      Create Custom Strategy
                    </h5>
                  </div>
                  <div className="text-center mt-auto">
                    <p className="text-green-400 text-[11px] text-center w-full font-semibold">
                      $300 (or execute yourself)
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-slate-800 px-4 py-4 rounded-lg border-2 border-slate-700 hover:border-green-500 transition-all duration-300 flex flex-col items-center justify-between shadow-lg hover:shadow-green-500/20 group flex-1 min-w-[250px] max-h-[180px]">
                  <div className="w-full flex justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-400 font-bold mx-auto shadow-[0_0_10px_rgba(34,197,94,0.3)] group-hover:bg-green-500/30 transition-all duration-300">
                      <span className="text-xl">4</span>
                    </div>
                  </div>
                  <div className="text-center flex-grow">
                    <h5 className="text-white font-semibold text-center w-full text-[18px] mt-2">
                      Create Formal
                      <br />
                      Ops Blueprint
                    </h5>
                  </div>
                  <div className="text-center mt-auto">
                    <p className="text-green-400 text-[11px] text-center w-full font-semibold">
                      $700 (or execute yourself)
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-slate-800 px-4 py-4 rounded-lg border-2 border-slate-700 hover:border-green-500 transition-all duration-300 flex flex-col items-center justify-between shadow-lg hover:shadow-green-500/20 group flex-1 min-w-[250px] max-h-[180px]">
                  <div className="w-full flex justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-400 font-bold mx-auto shadow-[0_0_10px_rgba(34,197,94,0.3)] group-hover:bg-green-500/30 transition-all duration-300">
                      <span className="text-xl">5</span>
                    </div>
                  </div>
                  <div className="text-center flex-grow">
                    <h5 className="text-white font-semibold text-center w-full text-[18px] mt-2">
                      Build & Execute
                      <br />
                      All Changes
                    </h5>
                  </div>
                  <div className="text-center mt-auto">
                    <p className="text-green-400 text-[11px] text-center w-full font-semibold">
                      $1,750-$3,000 (or execute yourself)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <a
                  href="https://calendly.com/morgan-t12/salesopssurgeintro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-md group transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]"
                >
                  Book a 15 Min Intro Call
                  <Calendar className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
