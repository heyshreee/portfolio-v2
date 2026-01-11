import { Shield, Terminal, Server, Database, Cloud, Code, Layout, GitBranch } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden flex flex-col items-center justify-center bg-transparent">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20"></div>

      {/* Page Title */}
      <div className="z-10 text-center mb-16 relative">
        <h2 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-white/60 bg-clip-text text-transparent">
          Neural Skill Architecture
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto text-lg">
          Visualizing the intersection of offensive security and modern full-stack engineering.
        </p>
      </div>

      {/* Neural Map Container */}
      <div className="relative w-full max-w-[1200px] h-[700px] flex items-center justify-center">

        {/* Central Core */}
        <div className="relative z-30 group cursor-default">
          <div className="hexagon w-48 h-56 bg-primary/20 backdrop-blur-xl border border-primary/50 flex flex-col items-center justify-center p-6 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-transform duration-500 group-hover:scale-110">
            <Shield className="w-12 h-12 text-primary mb-2" />
            <div className="text-center text-slate-900 dark:text-white">
              <span className="block font-bold text-lg leading-tight uppercase tracking-widest">Lead</span>
              <span className="block font-light text-sm opacity-70 uppercase tracking-tighter">DevSecOps</span>
            </div>
          </div>
          {/* Orbital Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/20 rounded-full animate-pulse pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary/10 rounded-full pointer-events-none"></div>
        </div>

        {/* Cluster: Full-Stack (Top Right) */}
        <div className="absolute top-10 right-4 md:right-20 flex flex-col items-start gap-4 z-20">
          <div className="px-4 py-1 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Frontend & UI</span>
          </div>
          <div className="flex gap-3 flex-wrap max-w-[300px] justify-start">
            {["React.js", "TypeScript", "Next.js", "Tailwind"].map((skill) => (
              <div key={skill} className="skill-pill flex h-10 items-center justify-center gap-2 rounded-full bg-white dark:bg-background-dark px-5 text-slate-700 dark:text-white shadow-sm">
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cluster: Offensive Security (Bottom Left) */}
        <div className="absolute bottom-10 left-4 md:left-20 flex flex-col items-end gap-4 z-20">
          <div className="px-4 py-1 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">Cyber Security</span>
          </div>
          <div className="flex gap-3 flex-wrap max-w-[350px] justify-end">
            <div className="skill-pill flex h-10 items-center justify-center gap-2 rounded-full bg-white dark:bg-background-dark px-5 border-red-500/20 text-slate-700 dark:text-white shadow-sm">
              <Terminal className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium">PenTesting</span>
            </div>
            {["OWASP", "Burp Suite", "Metasploit", "Kali"].map((skill) => (
              <div key={skill} className="skill-pill flex h-10 items-center justify-center gap-2 rounded-full bg-white dark:bg-background-dark px-5 text-slate-700 dark:text-white shadow-sm">
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cluster: Backend (Top Left) */}
        <div className="absolute top-20 left-4 md:left-40 flex flex-col items-end gap-4 z-20">
          <div className="px-4 py-1 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">Architecture</span>
          </div>
          <div className="flex gap-3 flex-wrap max-w-[280px] justify-end">
            {["Node.js", "Go", "PostgreSQL", "Redis"].map((skill) => (
              <div key={skill} className="skill-pill flex h-10 items-center justify-center gap-2 rounded-full bg-white dark:bg-background-dark px-5 text-slate-700 dark:text-white shadow-sm">
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cluster: Cloud (Bottom Right) */}
        <div className="absolute bottom-20 right-4 md:right-40 flex flex-col items-start gap-4 z-20">
          <div className="px-4 py-1 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Infrastructure</span>
          </div>
          <div className="flex gap-3 flex-wrap max-w-[300px] justify-start">
            {["AWS", "Docker", "Kubernetes", "CI/CD"].map((skill) => (
              <div key={skill} className="skill-pill flex h-10 items-center justify-center gap-2 rounded-full bg-white dark:bg-background-dark px-5 text-slate-700 dark:text-white shadow-sm">
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SVG Connections (Visual Only) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" xmlns="http://www.w3.org/2000/svg">
          {/* Top Left */}
          <path className="neural-line" d="M 600 350 Q 500 250 400 220" fill="none" strokeWidth="1.5"></path>
          {/* Top Right */}
          <path className="neural-line" d="M 600 350 Q 750 200 850 150" fill="none" strokeWidth="1.5"></path>
          {/* Bottom Left */}
          <path className="neural-line" d="M 600 350 Q 450 500 300 580" fill="none" strokeWidth="1.5"></path>
          {/* Bottom Right */}
          <path className="neural-line" d="M 600 350 Q 700 500 850 550" fill="none" strokeWidth="1.5"></path>
        </svg>

        {/* Floating Proficiency Card */}
        <div className="absolute bottom-10 right-10 z-40 hidden lg:block">
          <div className="bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-6 rounded-xl w-64 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-white/50">Core Expertise</p>
                <p className="font-bold text-slate-900 dark:text-white">Security Analysis</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1 text-slate-700 dark:text-slate-300">
                  <span>Advanced PenTesting</span>
                  <span className="text-primary">95%</span>
                </div>
                <div className="h-1 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1 text-slate-700 dark:text-slate-300">
                  <span>Cloud Security</span>
                  <span className="text-primary">88%</span>
                </div>
                <div className="h-1 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[88%]"></div>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 border border-primary/30 rounded-lg text-xs font-bold text-primary hover:bg-primary hover:text-white transition-colors">
              VIEW ALL CERTIFICATIONS
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-[960px] mt-12 px-4 text-center">
        <p className="text-slate-500 text-sm font-normal leading-normal">
          Hover over any node to explore the technical synergy between security protocols and application performance.
          <br />This map is dynamically generated from real-world project deployments.
        </p>
      </div>
    </section>
  );
}
