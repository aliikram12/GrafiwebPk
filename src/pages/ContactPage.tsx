import ContactSection from '../sections/ContactSection';
import { MessageCircle, Mail, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <div id="contact-page" className="pt-32 pb-24 bg-[#11151C]">
      {/* Contact Hero Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#2F80ED]" />
          <span className="text-xs uppercase tracking-[0.25em] font-mono font-semibold text-[#2F80ED]">
            // PARTNERSHIP & PROJECT INQUIRIES
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F4F7FB] leading-[1.05] font-display max-w-5xl mb-6">
          Let’s Build Something Powerful Together.
        </h1>
        <p className="text-lg sm:text-xl text-[#AAB4C3] font-light max-w-3xl leading-relaxed">
          Whether you need a high-converting digital flagship, iconic graphic branding, viral social/YouTube media scaling, or automated AI pipelines, Founder & CEO Bahar Ali and the GrafiwebPk team are ready to engage.
        </p>
      </section>

      {/* Embedded Main Interactive Contact Section */}
      <ContactSection />

      {/* Direct Engagement Channels - Neumorphic Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
            RAPID RESPONSE HUBS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FB] font-display mt-2">
            Priority Access Channels
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp Direct */}
          <div className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:border-emerald-500/30 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-emerald-400">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase text-[#38BDF8] font-bold block">
              PRIMARY DIRECT CHANNEL
            </span>
            <h3 className="text-2xl font-bold text-[#F4F7FB] font-display">
              Official WhatsApp
            </h3>
            <p className="text-sm text-[#AAB4C3] font-light leading-relaxed">
              Instant access to Founder & CEO Bahar Ali for project scoping, pricing quotes, and sprint schedules.
            </p>
            <a 
              href="https://wa.me/923271847673?text=Hi%20Bahar%20Ali,%20I%20am%20ready%20to%20discuss%20a%20new%20project%20with%20GrafiwebPk."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pt-2 text-sm font-bold font-mono text-[#2F80ED] hover:text-[#38BDF8] transition-colors"
            >
              +92 327 1847673 →
            </a>
          </div>

          {/* Business Email */}
          <div className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:border-[#2F80ED]/30 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#2F80ED]">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase text-[#38BDF8] font-bold block">
              FORMAL PROPOSALS & RFPS
            </span>
            <h3 className="text-2xl font-bold text-[#F4F7FB] font-display">
              Business Email
            </h3>
            <p className="text-sm text-[#AAB4C3] font-light leading-relaxed">
              Send your project briefs, specifications, RFPs, and NDA requests directly to our central desk.
            </p>
            <a 
              href="mailto:info.grafiwebpk@gmail.com"
              className="inline-block pt-2 text-sm font-bold font-mono text-[#2F80ED] hover:text-[#38BDF8] transition-colors"
            >
              info.grafiwebpk@gmail.com →
            </a>
          </div>

          {/* Global Coverage */}
          <div className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-4px_-4px_12px_rgba(255,255,255,0.02),5px_5px_16px_rgba(0,0,0,0.55)] hover:-translate-y-1 hover:border-[#2F80ED]/30 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] flex items-center justify-center text-[#38BDF8]">
              <Globe className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase text-[#38BDF8] font-bold block">
              WORLDWIDE EXECUTION
            </span>
            <h3 className="text-2xl font-bold text-[#F4F7FB] font-display">
              Global Operations
            </h3>
            <p className="text-sm text-[#AAB4C3] font-light leading-relaxed">
              Serving international brands across North America, Europe, the Middle East, and Asia with 24-hour sprint continuity.
            </p>
            <div className="pt-2 text-xs font-mono text-[#64748B]">
              Optional Local Line: <a href="tel:+923286006028" className="text-[#AAB4C3] hover:text-[#F4F7FB] font-bold">+92 328 6006028</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
