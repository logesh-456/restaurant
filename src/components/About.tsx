import { motion } from "motion/react";
import resImg from './res.avif';
import dinImg from './new.jpg';
export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src={dinImg}
                alt="Chef at work"
                className="pill-image w-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-10 w-64 h-64 z-20 hidden md:block"
            >
              <img
                src={resImg}
                alt="Plated dish"
                className="pill-image w-full h-full border-8 border-secondary shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Our Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif mb-8 italic"
            >
              A Symphony of Flavors <br />& Natural Light
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-stone-600 font-light leading-relaxed"
            >
              <p>
                Founded in 2018, southernspicy was born from a simple vision: to create a space 
                where the atmosphere is as nourishing as the food. We believe that dining 
                is a multi-sensory experience, where the play of light on a plate is just 
                as important as the seasoning.
              </p>
              <p>
                Our Executive Chef,Arumugam, brings two decades of experience from 
                Michelin-starred kitchens across Europe, focusing on a farm-to-table 
                approach that respects the natural integrity of every southern ingredient.
              </p>
              <div className="pt-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-[1px] bg-primary"></div>
                  <span className="font-serif italic text-xl text-stone-900">Arumugam</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-stone-400 ml-16">Executive Chef</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
