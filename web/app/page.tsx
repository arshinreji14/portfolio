import About from '@/components/About/About';
import Hero from '@/components/Hero';
import Works from '@/components/Works/works';
import Image from "next/image";

export default function Home() {
  return (
  <main>
    <div>
    <Hero/>
    </div>
    <About/>
   <Works/>
  </main>
  );
}
