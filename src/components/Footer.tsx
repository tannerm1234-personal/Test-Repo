import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
  copyrightText?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  seoText?: string;
}

const Footer = ({
  className = "",
  copyrightText = "© 2023 SalesOps Surge. All rights reserved.",
  socialLinks = {
    linkedin: "https://linkedin.com/in/tanner-morgan-33976ba5",
    email: "mailto:morgan.t12@gmail.com",
  },
  seoText = "Sales Ops Fixer | CRM Rescue | SaaS & Trades Growth",
}: FooterProps) => {
  return (
    <footer
      className={cn(
        "w-full bg-slate-900 border-t border-slate-800 py-8 px-4 md:px-8",
        className,
      )}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              SalesOps Surge
            </h3>
            <p className="text-slate-400 max-w-md">{seoText}</p>
          </div>
          <div className="flex flex-col md:items-end justify-start">
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.linkedin && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800 hover:bg-green-500 text-white"
                  asChild
                >
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              )}

              {socialLinks.email && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800 hover:bg-green-500 text-white"
                  asChild
                >
                  <a href={socialLinks.email} aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">{copyrightText}</p>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-500 hover:text-green-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-green-400 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
