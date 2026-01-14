import React, { useEffect, useState } from "react";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Projects from "./components/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Loader from "./components/Loader";
import About from "./pages/About";
import BackToTop from "./components/BackToTop";
import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // Dark theme default

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <Loader />
      </div>
    );

  return (
    <div className="relative bg-transparent transition-colors duration-500">
      <Toaster />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />

    </div>
  );
}

export default App;
