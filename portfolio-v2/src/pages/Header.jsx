import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "about", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href='#' className="text-2xl font-bold text-blue-400">Sriram</a>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="hover:text-blue-300">{link.label}</a>
          ))}
        </nav>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-gray-900 px-6 overflow-hidden"
          >
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="block py-3 border-b border-gray-700 hover:text-blue-300">{link.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
