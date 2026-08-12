import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSkills from "./components/AboutSkills";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="space-y-0">
          <AboutSkills />
          <Projects />
          <Process />
          <Testimonials />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}