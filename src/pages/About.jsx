import React from "react";
import profilePic from "../assets/profile.png";

export default function About() {
  return (
    <section className="py-24 px-6 bg-slate-50/50 dark:bg-slate-900/30" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm identity-card-glow transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono ml-4">profile.json</div>
                </div>
                <div className="p-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
                    <div className="relative w-full h-full rounded-full border-2 border-primary p-1 bg-slate-800">
                      <img
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover opacity-80"
                        src={profilePic}
                      />
                    </div>
                  </div>
                  <div className="text-center space-y-2 mb-8">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Sriram</h3>
                    <p className="text-primary font-mono text-sm">Cyber Security Student</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                    <div className="text-center">
                      <p className="text-xs text-slate-500 uppercase font-mono">Repositories</p>
                      <p className="text-xl font-bold text-white">42</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 uppercase font-mono">Rank</p>
                      <p className="text-xl font-bold text-white">Pro</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary px-4 py-2 text-center">
                  <span className="text-[10px] font-mono font-bold text-white tracking-widest uppercase">
                    Verified Developer Identity
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                I'm <span className="text-slate-900 dark:text-white font-bold">Sriram</span>, a dedicated student specializing in{" "}
                <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded font-semibold">
                  Cyber Security
                </span>{" "}
                with a profound interest in building secure, resilient infrastructures and{" "}
                <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded font-semibold">
                  Full-stack
                </span>{" "}
                web applications.
              </p>
              <p>
                My journey is fueled by a commitment to combining creative front-end design with robust, high-performance backend systems. I believe that security shouldn't be an afterthought but an integral part of the architectural DNA of any project.
              </p>
              <p>
                Beyond coding, I am an active learner in penetration testing and UI/UX design, constantly exploring new ways to bridge the gap between technical complexity and user accessibility.
              </p>
            </div>
            <div className="mt-10">
              <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                Expertise & Specialties
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Cyber Security",
                  "Full-Stack Development",
                  "Figma Design",
                  "Node.js & Express",
                  "React.js",
                  "Python Security",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
