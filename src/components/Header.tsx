import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  TrendingUp, 
  Share2, 
  Youtube, 
  Cpu, 
  MessageCircle,
  Instagram,
  Facebook
} from 'lucide-react';
import { serviceCategories } from '../data/servicesData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle dropdown mouse enter with immediate cancellation of close timer
  const handleDropdownEnter = () => {
    if (dropdownCloseTimeoutRef.current) {
      clearTimeout(dropdownCloseTimeoutRef.current);
      dropdownCloseTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  // Handle dropdown mouse leave with debounce delay (200ms) to allow comfortable mouse transition
  const handleDropdownLeave = () => {
    if (dropdownCloseTimeoutRef.current) {
      clearTimeout(dropdownCloseTimeoutRef.current);
    }
    dropdownCloseTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const getServiceCategoryIcon = (name: string) => {
    switch (name) {
      case 'Web & Digital': return <Code2 className="w-4 h-4 text-[#2F80ED]" />;
      case 'Creative & Design': return <Sparkles className="w-4 h-4 text-[#38BDF8]" />;
      case 'Social Media': return <Share2 className="w-4 h-4 text-[#2F80ED]" />;
      case 'YouTube': return <Youtube className="w-4 h-4 text-red-500" />;
      case 'AI Solutions': return <Cpu className="w-4 h-4 text-[#38BDF8]" />;
      case 'Digital Marketing': return <TrendingUp className="w-4 h-4 text-[#2F80ED]" />;
      default: return <Code2 className="w-4 h-4 text-[#2F80ED]" />;
    }
  };

  return (
    <header
      ref={headerRef}
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#171D26] py-3.5 border-b border-[rgba(255,255,255,0.04)] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.65)]'
          : 'bg-[#11151C]/90 py-5 border-b border-transparent'
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-12" ref={navRef}>
        {/* Brand Logo — Typographical Text-Based Logo */}
        <Link 
          to="/" 
          id="brand-logo" 
          aria-label="GrafiwebPk home"
          className="header-logo flex min-w-max items-center gap-2.5 group focus:outline-none transition-transform duration-200 hover:scale-[1.02]"
        >
          <img
            src="/logo.jpg"
            alt="GrafiwebPk"
            className="h-10 w-auto max-w-[150px] rounded-lg object-contain"
          />

          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-[#F4F7FB] font-display leading-tight group-hover:text-white transition-colors">
              Grafiweb<span className="text-[#2F80ED] group-hover:text-[#38BDF8] transition-colors">Pk</span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#AAB4C3]">
              Digital & AI Agency
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-3 text-sm font-medium justify-self-center">
          {/* Home */}
          <Link
            to="/"
            id="nav-home"
            className={`px-2.5 py-1.5 rounded-xl transition-all duration-200 ${
              location.pathname === '/'
                ? 'text-[#2F80ED] font-semibold bg-[#0E1217] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.02)]'
                : 'text-[#AAB4C3] hover:text-[#F4F7FB] hover:bg-[#171D26] hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)]'
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/about"
            id="nav-about"
            className={`px-2.5 py-1.5 rounded-xl transition-all duration-200 ${
              location.pathname === '/about'
                ? 'text-[#2F80ED] font-semibold bg-[#0E1217] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.02)]'
                : 'text-[#AAB4C3] hover:text-[#F4F7FB] hover:bg-[#171D26] hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)]'
            }`}
          >
            About
          </Link>

          {/* Services Mega Dropdown Container with Hover Bridge */}
          <div 
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              id="nav-services-toggle"
              type="button"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none ${
                servicesDropdownOpen || location.pathname.startsWith('/services') 
                  ? 'text-[#2F80ED] font-semibold bg-[#0E1217] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.02)]' 
                  : 'text-[#AAB4C3] hover:text-[#F4F7FB] hover:bg-[#171D26] hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)]'
              }`}
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180 text-[#2F80ED]' : ''}`} />
            </button>

            {/* Solid Neumorphic Dropdown Panel */}
            <div 
              id="services-dropdown"
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[700px] rounded-2xl bg-[#1C232D] border border-[rgba(255,255,255,0.06)] p-6 shadow-[-6px_-6px_16px_rgba(255,255,255,0.02),8px_8px_24px_rgba(0,0,0,0.7)] transition-all duration-250 origin-top dropdown-bridge ${
                servicesDropdownOpen 
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible' 
                  : 'opacity-0 translate-y-2 scale-98 pointer-events-none invisible'
              }`}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              {/* Dropdown Category Grid */}
              <div className="grid grid-cols-2 gap-3.5 pb-4 border-b border-[rgba(255,255,255,0.05)]">
                {serviceCategories.map((category) => (
                  <div 
                    key={category.id} 
                    className="p-3.5 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),3px_3px_8px_rgba(0,0,0,0.4)] hover:border-[#2F80ED]/40 transition-all duration-250"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-[#11151C] border border-[rgba(255,255,255,0.04)] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
                        {getServiceCategoryIcon(category.name)}
                      </div>
                      <span className="text-xs font-bold text-[#F4F7FB] uppercase font-mono tracking-wider">
                        {category.name}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {category.items.slice(0, 3).map((item) => (
                        <div key={item} className="text-[11.5px] text-[#AAB4C3] flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#2F80ED]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Service Detail Links Bottom Bar */}
              <div className="pt-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs">
                  <Link 
                    to="/services/web-design-development" 
                    className="text-[#AAB4C3] hover:text-[#2F80ED] font-medium transition-colors"
                  >
                    Web Design
                  </Link>
                  <span className="text-neutral-600">•</span>
                  <Link 
                    to="/services/social-media-management" 
                    className="text-[#AAB4C3] hover:text-[#2F80ED] font-medium transition-colors"
                  >
                    Social Media
                  </Link>
                  <span className="text-neutral-600">•</span>
                  <Link 
                    to="/services/youtube-management" 
                    className="text-[#AAB4C3] hover:text-[#2F80ED] font-medium transition-colors"
                  >
                    YouTube
                  </Link>
                  <span className="text-neutral-600">•</span>
                  <Link 
                    to="/services/ai-automation" 
                    className="text-[#AAB4C3] hover:text-[#2F80ED] font-medium transition-colors"
                  >
                    AI Automation
                  </Link>
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#2F80ED] hover:text-[#38BDF8] transition-colors"
                >
                  <span>All Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <Link
            to="/portfolio"
            id="nav-portfolio"
            className={`px-2.5 py-1.5 rounded-xl transition-all duration-200 ${
              location.pathname.startsWith('/portfolio')
                ? 'text-[#2F80ED] font-semibold bg-[#0E1217] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.02)]'
                : 'text-[#AAB4C3] hover:text-[#F4F7FB] hover:bg-[#171D26] hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)]'
            }`}
          >
            Portfolio
          </Link>

          {/* Process Anchor */}
          <a
            href="/#process-section"
            id="nav-process"
            className="px-2.5 py-1.5 rounded-xl text-[#AAB4C3] hover:text-[#F4F7FB] hover:bg-[#171D26] hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)] transition-all duration-200"
          >
            Process
          </a>

          {/* AI Solutions Anchor */}
          <a
            href="/#ai-solutions-section"
            id="nav-ai-solutions"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[#AAB4C3] hover:text-[#38BDF8] hover:bg-[#171D26] transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span>AI Solutions</span>
          </a>

          {/* Contact */}
          <Link
            to="/contact"
            id="nav-contact"
            className={`px-2.5 py-1.5 rounded-xl transition-all duration-200 ${
              location.pathname === '/contact'
                ? 'text-[#2F80ED] font-semibold bg-[#0E1217] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.02)]'
                : 'text-[#AAB4C3] hover:text-[#F4F7FB] hover:bg-[#171D26] hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)]'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Actions: Socials + Primary CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* WhatsApp Direct Icon */}
          <a
            href="https://wa.me/923271847673"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.45)] hover:border-emerald-500/40 flex items-center justify-center text-[#AAB4C3] hover:text-emerald-400 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] transition-all duration-200"
            title="Chat on WhatsApp (+92 327 1847673)"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/grafi_web_pk/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.45)] hover:border-pink-500/40 flex items-center justify-center text-[#AAB4C3] hover:text-pink-400 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] transition-all duration-200"
            title="GrafiwebPk on Instagram"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Primary Neumorphic CTA */}
          <Link
            to="/contact"
            id="header-cta-button"
            className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 focus:outline-none ${
            mobileMenuOpen
              ? 'bg-[#0E1217] text-[#2F80ED] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7),inset_-2px_-2px_5px_rgba(255,255,255,0.02)]'
              : 'bg-[#171D26] text-[#F4F7FB] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.5)]'
          }`}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Solid Neumorphic Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="fixed inset-0 top-[65px] bg-[#11151C] z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden border-t border-[rgba(255,255,255,0.05)]"
        >
          <div className="space-y-2">
            <Link
              to="/"
              className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                location.pathname === '/'
                  ? 'text-[#2F80ED] bg-[#0E1217] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]'
                  : 'text-[#F4F7FB] hover:bg-[#171D26]'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                location.pathname === '/about'
                  ? 'text-[#2F80ED] bg-[#0E1217] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]'
                  : 'text-[#F4F7FB] hover:bg-[#171D26]'
              }`}
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl overflow-hidden bg-[#171D26] border border-[rgba(255,255,255,0.04)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),3px_3px_8px_rgba(0,0,0,0.4)]">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-[#F4F7FB] text-left"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#2F80ED]' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="px-4 pb-4 space-y-2 border-t border-[rgba(255,255,255,0.04)] pt-3 bg-[#0E1217]">
                  <Link
                    to="/services"
                    className="block text-xs uppercase font-mono tracking-wider text-[#2F80ED] font-bold py-1"
                  >
                    All Services Overview →
                  </Link>
                  <Link to="/services/web-design-development" className="block text-sm text-[#AAB4C3] hover:text-[#F4F7FB] py-1">
                    Web Design & Development
                  </Link>
                  <Link to="/services/graphic-design" className="block text-sm text-[#AAB4C3] hover:text-[#F4F7FB] py-1">
                    Graphic Design & Branding
                  </Link>
                  <Link to="/services/social-media-management" className="block text-sm text-[#AAB4C3] hover:text-[#F4F7FB] py-1">
                    Social Media Management
                  </Link>
                  <Link to="/services/youtube-management" className="block text-sm text-[#AAB4C3] hover:text-[#F4F7FB] py-1">
                    YouTube Management
                  </Link>
                  <Link to="/services/ai-automation" className="block text-sm text-[#AAB4C3] hover:text-[#F4F7FB] py-1">
                    AI Solutions & Automation
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                location.pathname.startsWith('/portfolio')
                  ? 'text-[#2F80ED] bg-[#0E1217] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]'
                  : 'text-[#F4F7FB] hover:bg-[#171D26]'
              }`}
            >
              Portfolio
            </Link>

            <a
              href="/#process-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-[#F4F7FB] hover:bg-[#171D26] transition-all"
            >
              Process
            </a>

            <a
              href="/#ai-solutions-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold text-[#38BDF8] hover:bg-[#171D26] transition-all"
            >
              AI Solutions
            </a>

            <Link
              to="/contact"
              className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                location.pathname === '/contact'
                  ? 'text-[#2F80ED] bg-[#0E1217] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6)]'
                  : 'text-[#F4F7FB] hover:bg-[#171D26]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Bottom Actions for Mobile */}
          <div className="pt-6 border-t border-[rgba(255,255,255,0.05)] space-y-3">
            <Link
              to="/contact"
              className="btn-primary w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold text-center flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/923271847673"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-[#171D26] border border-[rgba(255,255,255,0.05)] shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.4)] text-[#AAB4C3] hover:text-emerald-400 text-xs font-mono font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: +92 327 1847673</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
