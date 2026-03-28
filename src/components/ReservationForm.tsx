import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { Calendar, Clock, Users, Send } from "lucide-react";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservations" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Reserve Your Table</h2>
            <p className="text-stone-600 mb-8 font-light leading-relaxed">
              Join us for an unforgettable dining experience. Whether it's a romantic dinner, 
              a business lunch, or a special celebration, we ensure every detail is perfect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900">Opening Hours</h4>
                  <p className="text-sm text-stone-500">Mon - Fri: 12:00 PM - 10:00 PM</p>
                  <p className="text-sm text-stone-500">Sat - Sun: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <Users className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900">Private Events</h4>
                  <p className="text-sm text-stone-500">For groups larger than 10, please contact us directly.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-stone-100"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif mb-2">Reservation Received</h3>
                <p className="text-stone-500">We'll confirm your table via email shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-stone-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-stone-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <input
                        required
                        type="date"
                        className="w-full bg-stone-50 border-none rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <select className="w-full bg-stone-50 border-none rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                        <option>7:00 PM</option>
                        <option>7:30 PM</option>
                        <option>8:00 PM</option>
                        <option>8:30 PM</option>
                        <option>9:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                      <select className="w-full bg-stone-50 border-none rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5+ People</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">Special Requests</label>
                  <textarea
                    rows={3}
                    className="w-full bg-stone-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Allergies, special occasions, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
