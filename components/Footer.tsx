import Link from "next/link";

interface FooterLinkSection {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export default function Footer() {
  const sections: FooterLinkSection[] = [
    {
      title: "Services",
      links: [
        { label: "Prenatal Care & Delivery", href: "/prenatal-care-delivery" },
        { label: "Family Planning & Infertility", href: "/family-planning-preconception" },
        { label: "Wellness Exam", href: "/wellness-exam" },
        { label: "Hormone Replacement", href: "/hormone-replacement-therapy" },
        { label: "Menopause Care", href: "/menopause-care" },
        { label: "NovaSure Ablation", href: "/novasure" },
      ],
    },
    {
      title: "Providers",
      links: [
        { label: "All Providers", href: "/providers" },
        { label: "Midwives & Natural Birth", href: "/midwives-natural-birth" },
        { label: "Laparoscopic Surgeons", href: "/laparoscopic-surgeons" },
      ],
    },
    {
      title: "New Patients",
      links: [
        { label: "New Patients Main", href: "/new-patients" },
        { label: "Patient Medical History", href: "https://forms.woman-care.org/patient-medical-history", external: true },
      ],
    },
    {
      title: "Contact & Info",
      links: [
        { label: "Contact Main", href: "/contact" },
        { label: "Billing & Insurance", href: "/billing-insurance" },
        { label: "Careers", href: "/careers" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-cream pt-16 pb-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Grid & Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-cream/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <span className="font-heading text-3xl font-bold tracking-tight text-white block mb-4">
              Woman<span className="font-sans font-light text-blush">Care</span>
            </span>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
              Providing exceptional, compassionate healthcare for women at every stage of life.
            </p>
          </div>

          {/* Links Columns */}
          {sections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-heading text-lg font-semibold text-white tracking-wide mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-cream/80 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <svg className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Addresses Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-b border-cream/10 text-sm">
          
          {/* Main Office */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-blush mt-1">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-base font-semibold text-white mb-1">Main Office</h4>
              <p className="text-cream/80 leading-relaxed">
                301 Gordon Gutmann Blvd, Suite 201<br />
                Jeffersonville, IN 47130
              </p>
            </div>
          </div>

          {/* Midwives Office */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 text-blush mt-1">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading text-base font-semibold text-white mb-1">Midwives Office</h4>
              <p className="text-cream/80 leading-relaxed">
                1407 Spring Street #2<br />
                Jeffersonville, IN 47130
              </p>
            </div>
          </div>

        </div>

        {/* Contact Numbers, Hours, and Socials */}
        <div className="py-10 border-b border-cream/10 text-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Phone Directory */}
            <div className="lg:col-span-2">
              <h4 className="font-heading text-base font-semibold text-white mb-3">Contact Directory</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-cream/80">
                <p>
                  <strong className="text-white font-medium">Phone:</strong>{" "}
                  <a href="tel:+18122826114" className="hover:text-white transition-colors">(812) 282-6114</a>
                </p>
                <p>
                  <strong className="text-white font-medium">Fax:</strong> (812) 650-5315
                </p>
                <p>
                  <strong className="text-white font-medium">Billing:</strong>{" "}
                  <a href="tel:+18122802134" className="hover:text-white transition-colors">(812) 280-2134</a>
                </p>
                <p>
                  <strong className="text-white font-medium">Surgery Scheduling:</strong>{" "}
                  <a href="tel:+18122802136" className="hover:text-white transition-colors">(812) 280-2136</a>
                </p>
              </div>
            </div>

            {/* Hours of Operation */}
            <div>
              <h4 className="font-heading text-base font-semibold text-white mb-3">Office Hours</h4>
              <div className="text-cream/80 space-y-1">
                <p>
                  <span className="text-white font-medium">Mon – Thu:</span> 8:00 a.m. – 4:30 p.m.
                </p>
                <p className="text-xs text-cream/65 italic pl-4">
                  (Closed for lunch 11:45 a.m. – 12:45 p.m.)
                </p>
                <p>
                  <span className="text-white font-medium">Friday:</span> 8:00 a.m. – 1:45 p.m.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom (Copyright and Social Icons) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <div>
            &copy; {new Date().getFullYear()} WomanCare. All rights reserved.
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-white transition-colors p-1.5 bg-white/5 rounded-full hover:bg-white/10"
              aria-label="Visit us on Facebook"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-white transition-colors p-1.5 bg-white/5 rounded-full hover:bg-white/10"
              aria-label="Visit us on Instagram"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
          
        </div>

      </div>
    </footer>
  );
}
