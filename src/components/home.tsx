import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import ProofSection from "./ProofSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <ServicesSection />
        <ProofSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
