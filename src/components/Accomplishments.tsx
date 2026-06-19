import Reveal from '@/components/Reveal';

const accomplishments = [
  'Published "Bank on Self-Investment…A Stimulus Check For One\'s Self"',
  'Awarded Most Customer Obsessed Amazon Customer Service Representative',
  'Jamaica\'s Prime Minister Youth Award for Arts and Culture',
  'Jamaica\'s Governor General Award for Leadership',
  'Jamaica 4-H Clubs National Boy of The Year Champion',
];

const community = [
  'Volunteer, Davis Waldorf School Annual School Auction (2025 & 2026)',
  'Coordinated donations for Operation Christmas Child, contributing over 1,000 shoeboxes',
  'Coached a second-grade student at Beacon Christian Academy to win the 2022 Youth Aviation Art Contest',
];

export default function Accomplishments() {
  return (
    <section
      id="accomplishments"
      className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-label mb-4">Recognition & Service</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="section-heading mb-14"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            Accomplishments & community
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal delay={120}>
            <div>
              <h3 className="text-lg font-semibold text-black mb-8 pb-3 border-b border-gray-200">
                Major Accomplishments
              </h3>
              <ul className="space-y-4">
                {accomplishments.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-gray-600 text-sm md:text-base leading-relaxed"
                  >
                    <span className="text-navy flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-navy" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <h3 className="text-lg font-semibold text-black mb-8 pb-3 border-b border-gray-200">
                Community Involvement
              </h3>
              <ul className="space-y-4">
                {community.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-gray-600 text-sm md:text-base leading-relaxed"
                  >
                    <span className="text-navy flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-navy" />
                    {item}
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
