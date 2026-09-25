import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  MessageCircle,
  Instagram,
  Facebook,
  ShieldCheck
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Design & Development',
    budget: '$50 - $250',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const servicesList = [
    'Web Design & Development',
    'Graphic Design & Branding',
    'Social Media Management',
    'YouTube Management & Thumbnails',
    'AI Content Creation & Prompts',
    'AI Automation & Workflows',
    'Full Digital Marketing Suite'
  ];

  const budgetList = [
    '$50 - $250',
    '$250 - $500',
    '$500 - $750',
    '$750 - $1,000'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all mandatory fields (Name, Email, and Project Description).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <section 
      id="contact-section" 
      className="py-24 lg:py-32 relative bg-[#11151C] border-b border-[rgba(255,255,255,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="// START A CONVERSATION"
          title="Let's Build Something Powerful."
          highlightWord="Powerful"
          description="Direct access to our core strategists. Founder & CEO Bahar Ali personally reviews every inquiry to architect a tailored roadmap for your brand."
          align="split"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Direct Info & Leadership Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Leadership & Priority WhatsApp Card - Raised Neumorphic Surface */}
            <div className="p-8 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-5px_-5px_14px_rgba(255,255,255,0.025),6px_6px_18px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[rgba(255,255,255,0.04)]">
                <div className="w-12 h-12 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.05)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.7)] text-[#2F80ED] flex items-center justify-center font-bold text-lg font-display">
                  BA
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F4F7FB] font-display">Bahar Ali</h3>
                  <p className="text-xs font-mono text-[#38BDF8]">Founder & Chief Executive Officer</p>
                </div>
              </div>

              <h4 className="text-base font-bold text-[#F4F7FB] mb-2">Direct Agency Channels</h4>
              <p className="text-xs text-[#AAB4C3] leading-relaxed font-light mb-6">
                Fastest response via official WhatsApp. We answer project inquiries within 2–4 hours during operational cycles.
              </p>

              <div className="space-y-3.5">
                {/* Primary WhatsApp - Raised Neumorphic Channel Pill */}
                <a 
                  href="https://wa.me/923271847673?text=Hi%20Bahar%20Ali,%20I%20would%20like%20to%20discuss%20a%20project%20with%20GrafiwebPk."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#171D26] border border-emerald-500/30 shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.45)] hover:border-emerald-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0E1217] text-emerald-400 border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase text-[#38BDF8] font-bold">Primary WhatsApp</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-sm font-bold text-[#F4F7FB] font-mono block">+92 327 1847673</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#2F80ED] font-bold group-hover:translate-x-0.5 transition-transform">
                    Chat →
                  </span>
                </a>

                {/* Email - Compact Surface */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
                  <div className="w-8 h-8 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] flex items-center justify-center text-[#2F80ED] shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#64748B] block">Official Business Email</span>
                    <a href="mailto:info.grafiwebpk@gmail.com" className="text-xs sm:text-sm font-semibold text-[#F4F7FB] hover:text-[#2F80ED] transition-colors font-mono">
                      info.grafiwebpk@gmail.com
                    </a>
                  </div>
                </div>

                {/* Secondary Local Contact */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
                  <div className="w-8 h-8 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] flex items-center justify-center text-[#AAB4C3] shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#64748B] block">Local Line (Secondary / Optional)</span>
                    <a href="tel:+923286006028" className="text-xs sm:text-sm font-medium text-[#AAB4C3] hover:text-[#F4F7FB] transition-colors font-mono">
                      +92 328 6006028
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
                  <div className="w-8 h-8 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] flex items-center justify-center text-[#38BDF8] shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#64748B] block">Operating Hours</span>
                    <p className="text-xs sm:text-sm font-semibold text-[#F4F7FB]">
                      Mon – Sat: 9:00 AM – 9:00 PM PKT (Global Coverage)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between">
                <span className="text-xs font-mono text-[#AAB4C3]">Official Socials:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.instagram.com/grafi_web_pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)] flex items-center justify-center text-[#AAB4C3] hover:text-pink-400 hover:border-pink-500/40 transition-all"
                    aria-label="GrafiwebPk Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61577441664650&sk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)] flex items-center justify-center text-[#AAB4C3] hover:text-[#2F80ED] hover:border-[#2F80ED]/40 transition-all"
                    aria-label="GrafiwebPk Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quality Commitment Callout - Raised Surface */}
            <div className="p-6 rounded-2xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-3px_-3px_8px_rgba(255,255,255,0.02),4px_4px_10px_rgba(0,0,0,0.5)] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0E1217] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)] flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F4F7FB] uppercase tracking-wider font-mono">100% On-Time Guarantee</p>
                <p className="text-xs text-[#AAB4C3] leading-relaxed mt-0.5">
                  Milestone-driven releases with weekly visual deliverables and zero hidden costs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Neumorphic Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-6px_-6px_18px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.6)] relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#0E1217] border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F4F7FB] font-display">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-[#AAB4C3] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#F4F7FB] font-semibold">{formData.name}</span>. 
                    Bahar Ali and our senior creative engineers will review your goals and get in touch at <span className="text-[#38BDF8] font-semibold">{formData.email}</span> within 4 business hours.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/923271847673?text=Hi%20Bahar,%20I%20just%20submitted%20a%20project%20form%20on%20GrafiwebPk!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold"
                    >
                      Instant WhatsApp Follow-Up →
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: 'Web Design & Development',
                          budget: '$50 - $250',
                          message: ''
                        });
                      }}
                      className="btn-secondary px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider text-[#AAB4C3] cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0E1217] border border-rose-500/40 text-rose-400 text-xs shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs uppercase font-mono text-[#AAB4C3] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mehmood"
                        className="neu-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs uppercase font-mono text-[#AAB4C3] mb-2">
                        Business Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="neu-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs uppercase font-mono text-[#AAB4C3] mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="neu-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs uppercase font-mono text-[#AAB4C3] mb-2">
                        Primary Service Needed
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="neu-input w-full px-4 py-3 rounded-xl text-sm bg-[#0E1217]"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="bg-[#171D26] text-[#F4F7FB]">
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Estimated Investment Budget */}
                  <div>
                    <label className="block text-xs uppercase font-mono text-[#AAB4C3] mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgetList.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                            formData.budget === b
                              ? 'bg-[#0E1217] border border-[#2F80ED]/50 text-[#2F80ED] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7)]'
                              : 'bg-[#171D26] border border-[rgba(255,255,255,0.04)] text-[#AAB4C3] hover:text-[#F4F7FB] shadow-[-2px_-2px_5px_rgba(255,255,255,0.02),2px_2px_5px_rgba(0,0,0,0.4)]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Description Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase font-mono text-[#AAB4C3] mb-2">
                      Project Goals & Requirements *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand goals, target audience, timeline, and current pain points..."
                      className="neu-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="btn-primary w-full sm:w-auto px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Inquiry to Bahar Ali</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    <p className="text-[11px] text-[#64748B] font-mono">
                      Guaranteed reply within 4 business hours
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
