import Reveal from '@/components/Reveal';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-label mb-4">About</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            className="section-heading mb-10"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            A partner who turns plans into results
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
            <Reveal delay={120}>
              <p>
                With 10+ years across hospitality, SaaS, EdTech, and creative agencies, I specialize
                in the work that keeps organizations running — managing projects, building operational
                systems, and supporting leadership through complex, fast-moving environments.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Clients and employers rely on me to bring order to ambiguity: creating project plans,
                developing SOPs and training materials, coordinating cross-functional teams, and
                ensuring initiatives move from idea to execution with clarity and accountability.
              </p>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="bg-white border border-gray-200 rounded-sm p-6 transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
                At a Glance
              </h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-gray-400 uppercase tracking-wide text-xs mb-1">Experience</dt>
                  <dd className="text-gray-700 font-medium">10+ years in operations & project management</dd>
                </div>
                <div>
                  <dt className="text-gray-400 uppercase tracking-wide text-xs mb-1">Current Roles</dt>
                  <dd className="text-gray-700 font-medium">Operations Manager, Rocket Recall · Project & Ops Consultant, Upwork</dd>
                </div>
                <div>
                  <dt className="text-gray-400 uppercase tracking-wide text-xs mb-1">Based In</dt>
                  <dd className="text-gray-700 font-medium">Greensboro, NC · Available remotely</dd>
                </div>
                <div>
                  <dt className="text-gray-400 uppercase tracking-wide text-xs mb-1">Engagement Types</dt>
                  <dd className="text-gray-700 font-medium">Full-time, contract, fractional & consulting</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
