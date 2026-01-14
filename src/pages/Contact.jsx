import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import toast from "react-hot-toast";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // -----------------------------------------------------------------
      // PASTE YOUR GOOGLE SHEETS WEB APP URL HERE
      // -----------------------------------------------------------------
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxK4B0nPmp3P955v0-YNu_pHTypgEve9lAo_iewoZIGW-fezb-d1TXygxbz5IA0UPU/exec";

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important: Allows sending data to Google Apps Script without CORS errors
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      // With 'no-cors', we can't check the response status, so we assume success if no error was thrown.
      toast.success("Message sent successfully!", {
        position: "top-right",
        style: {
          background: "#10B981",
          color: "#fff",
        },
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 px-6 grid-bg overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm currently open to internship opportunities and freelance work. Let's build something secure together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Email Me</p>
                    <p className="font-semibold text-slate-900 dark:text-white">sriram0607@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Location</p>
                    <p className="font-semibold text-slate-900 dark:text-white">Chennai, India</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex gap-4 flex-wrap">
                <a
                  href="https://github.com/heyshreee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:text-[#333] dark:hover:text-white transition-colors text-slate-600 dark:text-slate-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/sriram-sriram-41b52532b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:text-[#0077b5] transition-colors text-slate-600 dark:text-slate-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/srishree0607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:text-[#1DA1F2] transition-colors text-slate-600 dark:text-slate-300"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/wtf._shr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:text-[#E1306C] transition-colors text-slate-600 dark:text-slate-300"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://buymeacoffee.com/srishree06a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:text-[#FFDD00] transition-colors text-slate-600 dark:text-slate-300"
                  title="Buy Me a Coffee"
                >
                  <SiBuymeacoffee className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-500">Your Name</label>
                <input
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4 py-3 text-slate-900 dark:text-white outline-none"
                  placeholder="John Doe"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-500">Email Address</label>
                <input
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4 py-3 text-slate-900 dark:text-white outline-none"
                  placeholder="john@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-500">Subject</label>
              <input
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4 py-3 text-slate-900 dark:text-white outline-none"
                placeholder="Collaboration Idea"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-slate-500">Your Message</label>
              <textarea
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all px-4 py-3 text-slate-900 dark:text-white outline-none resize-none"
                placeholder="How can I help you?"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
