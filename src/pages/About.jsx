import { motion } from "framer-motion";
import AboutCard from "../components/CatLoader";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 px-6 text-white overflow-hidden"
    >

      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Left: Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          {/* <img
            src={profilePic}
            alt="Sriram"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          /> */}
          <AboutCard />
          
        </div>

        {/* Right: About Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">About Me</h2>
          <p className="text-gray-300 mb-4 text-lg">
            I’m <strong>Sriram</strong>, a Cyber Security student with a passion for building secure, efficient systems and full-stack web applications. I enjoy combining creative design with robust code to deliver professional digital experiences.
          </p>
          <p className="text-gray-300 mb-4 text-lg">
            My interests include penetration testing, web development, learning new technologies, and designing interfaces. I’m constantly exploring ways to improve my skills and contribute to meaningful projects.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md text-sm">Cyber Security</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md text-sm">Full-Stack Development</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md text-sm">Figma Design</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md text-sm">Node.js & Express</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md text-sm">React.js</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
