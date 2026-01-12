import React from "react";
import { Shield, Server, Cloud, Layout, Cpu, Database, Globe, Lock, Code, Terminal } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend & UI",
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      description: "Building immersive, responsive user interfaces.",
      skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "group-hover:border-blue-500/50",
      textColor: "text-blue-400"
    },
    {
      id: "backend",
      title: "Backend Architecture",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      description: "Designing robust, scalable server-side systems.",
      skills: ["Node.js", "Go", "PostgreSQL", "Redis", "GraphQL"],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "group-hover:border-emerald-500/50",
      textColor: "text-emerald-400"
    },
    {
      id: "security",
      title: "Cyber Security",
      icon: <Shield className="w-6 h-6 text-red-400" />,
      description: "Securing applications from vulnerability to defense.",
      skills: ["Penetration Testing", "OWASP Top 10", "Burp Suite", "Metasploit", "Kali Linux"],
      color: "from-red-500/20 to-orange-500/20",
      borderColor: "group-hover:border-red-500/50",
      textColor: "text-red-400"
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      icon: <Cloud className="w-6 h-6 text-amber-400" />,
      description: "Deploying and managing cloud-native environments.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform"],
      color: "from-amber-500/20 to-yellow-500/20",
      borderColor: "group-hover:border-amber-500/50",
      textColor: "text-amber-400"
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 grid-bg overflow-hidden flex flex-col items-center justify-center">
      {/* Background Blur Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Page Title */}
      <div className="z-10 text-center mb-20 relative max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6 border border-primary/20">
          <Cpu className="w-4 h-4" />
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Neural Skill Architecture
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          A comprehensive visualization of my technical expertise, bridging the gap between
          <span className="text-primary font-semibold"> offensive security</span> and
          <span className="text-primary font-semibold"> modern full-stack engineering</span>.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="relative w-full max-w-7xl mx-auto z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>

    </section>
  );
}

function SkillCard({ category }) {
  return (
    <div className="group relative p-8 rounded-3xl glass-card border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Hover Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${category.textColor} shadow-lg`}>
            {category.icon}
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
            <Code className={`w-6 h-6 ${category.textColor} opacity-50`} />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{category.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm font-medium">{category.description}</p>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span key={skill} className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 group-hover:border-opacity-50 transition-colors ${category.borderColor}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
