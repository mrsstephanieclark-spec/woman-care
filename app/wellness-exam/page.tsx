"use client";

import Link from "next/link";
import Image from "next/image";

export default function WellnessExamPage() {
  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: "url('/images/wellness-exam.avif')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Clean examination room"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"Wellness Exam"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"Review of health for every stage of life."}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Row 1: Intro Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 text-lg leading-relaxed font-light">
            <p>
              {"Your annual wellness exam can enhance peace of mind, or bring to light health concerns before they progress. Either way, it feels good to be sure."}
            </p>
            <div>
              <Link href="/contact" className="btn-primary">
                Book Annual Exam
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/wellness-details-1.jpg"
                alt="Well-woman exam room layout"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Image Left, Bulleted List Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/wellness-details-2.jpg"
                alt="Nurse practitioner explaining wellness checklist"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold mb-4">
              {"What to Expect During Your Wellness, or Well-Woman, Appointment"}
            </h2>
            
            <ul className="space-y-3.5 list-none pl-0">
              {[
                "A review of your health history and discussion about any concerns",
                "Counsel about how exercise and diet contribute to wellness",
                "Confirmation that your vaccinations are current",
                "Vital sign assessment, including weight and blood pressure",
                "Orders to prescribe or refill medications",
                "An age-appropriate physical exam",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="h-6 w-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm md:text-base">
                <span className="h-6 w-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5 font-bold">
                  ✓
                </span>
                <span>
                  {"Review of any contraception or birth control needs ("}
                  <Link href="/family-planning-preconception" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    link
                  </Link>
                  {")"}
                </span>
              </li>
            </ul>

            <p className="pt-6 font-medium text-charcoal">
              {"We work hard to see you at your appointed time…and to take time for all your questions and concerns. At every stage of life, our goal is to exceed your expectations. "}
              <Link href="/contact" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Call to schedule
              </Link>
              {" your wellness exam today."}
            </p>
          </div>
        </div>

      </section>

      {/* Closing CTA Banner */}
      <section className="bg-primary text-white py-20 text-center relative overflow-hidden">
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
