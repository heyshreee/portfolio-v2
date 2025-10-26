import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Pattern from "../components/Pattern";
import Icon from "../components/Icon";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    try {
      const res = await fetch("https://project-management-mdb.onrender.com/api/v1/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");

    } catch (err) {
      console.error("Submission error:", err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-6 text-white overflow-hidden"
    >
      {/* Background */}
      <Pattern />
      <Particles
        id="contact-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: "#4f46e5" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: { min: 2, max: 4 } },
            move: { enable: true, speed: 1.5, outModes: "bounce" },
            links: {
              enable: true,
              distance: 120,
              color: "#4f46e5",
              opacity: 0.1,
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-8">
          Contact Me
        </h2>
        <p className="text-gray-300 text-center mb-8">
          I’m open to collaborations, freelance work, or internship
          opportunities. Feel free to reach out via email, social platforms, or
          using the contact form below.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side: Contact Info */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-6">
            <a
              href="mailto:sriram0607@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20Sriram,%0A%0AI%20am%20reaching%20out%20to%20you%20for%20a%20collaboration%20opportunity.%0A%0A%0APlease%20let%20me%20know%20if%20you%27re%20interested%20and%20available.%0A%0A%0AThanks%2C%20Sriram"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold"
            >
              Email Me
            </a>

            <div className="flex gap-6 text-gray-300 mt-4">
              <Icon type="github" href="https://github.com/heyshreee" />
              <Icon
                type="linkedin"
                href="https://linkedin.com/in/sriram-sriram-41b52532b"
              />
              <Icon type="twitter" href="https://x.com/srishree0607" />
              <Icon
                type="instagram"
                href="https://www.instagram.com/wtf._shr"
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 bg-gray-800 rounded-lg p-6 shadow-lg">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                id="name"
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                placeholder="Your Message"
                value={message}
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={5}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-md"
              >
                {loading ? "Sending..." : "Send Submit"}
              </button>
              {success === true && (
                <p className="text-green-400 mt-2">Submitted successfully!</p>
              )}
              {success === false && (
                <p className="text-red-400 mt-2">
                  Submission failed. Try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
