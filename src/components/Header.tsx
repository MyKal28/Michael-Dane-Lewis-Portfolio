'use client';

import { useEffect, useState } from 'react';
import OpenContactButton from '@/components/OpenContactButton';

const navLinks = [
  { label: 'What I Do', href: '#services', id: 'services' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const HEADER_OFFSET = 96;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMounted(true);
      return;
    }
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + HEADER_OFFSET;
      const bottom = window.scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;

      if (bottom >= pageBottom - 8) {
        setActiveSection('contact');
        return;
      }

      let current = '';
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPosition) {
          current = link.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      } ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="font-serif text-xl md:text-2xl font-semibold text-black tracking-tight"
          >
            Michael Dane Lewis
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium ${
                  activeSection === link.id ? 'nav-link-active' : ''
                }`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
            <OpenContactButton className="ml-4 text-sm font-semibold bg-navy text-white px-5 py-2.5 rounded-sm hover:bg-navy-light transition-colors duration-200 cursor-pointer">
              Get in Touch
            </OpenContactButton>
          </nav>

          <OpenContactButton className="md:hidden text-sm font-semibold bg-navy text-white px-4 py-2 rounded-sm cursor-pointer">
            Contact
          </OpenContactButton>
        </div>
      </div>
    </header>
  );
}
