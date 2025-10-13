import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profilePic from "../assets/profile.png";
import Icon from "../components/Icon";

export default function Hero() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 bg-transparent overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#4f46e5" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 2, max: 4 } },
            move: { enable: true, speed: 1.5, outModes: "bounce" },
            links: {
              enable: true,
              distance: 120,
              color: "#4f46e5",
              opacity: 0.2,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <motion.div
        className="flex-1 text-center md:text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          {greeting}, I'm Sriram 👋
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-lg mx-auto md:mx-0">
          I'm a Cyber Security student passionate about building secure,
          efficient systems and developing full-stack applications.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform hover:scale-105"
        >
          View My Work
        </a>

        <div className="flex justify-start gap-6 mt-4">
          <Icon type="github" href="https://github.com/heyshreee" />
          <Icon type="linkedin" href="https://linkedin.com/in/yourprofile" />
          <Icon type="twitter" href="https://twitter.com/yourprofile" />
          <Icon type="instagram" href="https://instagram.com/yourprofile" />
        </div>
      </motion.div>

      <motion.div
        className="flex-1 mb-10 md:mb-0 flex justify-center z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profilePic}
          alt="Sriram"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-blue-400"
        />
      </motion.div>
    </section>
  );
}
