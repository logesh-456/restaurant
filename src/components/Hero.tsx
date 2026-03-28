import { motion } from "motion/react";
import foodImg from '../food.jpg';
export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={foodImg}
          alt="Restaurant Interior"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
        >
          Experience Rich Taste
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif font-light leading-tight mb-8"
        >
          Where Light Meets <br />
          <span className="italic">Fine Dining</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="bg-primary text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all shadow-lg"
          >
            Explore Menu
          </a>
          <a
            href="#reservations"
            className="bg-white text-stone-900 border border-stone-200 px-10 py-4 rounded-full text-lg font-medium hover:bg-stone-50 transition-all shadow-sm"
          >
            Reservations
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-stone-300 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 80] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
