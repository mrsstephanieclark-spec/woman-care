"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  // Scroll detection for sticky shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
      setOpenMobileAccordion(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const servicesLinks: NavLink[] = [
    { label: "Prenatal Care & Delivery", href: "/prenatal-care-delivery" },
    { label: "Family Planning, Infertility & Preconception Care", href: "/family-planning-preconception" },
    { label: "Wellness Exam", href: "/wellness-exam" },
    { label: "Hormone Replacement Therapy", href: "/hormone-replacement-therapy" },
    { label: "Perimenopause & Menopause Care", href: "/menopause-care" },
    { label: "NovaSure Endometrial Ablation", href: "/novasure" },
  ];

  const providersLinks: NavLink[] = [
    { label: "Our Providers", href: "/providers" },
    { label: "Midwives & Natural Birth", href: "/midwives-natural-birth" },
    { label: "Laparoscopic Surgeons", href: "/laparoscopic-surgeons" },
  ];

  const newPatientsLinks: NavLink[] = [
    { label: "New Patient Information", href: "/new-patients" },
    { label: "Patient Medical History", href: "https://forms.woman-care.org/patient-medical-history", external: true },
  ];

  const contactLinks: NavLink[] = [
    { label: "Contact Us", href: "/contact" },
    { label: "Billing & Insurance", href: "/billing-insurance" },
    { label: "Careers", href: "/careers" },
  ];

  const toggleDropdown = (trigger: string) => {
    setOpenDropdown(openDropdown === trigger ? null : trigger);
  };

  const toggleMobileAccordion = (trigger: string) => {
    setOpenMobileAccordion(openMobileAccordion === trigger ? null : trigger);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 bg-cream transition-all duration-300 ${
        isScrolled ? "shadow-md py-3" : "py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Logo/Wordmark */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-2">
              <span className="font-heading text-2xl md:text-3xl font-bold text-primary tracking-tight transition-colors group-hover:text-primary/80">
                Woman<span className="font-sans font-light text-secondary">Care</span>
              </span>
            </Link>
          </div>

          {/* Center Nav (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            
            {/* Services Mega-Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("Services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  pathname.startsWith("/services") || openDropdown === "Services"
                    ? "text-primary font-semibold"
                    : "text-charcoal hover:text-primary"
                }`}
                onClick={() => toggleDropdown("Services")}
                aria-expanded={openDropdown === "Services"}
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === "Services" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Services Mega-Menu Card */}
              {openDropdown === "Services" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[600px] bg-white rounded-2xl shadow-xl border border-cream/50 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-2 gap-4">
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`p-3 rounded-xl transition-all hover:bg-cream/40 group/item ${
                          pathname === link.href ? "bg-cream/50 text-primary font-medium" : "text-charcoal"
                        }`}
                      >
                        <p className="text-sm font-semibold group-hover/item:text-primary transition-colors">
                          {link.label}
                        </p>
                        <span className="text-xs text-charcoal/60 group-hover/item:text-charcoal/80 transition-colors">
                          Learn more about our care options
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Providers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("Providers")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  pathname.startsWith("/providers") || openDropdown === "Providers"
                    ? "text-primary font-semibold"
                    : "text-charcoal hover:text-primary"
                }`}
                onClick={() => toggleDropdown("Providers")}
                aria-expanded={openDropdown === "Providers"}
              >
                Providers
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === "Providers" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === "Providers" && (
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-cream/50 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {providersLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition-colors hover:bg-cream/40 ${
                        pathname === link.href ? "text-primary font-semibold bg-cream/30" : "text-charcoal hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* New Patients Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("New Patients")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  pathname.startsWith("/new-patients") || openDropdown === "New Patients"
                    ? "text-primary font-semibold"
                    : "text-charcoal hover:text-primary"
                }`}
                onClick={() => toggleDropdown("New Patients")}
                aria-expanded={openDropdown === "New Patients"}
              >
                New Patients
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === "New Patients" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === "New Patients" && (
                <div className="absolute left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-cream/50 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {newPatientsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors hover:bg-cream/40 text-charcoal hover:text-primary"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* FAQs Link */}
            <Link
              href="/faqs"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/faqs" ? "text-primary font-semibold" : "text-charcoal hover:text-primary"
              }`}
            >
              FAQs
            </Link>

            {/* Contact Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("Contact")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  pathname.startsWith("/contact") || openDropdown === "Contact"
                    ? "text-primary font-semibold"
                    : "text-charcoal hover:text-primary"
                }`}
                onClick={() => toggleDropdown("Contact")}
                aria-expanded={openDropdown === "Contact"}
              >
                Contact
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === "Contact" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === "Contact" && (
                <div className="absolute right-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-cream/50 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {contactLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition-colors hover:bg-cream/40 ${
                        pathname === link.href ? "text-primary font-semibold bg-cream/30" : "text-charcoal hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Buttons & Tap-To-Call */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href="tel:+18122826114"
              className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (812) 282-6114
            </a>
            
            <a
              href="https://pay.woman-care.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-4 py-2 text-xs"
            >
              Pay Online
            </a>
            <a
              href="https://portal.woman-care.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-4 py-2 text-xs"
            >
              Patient Portal
            </a>
          </div>

          {/* Mobile: Hamburger Toggle & Tap-To-Call */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+18122826114"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all active:scale-95"
              aria-label="Call office"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-primary/25 text-charcoal hover:bg-cream/40 transition-colors focus:outline-none cursor-pointer"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Slide down) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-cream border-t border-cream/50 shadow-lg py-4 px-4 sm:px-6 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-200">
          <nav className="flex flex-col space-y-2">
            
            {/* Services Accordion */}
            <div className="border-b border-primary/10 pb-2">
              <button
                onClick={() => toggleMobileAccordion("Services")}
                className="flex items-center justify-between w-full py-2 text-base font-semibold text-charcoal cursor-pointer"
              >
                <span>Services</span>
                <svg
                  className={`h-5 w-5 text-primary transition-transform duration-200 ${
                    openMobileAccordion === "Services" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileAccordion === "Services" && (
                <div className="pl-4 mt-1 flex flex-col space-y-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-1 text-sm text-charcoal/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Providers Accordion */}
            <div className="border-b border-primary/10 pb-2">
              <button
                onClick={() => toggleMobileAccordion("Providers")}
                className="flex items-center justify-between w-full py-2 text-base font-semibold text-charcoal cursor-pointer"
              >
                <span>Providers</span>
                <svg
                  className={`h-5 w-5 text-primary transition-transform duration-200 ${
                    openMobileAccordion === "Providers" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileAccordion === "Providers" && (
                <div className="pl-4 mt-1 flex flex-col space-y-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
                  {providersLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-1 text-sm text-charcoal/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* New Patients Accordion */}
            <div className="border-b border-primary/10 pb-2">
              <button
                onClick={() => toggleMobileAccordion("New Patients")}
                className="flex items-center justify-between w-full py-2 text-base font-semibold text-charcoal cursor-pointer"
              >
                <span>New Patients</span>
                <svg
                  className={`h-5 w-5 text-primary transition-transform duration-200 ${
                    openMobileAccordion === "New Patients" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileAccordion === "New Patients" && (
                <div className="pl-4 mt-1 flex flex-col space-y-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
                  {newPatientsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between py-1 text-sm text-charcoal/80 hover:text-primary transition-colors"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* FAQs Link */}
            <div className="border-b border-primary/10 pb-2">
              <Link
                href="/faqs"
                className="block py-2 text-base font-semibold text-charcoal hover:text-primary transition-colors"
              >
                FAQs
              </Link>
            </div>

            {/* Contact Accordion */}
            <div className="border-b border-primary/10 pb-2">
              <button
                onClick={() => toggleMobileAccordion("Contact")}
                className="flex items-center justify-between w-full py-2 text-base font-semibold text-charcoal cursor-pointer"
              >
                <span>Contact</span>
                <svg
                  className={`h-5 w-5 text-primary transition-transform duration-200 ${
                    openMobileAccordion === "Contact" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openMobileAccordion === "Contact" && (
                <div className="pl-4 mt-1 flex flex-col space-y-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
                  {contactLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-1 text-sm text-charcoal/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-2 pt-4">
              <a
                href="https://pay.woman-care.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-2.5"
              >
                Pay Online
              </a>
              <a
                href="https://portal.woman-care.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-2.5"
              >
                Patient Portal
              </a>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}
