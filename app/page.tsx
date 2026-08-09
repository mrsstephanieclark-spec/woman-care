import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section with Plum Overlay */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-gray-900 plum-overlay">
        {/* Placeholder background image using a styled Tailwind div or CSS placeholder since photography isn't ready */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: "url('/images/hero-home-placeholder.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="WomanCare welcoming environment placeholder image"
        />
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-4 text-center plum-overlay-content relative z-20">
          <span className="text-blush text-sm font-semibold uppercase tracking-wider mb-3 block">
            Welcome to WomanCare
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            Compassionate Care for Every Stage of Your Life
          </h1>
          <p className="text-lg text-cream/90 max-w-2xl mx-auto mb-8 font-light">
            Our dedicated team of OB/GYN specialists, certified nurse-midwives, and surgeons are here to support your health journey with expertise and warm, personalized attention.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-3 text-base">
              Schedule Appointment
            </Link>
            <Link href="/services" className="btn-secondary w-full sm:w-auto px-8 py-3 text-base border-white text-white hover:bg-white hover:text-primary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-secondary text-sm font-semibold uppercase tracking-wider mb-2 block">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-primary font-bold mb-6">
                Dedicated Obstetric & Gynecological Care in Jeffersonville
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                At WomanCare, we believe that every woman deserves high-quality, personalized healthcare. Whether you are expecting a child, seeking preventive wellness checks, navigating menopause, or exploring specialized surgical options, our team is committed to walking beside you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-primary">Certified Nurse Midwives</h4>
                    <p className="text-xs text-charcoal/70 mt-1">Supporting natural birth options and highly personalized maternity journeys.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-primary">Advanced Laparoscopic Surgeons</h4>
                    <p className="text-xs text-charcoal/70 mt-1">Offering minimally invasive treatment pathways for complex concerns.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Callout / Card Showcase */}
            <div className="lg:col-span-5">
              <div className="card-custom bg-white p-8 border-2 border-secondary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 bg-blush/20 rounded-bl-full pointer-events-none" />
                <h3 className="font-heading text-xl text-primary font-bold mb-4">Patient Information</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-6">
                  Ready to join the WomanCare family? Learn more about insurance plans, find key forms, and pre-register online.
                </p>
                <div className="space-y-3">
                  <Link href="/new-patients" className="block text-sm font-semibold text-secondary hover:text-primary transition-colors">
                    New Patient Guide &rarr;
                  </Link>
                  <a href="https://forms.woman-care.org/patient-medical-history" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-secondary hover:text-primary transition-colors">
                    Patient Medical History Form &rarr;
                  </a>
                  <Link href="/billing-insurance" className="block text-sm font-semibold text-secondary hover:text-primary transition-colors">
                    Billing & Insurance Info &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services (Showcasing Cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider mb-2 block">
              Our Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-primary font-bold">
              Comprehensive Care at Every Milestone
            </h2>
            <p className="text-charcoal/70 mt-4">
              Explore our core areas of care, from preventive wellness checks to advanced surgical procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-custom flex flex-col justify-between h-full hover:border-primary/20">
              <div>
                <div className="h-12 w-12 bg-blush/35 rounded-xl flex items-center justify-center text-primary mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-primary font-semibold mb-3">Prenatal Care & Delivery</h3>
                <p className="text-sm text-charcoal/75 leading-relaxed mb-6">
                  Experience a supportive, comprehensive pregnancy journey with our experienced OB/GYNs and dedicated midwife team.
                </p>
              </div>
              <Link href="/prenatal-care-delivery" className="text-sm font-bold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1">
                Learn More <span>&rarr;</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="card-custom flex flex-col justify-between h-full hover:border-primary/20">
              <div>
                <div className="h-12 w-12 bg-secondary/15 rounded-xl flex items-center justify-center text-secondary mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-primary font-semibold mb-3">Wellness Exams</h3>
                <p className="text-sm text-charcoal/75 leading-relaxed mb-6">
                  Stay proactive with essential preventive screenings, pap smears, breast health assessments, and counseling.
                </p>
              </div>
              <Link href="/wellness-exam" className="text-sm font-bold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1">
                Learn More <span>&rarr;</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="card-custom flex flex-col justify-between h-full hover:border-primary/20">
              <div>
                <div className="h-12 w-12 bg-blush/35 rounded-xl flex items-center justify-center text-primary mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-primary font-semibold mb-3">Menopause Care & HRT</h3>
                <p className="text-sm text-charcoal/75 leading-relaxed mb-6">
                  Navigate perimenopause and menopause transition comfortably with hormone optimization and personalized therapies.
                </p>
              </div>
              <Link href="/menopause-care" className="text-sm font-bold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1">
                Learn More <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary px-8 py-3">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Two Addresses CTA Section */}
      <section className="py-20 bg-cream/70 border-t border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider mb-2 block">
              Our Locations
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-primary font-bold">
              Convenient Care in Jeffersonville
            </h2>
            <p className="text-charcoal/70 mt-4">
              We operate two offices to serve you better, depending on your care path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Main Office Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-cream/55 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl text-primary font-bold mb-2">Main Office</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed mb-4">
                  301 Gordon Gutmann Blvd, Suite 201<br />
                  Jeffersonville, IN 47130
                </p>
                <p className="text-xs text-charcoal/60 leading-relaxed mb-6">
                  Centrally located, housing our primary obstetric, gynecological, and surgical consultations.
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=301+Gordon+Gutmann+Blvd+Jeffersonville+IN+47130" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                Get Directions &rarr;
              </a>
            </div>

            {/* Midwives Office Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-cream/55 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl text-primary font-bold mb-2">Midwives Office</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed mb-4">
                  1407 Spring Street #2<br />
                  Jeffersonville, IN 47130
                </p>
                <p className="text-xs text-charcoal/60 leading-relaxed mb-6">
                  Offering a welcoming, home-like clinical environment focused on midwife-led prenatal and preconception counseling.
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=1407+Spring+Street+Jeffersonville+IN+47130" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
