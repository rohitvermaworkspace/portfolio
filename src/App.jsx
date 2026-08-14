import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSkills from "./components/AboutSkills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Backdrop from "./components/Backdrop";
import Spotlight from "./components/Spotlight";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Backdrop />
      <Spotlight />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutSkills />
        <Work />
        <Projects />
        <Experience />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
