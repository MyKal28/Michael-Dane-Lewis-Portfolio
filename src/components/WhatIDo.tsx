import Reveal from '@/components/Reveal';

const services = [
  {
    title: 'Project Management',
    description:
      'I lead initiatives from planning through delivery — coordinating teams, timelines, and stakeholders so projects stay on track and aligned with your goals.',
    outcomes: [
      'Clear project plans & milestones',
      'Cross-team coordination',
      'On-time, on-scope delivery',
    ],
  },
  {
    title: 'Operations Management',
    description:
      'I build the systems behind the work — SOPs, workflows, and accountability structures that help teams run efficiently and scale with confidence.',
    outcomes: [
      'Standard operating procedures',
      'Process improvement',
      'Scalable team workflows',
    ],
  },
  {
    title: 'Executive & Leadership Support',
    description:
      'I partner with founders and executives to manage priorities, streamline operations, and keep strategic initiatives moving forward without losing momentum.',
    outcomes: [
      'Executive calendar & planning systems',
      'Priority management',
      'Strategic initiative tracking',
    ],
  },
  {
    title: 'Platform & Product Coordination',
    description:
      'I coordinate product launches, platform improvements, and customer onboarding — bridging leadership, development, and content teams in SaaS and EdTech environments.',
    outcomes: [
      'Feature launch coordination',
      'User onboarding programs',
      'Stakeholder alignment',
    ],
  },
  {
    title: 'Event & Partnership Operations',
    description:
      'I manage the logistics behind conferences, showcases, and partnerships — ensuring teams show up prepared, on schedule, and ready to deliver.',
    outcomes: [
      'Conference & event readiness',
      'Partnership coordination',
      'External stakeholder communication',
    ],
  },
  {
    title: 'Team Leadership & Development',
    description:
      'I recruit, train, and develop teams to perform at a high standard — with clear expectations, coaching, and systems that support consistent results.',
    outcomes: [
      'Recruitment & onboarding',
      'Training documentation',
      'Performance & accountability',
    ],
  },
];

const industries = [
  'Hospitality',
  'SaaS & EdTech',
  'Creative Agencies',
  'Startups',
  'Small Business',
  'Executive Teams',
];

export default function WhatIDo() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-label mb-4">What I Do</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="section-heading mb-6"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            How I help teams and organizations succeed
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
            Whether you need someone to run a complex initiative, build operational systems from the
            ground up, or support leadership behind the scenes — I bring structure, accountability,
            and follow-through to every engagement.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <div className="h-full bg-gray-50 border border-gray-200 rounded-sm p-6 md:p-7 transition-all duration-300 hover:shadow-md hover:border-navy/20 hover:-translate-y-0.5">
                <h3 className="text-lg font-semibold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-2.5 text-sm text-gray-500 leading-relaxed"
                    >
                      <span className="text-navy flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-navy" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="border-t border-gray-200 pt-10">
            <p className="text-sm font-semibold text-black uppercase tracking-wide mb-5">
              Industries & Environments I Work In
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="inline-flex items-center px-4 py-2 bg-navy/5 text-navy text-sm font-medium rounded-sm border border-navy/10"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
