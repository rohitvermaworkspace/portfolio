import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import MobileBottomNav from "./components/MobileBottomNav";
import Hero from "./components/Hero";
import AboutSkills from "./components/AboutSkills";
import Footer from "./components/Footer";
import Backdrop from "./components/Backdrop";
import Spotlight from "./components/Spotlight";
import WhatsAppButton from "./components/WhatsAppButton";
import PhoneButton from "./components/PhoneButton";

const Work = lazy(() => import("./components/Work"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Process = lazy(() => import("./components/Process"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Backdrop />
      <Spotlight />
      <Navbar />
      <MobileBottomNav />
      <main className="relative z-10 pb-24 md:pb-0">
        <Hero />
        <AboutSkills />
        <Suspense>
          <Work />
          <Projects />
          <Experience />
          <Process />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <PhoneButton />
    </div>
  );
}
