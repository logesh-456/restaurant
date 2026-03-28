import { UtensilsCrossed, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <UtensilsCrossed className="w-8 h-8" />
              <span className="font-serif text-2xl font-semibold">Southerspicy</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Crafting unforgettable culinary experiences through the perfect 
              blend of light, atmosphere, and taste.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#reservations" className="hover:text-white transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>giundy near railway station<br />chennai District</li>
              <li>+91 8838814890</li>
              <li>hello@southernspice.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Join our list for seasonal updates and events.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-stone-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs uppercase tracking-widest">
          <p>© 2026 southern spicy. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
