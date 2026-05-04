
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Education";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}