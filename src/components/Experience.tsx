import Reveal from '@/components/Reveal';

const roles = [
  {
    period: 'Jan 2025 — Present',
    title: 'Operations Manager',
    company: 'Rocket Recall',
    companyDetail: 'SaaS EdTech Platform · Virtual',
    description:
      'Manage cross-functional project coordination and operational execution for a growing EdTech SaaS platform serving students, educators, and academic organizations. Collaborate with leadership, developers, content teams, and external stakeholders on product initiatives, platform improvements, and strategic projects.',
    highlights: [
      'Led the conceptualization and development of the Rocket Recall website design, defining structure, user flow, and overall platform experience.',
      'Coordinated operational readiness for the team\'s product showcase at the 2025 NCSS Conference.',
      'Served as liaison in establishing a partnership with a national academic competition, expanding platform reach and institutional engagement.',
    ],
  },
  {
    period: 'Dec 2023 — Present',
    title: 'C-Suite Executive Assistant, Project & Operations Manager',
    company: 'Upwork',
    companyDetail: 'Virtual · Multiple Clients',
    description:
      'Provide high-level executive, project, and operations support to founders, C-suite leaders, startups, SaaS platforms, creative marketing agencies, and small businesses. Lead project coordination, operational planning, stakeholder communications, and process improvement while managing multiple priorities.',
    highlights: [
      'Created structured planning systems and three-week operational schedules that improved executive productivity, visibility, and accountability.',
      'Designed and implemented a Notion project management system that streamlined workflows, improved accountability, and increased operational efficiency for a creative marketing agency.',
    ],
  },
  {
    period: 'Dec 2021 — Dec 2023',
    title: 'General Manager',
    company: 'TownePlace Suites by Marriott',
    companyDetail: 'Outer Banks, Kill Devil Hills, NC',
    description:
      'Led cross-functional teams while overseeing recruitment, onboarding, training, and performance evaluations aligned with Marriott brand standards. Managed staffing plans, supply chain needs, and service delivery across all departments.',
    highlights: [
      'Achieved a 94.6% BSA score in 2023, placing the hotel in the GREEN zone for the first time.',
      'Ranked in the top 20% of TownePlace Suites across the US and Canada for guest satisfaction.',
      'Developed room tracking and inspection systems that improved team coordination, accountability, and cleanliness scores.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-label mb-4">Experience</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="section-heading mb-14"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            Professional background
          </h2>
        </Reveal>

        <div className="space-y-16">
          {roles.map((role, index) => (
            <Reveal key={`${role.company}-${role.period}`} delay={index * 100} as="article">
              <div
                className={`pb-16 ${
                  index < roles.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-3">
                    <p className="text-sm text-gray-500 font-medium">{role.period}</p>
                  </div>

                  <div className="md:col-span-9">
                    <h3 className="text-xl md:text-2xl font-semibold text-black mb-1">
                      {role.title}
                    </h3>
                    <p className="text-navy font-medium mb-1">{role.company}</p>
                    <p className="text-sm text-gray-500 mb-5">{role.companyDetail}</p>

                    <p className="text-gray-600 leading-relaxed mb-6">{role.description}</p>

                    <div>
                      <p className="text-sm font-semibold text-black mb-3">Key Contributions</p>
                      <ul className="space-y-2">
                        {role.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-gray-600 text-sm md:text-base leading-relaxed"
                          >
                            <span className="text-navy flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-navy" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
