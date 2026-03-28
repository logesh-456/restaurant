import { motion } from "motion/react";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Reservations", href: "#reservations" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="text-primary w-8 h-8" />
            <span className="font-serif text-2xl font-semibold tracking-tight">Southern spicy</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-primary transition-colors font-medium text-sm uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservations"
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
            >
              Book a Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary border-b border-stone-200 px-4 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-stone-600 font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservations"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-6 py-3 rounded-full text-center font-medium"
          >
            Book a Table
          </a>
        </motion.div>
      )}
    </nav>
  );
}
