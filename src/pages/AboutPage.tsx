import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Compass, Sparkles, Target, Zap, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { teamData } from '../data/teamData';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Precision & Outcomes',
      desc: 'We don’t build generic digital vanity projects. Every line of code, design asset, and social campaign is engineered to capture market share and drive real conversions.'
    },
    {
      icon: Sparkles,
      title: 'Bold Creative Identity',
      desc: 'Forget washed-out templates. We develop distinct visual languages, iconic vector branding, and cinematic content that commands instantaneous authority.'
    },
    {
      icon: Zap,
      title: 'AI-Enhanced Velocity',
      desc: 'We merge elite human craftsmanship with state-of-the-art AI tooling and automated workflows, cutting production cycles in half without losing bespoke polish.'
    },
    {
      icon: Compass,
      title: 'Direct Founder Access',
      desc: 'No endless layers of account managers. Founder & CEO Bahar Ali and our specialized pod leads collaborate directly with every client on every milestone.'
    }
  ];

  const timeline = [
    { year: 'Phase 1', title: 'Agency Foundation', desc: 'Established by Bahar Ali to bridge high-end web development with high-impact graphic design.' },
    { year: 'Phase 2', title: 'Content & YouTube Expansion', desc: 'Scaled full social media management and dedicated YouTube growth operations generating millions of views.' },
    { year: 'Phase 3', title: 'AI Integration Pipeline', desc: 'Incorporated proprietary AI prompting, automated workflow funnels, and generative creative asset production.' },
    { year: 'Present', title: 'Global Multi-Discipline Force', desc: 'Delivering end-to-end digital dominance for founders, creators, and modern businesses worldwide.' }
  ];

  return (
    <div id="about-page" className="pt-32 pb-24 bg-[#11151C]">
      {/* Hero Intro */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-semibold text-[#2F80ED]">
            // AGENCY CULTURE & PHILOSOPHY
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F4F7FB] leading-[1.05] font-display max-w-5xl mb-8">
          We Combine Creativity, Technology & Strategy To Build Market Leaders.
        </h1>
        <p className="text-lg sm:text-xl text-[#AAB4C3] font-light max-w-3xl leading-relaxed">
          GrafiwebPk is an agile creative and technology agency. Under the leadership of Founder & CEO 
          <span className="text-[#F4F7FB] font-semibold"> Bahar Ali</span>, we help ambitious businesses, creators, 
          and brands dominate their digital landscapes through relentless design excellence and intelligent automation.
        </p>

        {/* Feature Hero Card - Neumorphic Container */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] aspect-[21/9] relative bg-[#171D26] shadow-[-6px_-6px_16px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
            alt="GrafiwebPk Creative Engineering Pod"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11151C] via-[#11151C]/50 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-2xl">
            <span className="text-xs font-mono uppercase text-[#38BDF8] tracking-widest font-bold">
              GRAFIWEBPK HEADQUARTERS & REMOTE CORPS
            </span>
            <h3 className="text-xl sm:text-3xl font-bold font-display mt-2 text-[#F4F7FB]">
              Where strategic rigor meets unrestrained artistic firepower.
            </h3>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#11151C] border-y border-[rgba(255,255,255,0.04)] mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            eyebrow="// CORE TENETS"
            title="The Principles That Govern GrafiwebPk"
            highlightWord="Principles"
            description="Our non-negotiable philosophies that ensure every digital artifact we deploy is timeless, performant, and converts."
            align="split"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:border-[#2F80ED]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#2F80ED] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#F4F7FB] font-display mb-3">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#AAB4C3] font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <SectionHeading
          eyebrow="// LEADERSHIP & TALENT"
          title="Guided By Veteran Practitioners"
          highlightWord="Practitioners"
          description="Led by Bahar Ali, our specialized multidisciplinary pods bring relentless focus and deep craftsmanship to every engagement."
          align="split"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group rounded-3xl overflow-hidden bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:border-[#2F80ED]/30 transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden relative bg-[#0E1217]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171D26] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-[#F4F7FB] font-display">
                  {member.name}
                </h4>
                <p className="text-xs font-mono text-[#38BDF8] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-[#AAB4C3] font-light leading-relaxed mb-4">
                  {member.bio}
                </p>

                <div className="pt-3 border-t border-[rgba(255,255,255,0.04)]">
                  <a
                    href="https://wa.me/923271847673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#2F80ED] hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestone Progression Section */}
      <section className="py-20 bg-[#11151C] border-y border-[rgba(255,255,255,0.04)] mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeading
            eyebrow="// EVOLUTION"
            title="Our Growth & Expansion Journey"
            highlightWord="Journey"
            description="From specialized design engineering to a full-stack digital creative and AI ecosystem."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 relative">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-6 border-l-2 border-[#171D26] md:border-l-0 md:pl-0 md:pt-6 md:border-t-2">
                <span className="text-sm font-black font-mono text-[#2F80ED] block mb-2 uppercase tracking-wider">
                  {item.year}
                </span>
                <h4 className="text-lg font-bold text-[#F4F7FB] font-display mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#AAB4C3] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box - Raised Neumorphic Surface */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="p-12 sm:p-16 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-6px_-6px_18px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <Award className="w-12 h-12 text-[#2F80ED] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4F7FB] font-display mb-4">
            Ready to build a commanding digital presence?
          </h2>
          <p className="text-base text-[#AAB4C3] max-w-xl mx-auto mb-8 font-light">
            Founder & CEO Bahar Ali personally consults on new projects to ensure total alignment and rapid time-to-market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923271847673?text=Hi%20Bahar,%20I%20want%20to%20discuss%20a%20new%20project%20with%20GrafiwebPk."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <span>Chat with Bahar Ali on WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <span>Send Project Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
