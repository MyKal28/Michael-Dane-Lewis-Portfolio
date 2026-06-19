import Reveal from '@/components/Reveal';
import OpenContactButton from '@/components/OpenContactButton';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:michaeldanelewisbrown@gmail.com',
    display: 'michaeldanelewisbrown@gmail.com',
  },
  {
    label: 'Phone',
    href: 'tel:+12524895443',
    display: '(252) 489-5443',
  },
  {
    label: 'Location',
    href: undefined,
    display: 'Greensboro, NC 27410',
  },
  {
    label: 'Resume',
    href: '/Michael_Lewis_Resume.pdf',
    display: 'Download Resume (PDF)',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-navy text-white"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4 font-medium">
            Contact
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="font-serif font-semibold tracking-tight mb-6"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            Let&apos;s work together
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-12 max-w-2xl">
            Need a project manager, operations lead, or executive support partner? I&apos;d welcome
            the chance to discuss your goals and how I can help your team deliver.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {contactLinks.map((link, index) => (
            <Reveal key={link.label} delay={220 + index * 80}>
              <div>
                <p className="text-white/50 text-xs tracking-[0.15em] uppercase mb-2 font-medium">
                  {link.label}
                </p>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-white text-base md:text-lg hover:text-white/80 transition-colors duration-200"
                  >
                    {link.display}
                  </a>
                ) : (
                  <p className="text-white text-base md:text-lg">{link.display}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <OpenContactButton className="inline-flex items-center justify-center bg-white text-navy font-semibold px-8 py-4 rounded-sm hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-200 text-sm cursor-pointer">
            Get in Touch
          </OpenContactButton>
        </Reveal>
      </div>
    </section>
  );
}
