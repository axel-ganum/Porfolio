import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projetcts";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  );
}
