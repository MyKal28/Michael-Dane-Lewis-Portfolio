'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMounted(true);
      return;
    }
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center bg-white pt-20 pb-8 px-6 md:px-10 lg:px-16 ${
        mounted ? 'hero-mounted' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="hero-enter mb-7"
              style={{ transitionDelay: '80ms' }}
            >
              <span className="hero-role-badge">Professional</span>
            </div>

            <h1
              className="hero-enter hero-title mb-8"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', transitionDelay: '160ms' }}
            >
              <span className="hero-title-line">Operations &amp;</span>
              <span className="hero-title-line">Project Management</span>
            </h1>

            <p
              className="hero-enter text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ transitionDelay: '280ms' }}
            >
              I help organizations plan, coordinate, and execute — leading cross-functional teams,
              building operational systems, and delivering results across SaaS, EdTech, hospitality,
              and executive environments.
            </p>

            <div
              className="hero-enter flex flex-wrap gap-4 mb-10"
              style={{ transitionDelay: '440ms' }}
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-navy text-white font-semibold px-7 py-3.5 rounded-sm hover:bg-navy-light hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                See What I Do
              </a>
              <a
                href="/Michael_Lewis_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-gray-300 text-black font-semibold px-7 py-3.5 rounded-sm hover:border-navy hover:text-navy hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                View Resume
              </a>
            </div>

            <div
              className="hero-enter flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-gray-500"
              style={{ transitionDelay: '520ms' }}
            >
              <span>Greensboro, NC</span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
              <a
                href="mailto:michaeldanelewisbrown@gmail.com"
                className="hover-underline hover:text-navy transition-colors"
              >
                michaeldanelewisbrown@gmail.com
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="hero-enter-right relative w-full max-w-[380px] aspect-[4/5] overflow-hidden rounded-sm shadow-lg group"
              style={{ transitionDelay: '280ms' }}
            >
              <Image
                src="/headshot.png"
                alt="Michael Dane Lewis — Operations & Project Management Professional"
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
                sizes="(max-width: 1024px) 80vw, 380px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
