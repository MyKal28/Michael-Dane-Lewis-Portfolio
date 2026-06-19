import Hero from '@/components/Hero';
import WhatIDo from '@/components/WhatIDo';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Accomplishments from '@/components/Accomplishments';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <About />
      <Experience />
      <Education />
      <Accomplishments />
      <Contact />
    </main>
  );
}
