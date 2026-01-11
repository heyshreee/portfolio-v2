import React from "react";
import { ArrowRight, ShieldCheck, Terminal } from "lucide-react";
import profilePic from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 grid-bg overflow-hidden flex items-center" id="home">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary tracking-wide uppercase">Welcome to my universe</h2>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm <span className="text-primary">Sriram</span> 👋
            </h1>
            <div className="inline-block">
              <p className="typing-effect text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-400">
                Cyber Security Student
              </p>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              I'm a Cyber Security student passionate about building secure, efficient systems and developing full-stack applications.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:translate-y-[-2px] transition-all flex items-center gap-2" href="#projects">
              Explore My Work
              <ArrowRight className="w-5 h-5" />
            </a>
            <a className="px-8 py-4 glass-card font-bold rounded-xl hover:bg-white/10 dark:hover:bg-slate-800/50 transition-all text-slate-900 dark:text-white" href="#contact">
              Get In Touch
            </a>
          </div>
          {/* Preserving social icons from original design if needed, or we can leave them out to strictly match reference. 
              The reference has social icons in the footer. I will leave them out here to match the reference design exactly as requested. */}
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96 hex-glow">
            <div className="absolute inset-0 bg-primary/20 animate-pulse rotate-45 rounded-[60px] border-4 border-primary/30"></div>
            <div className="absolute inset-4 bg-background-dark dark:bg-slate-900 rotate-12 rounded-[50px] border-2 border-primary shadow-[0_0_30px_rgba(37,99,235,0.3)]"></div>
            <div className="absolute inset-6 rounded-[40px] overflow-hidden border-2 border-primary/20 grayscale hover:grayscale-0 transition-all duration-700">
              <img alt="Sriram Profile" className="w-full h-full object-cover" src={profilePic} />
            </div>
            <div className="absolute -top-4 -right-4 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-bounce">
              <ShieldCheck className="text-primary w-8 h-8" />
            </div>
            <div className="absolute -bottom-2 -left-4 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-bounce" style={{ animationDelay: "1s" }}>
              <Terminal className="text-primary w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
