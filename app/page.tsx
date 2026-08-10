"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    const timer = setTimeout(() => {
      setMounted(true);
      setPrefersReducedMotion(mediaQuery.matches);
    }, 0);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section with Plum Overlay */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center justify-center bg-charcoal plum-overlay">
        {/* Loop, mute, autoplay video background or photo fallback */}
        {mounted && !prefersReducedMotion ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/prenatal-hero.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
            aria-label="Looping background video of a peaceful expectant mother"
          >
            <source src="/videos/home-hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-85"
            style={{ 
              backgroundImage: "url('/images/prenatal-hero.jpg')", 
              backgroundColor: "#2B2320" 
            }}
            aria-label="Peaceful expectant mother holding her belly"
          />
        )}
        
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto px-4 text-center plum-overlay-content relative z-20">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight tracking-tight mb-6">
            {"WomanCare — Health Care Designed for Today's Woman"}
          </h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
            {"Board-certified physicians and certified nurse-midwives providing comprehensive OB/GYN care for every stage of life."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="tel:8122826114" 
              className="btn-primary w-full sm:w-auto px-8 py-4 text-base shadow-lg bg-primary border border-primary hover:bg-primary/95 text-white"
            >
              Schedule an Appointment
            </a>
            <Link 
              href="/providers" 
              className="btn-secondary w-full sm:w-auto px-8 py-4 text-base shadow-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Meet Our Providers
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary text-white py-6 md:py-8 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="py-2 md:py-0">
              <span className="block font-heading text-3xl lg:text-4xl font-bold mb-1">3</span>
              <span className="text-sm uppercase tracking-wider font-semibold text-cream/90">Board-Certified Physicians</span>
            </div>
            <div className="py-2 md:py-0">
              <span className="block font-heading text-3xl lg:text-4xl font-bold mb-1">6</span>
              <span className="text-sm uppercase tracking-wider font-semibold text-cream/90">Certified Nurse-Midwives</span>
            </div>
            <div className="py-2 md:py-0">
              <span className="block font-heading text-xl lg:text-2xl font-bold mb-1 leading-normal md:leading-10">Lowest C-Section Rate</span>
              <span className="text-sm uppercase tracking-wider font-semibold text-cream/90">in the Region</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Column Feature Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="card-custom flex flex-col justify-between h-full bg-white hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="h-12 w-12 bg-blush/40 rounded-xl flex items-center justify-center text-primary mb-6 shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-primary font-bold mb-3">Expecting a Little One</h3>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-8">
                  {"WomanCare has three Board-Certified Physicians and six of the only few Certified Nurse-Midwives in the Kentuckiana region who deliver babies in the comfort of Clark Memorial Hospital's Family Birth Place and at the Tree of Life Family Birth Center."}
                </p>
              </div>
              <Link 
                href="/providers" 
                className="text-sm font-bold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1.5 group/link"
              >
                Learn about Providers <span className="transform transition-transform group-hover/link:translate-x-1">&rarr;</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="card-custom flex flex-col justify-between h-full bg-white hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="h-12 w-12 bg-secondary/15 rounded-xl flex items-center justify-center text-secondary mb-6 shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-primary font-bold mb-3">For Women of All Ages</h3>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-8">
                  {"WomanCare offers a comprehensive array of OB/GYN services including preconception and family planning, infertility evaluations, complete care through pregnancy and delivery, menopause treatment and routine care throughout the year."}
                </p>
              </div>
              <Link 
                href="/prenatal-care-delivery" 
                className="text-sm font-bold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1.5 group/link"
              >
                Explore Services <span className="transform transition-transform group-hover/link:translate-x-1">&rarr;</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="card-custom flex flex-col justify-between h-full bg-white hover:border-primary/20 transition-all duration-300">
              <div>
                <div className="h-12 w-12 bg-blush/40 rounded-xl flex items-center justify-center text-primary mb-6 shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-primary font-bold mb-3">Philosophy of Care</h3>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-8">
                  {"We emphasize the human touch as much as technique and technology. We work hard to see you at your appointed time with every visit — and make time for any questions or concerns you may have. It's a delicate balance, but one we believe serves our patients well."}
                </p>
              </div>
              <span className="text-sm font-medium text-charcoal/40 italic">
                Our Patient Promise
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Long-Form Intro Section */}
      <section className="py-24 bg-white border-t border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Column (Left) */}
            <div className="lg:col-span-7">
              <h2 className="font-heading text-3xl sm:text-4xl text-primary font-bold mb-8 leading-tight">
                {"A Medical Practice Designed for the Unique Health Care Needs of Today's Woman"}
              </h2>
              
              <div className="space-y-6 text-charcoal/85 text-base leading-relaxed">
                <p>
                  {"For a young woman, nervous about her first visit, we offer the reassurance you need to feel comfortable in our care, taking the time to answer any and every question. When wedding bells ring and you begin thinking about a family, we provide complete "}
                  <Link href="/family-planning-preconception#preconception" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    preconception care
                  </Link>
                  {", "}
                  <Link href="/family-planning-preconception#family" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    family planning
                  </Link>
                  {" "}
                  {"and "}
                  <Link href="/family-planning-preconception#infertility" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    infertility evaluations
                  </Link>
                  {"."}
                </p>

                <p>
                  {"For mothers-to-be, WomanCare has three Board-Certified "}
                  <Link href="/providers" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    Physicians
                  </Link>
                  {" and six Certified "}
                  <Link href="/providers" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    Nurse-Midwives
                  </Link>
                  {" who deliver babies in the comfort of Clark Memorial Hospital's Family Birth Place — including the most experienced "}
                  <Link href="/midwives-natural-birth" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    nurse-midwife
                  </Link>
                  {" in the entire metro region."}
                </p>

                <p>
                  {"As your children grow and even leave the nest, we're still here for you, to help you through all the challenges and questions that the years can bring. And no matter your age, we work hard to see you promptly at the appointed time, in comfortable offices just minutes from downtown Louisville."}
                </p>

                <p className="font-medium text-charcoal">
                  {"Whatever your season of life, enjoy care that will exceed your expectations. Call "}
                  <a href="tel:8122826114" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    (812) 282-6114
                  </a>
                  {" and schedule an appointment. WomanCare…our name says it all."}
                </p>
              </div>
            </div>

            {/* Photo Column (Right) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 lg:aspect-square bg-cream">
                <Image
                  src="/images/home-intro-generations.jpg"
                  alt="Multi-generational family representation representing care across stages of life"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative accent element */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blush/20 rounded-full -z-10 blur-xl" />
            </div>

          </div>
        </div>
      </section>

      {/* Heartbeat Bears Feature (Blush Background) */}
      <section className="py-24 bg-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blush/25 border border-blush/55 rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Photo Left */}
              <div className="lg:col-span-4 relative order-last lg:order-first">
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square max-w-[300px] mx-auto bg-white p-4">
                  <div className="w-full h-full relative rounded-xl overflow-hidden bg-cream">
                    <Image
                      src="/images/heartbeat-bear.jpg"
                      alt="Cuddly stuffed animal from the Heartbeat Bears collection with recorder"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-8">
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider mb-2 block">
                  Special Keepsake
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl text-primary font-bold mb-6">
                  {"Capture Your Little One's Heartbeat"}
                </h2>
                <p className="text-charcoal/85 leading-relaxed mb-8 text-base">
                  {"The Heartbeat Bears collection gives you the opportunity to capture your little one's heartbeat and sounds in an instant! Each stuffed animal comes with an easy-to-use recorder, so you can record your baby's heartbeat. And if you're looking for something outside the range of teddy bears, expectant moms can also order from a catalog with other cuddly critters to find the perfect match for you and your baby!"}
                </p>
                <div>
                  <a
                    href="http://main.acsevents.org/goto/womancare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-8 py-3.5 shadow-md hover:bg-primary/95 text-white inline-flex"
                  >
                    Donate Today
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Banner */}
      <section className="bg-primary text-white py-20 text-center relative overflow-hidden">
        {/* Visual background patterns */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            {"Whatever Your Season of Life, We're Here"}
          </h2>
          <div>
            <a
              href="tel:8122826114"
              className="btn-primary bg-white text-primary border border-white hover:bg-cream hover:text-primary px-10 py-4 text-lg font-bold shadow-xl transition-all"
            >
              Call (812) 282-6114
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
