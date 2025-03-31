import About from '@/components/About/About';
import Contact from '@/components/Contact/contact';
import Experience from '@/components/Experiance/experiance';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills/skills';
import Works from '@/components/Works/page';

export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
   <Skills/>
   <Experience/>
   <Works/>
   <Contact/>
  </main>
  );
}
