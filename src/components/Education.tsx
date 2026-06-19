import Reveal from '@/components/Reveal';

const education = [
  {
    degree: 'Master of Arts in Cultural Studies',
    school: 'University of the West Indies, Kingston, Jamaica',
  },
  {
    degree: 'Bachelor of Arts in Entertainment & Cultural Enterprise Management',
    school: 'University of the West Indies, Kingston, Jamaica',
  },
  {
    degree: 'Associate in Applied Science in Business Administration',
    school: 'Guilford Technical Community College, Greensboro, NC',
  },
  {
    degree: 'Associate in Fine Arts in Theatre',
    school: 'College of The Albemarle, Elizabeth City, NC',
  },
];

const certifications = [
  'Team Management for the Six Sigma Black Belt — Kennesaw State University',
  'Foundations of Leadership Certification — The National Society of Leadership and Success (NSLS)',
  'Hospitality Leadership Excellence Certified — Marriott International',
  'The Fundamentals of Hotel Distribution',
  'Project Management Essentials',
  'Microsoft Office Specialist: Microsoft Excel Expert (Office 2019)',
  'ServSafe Food Protection Manager Certification — ANSI & CFP',
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-label mb-4">Education & Credentials</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="section-heading mb-14"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            Learning & Professional Development
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal delay={120}>
            <div>
              <h3 className="text-lg font-semibold text-black mb-8 pb-3 border-b border-gray-200">
                Education
              </h3>
              <div className="space-y-8">
                {education.map((item) => (
                  <div key={item.degree}>
                    <h4 className="text-base md:text-lg font-semibold text-black mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">{item.school}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <h3 className="text-lg font-semibold text-black mb-8 pb-3 border-b border-gray-200">
                Certifications & Licenses
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex gap-3 text-gray-600 text-sm md:text-base leading-relaxed"
                  >
                    <span className="text-navy flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-navy" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
