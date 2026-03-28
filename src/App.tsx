import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import ReservationForm from "./components/ReservationForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        <About />
        <MenuSection />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
}
