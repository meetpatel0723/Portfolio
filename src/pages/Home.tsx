import { Hero } from "@/sections/Hero/Hero";
import { About } from "@/sections/About/About";
import { Skills } from "@/sections/Skills/Skills";
import { Experience } from "@/sections/Experience/Experience";
import { Projects } from "@/sections/Projects/Projects";
import { Services } from "@/sections/Services/Services";
import { Contact } from "@/sections/Contact/Contact";
import { Footer } from "@/components/layout/Footer";

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
