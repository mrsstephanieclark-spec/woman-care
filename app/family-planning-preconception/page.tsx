"use client";

import Link from "next/link";
import Image from "next/image";

export default function FamilyPlanningPreconceptionPage() {
  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: "url('/images/family-planning-preconception.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Provider showing a birth control counseling model"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"Family Planning, Infertility Evaluations & Preconception Care"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"Complete care for whatever family-planning stage you're in."}
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section 1: Family Planning */}
        <div id="family" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-28">
          {/* Text Left */}
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <h2 className="font-heading text-3xl text-primary font-bold mb-4">
              {"Family Planning"}
            </h2>
            <p>
              {"At WomanCare, we know that choosing the right time to start a family is a big decision. If you're not ready for children right now, we offer complete family planning to aid you in this process, with birth control options including oral contraceptives, implants, intrauterine devices, natural contraceptive options and more. We encourage you to talk openly and feel comfortable discussing your family planning goals and questions with your "}
              <Link href="/providers" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                WomanCare provider
              </Link>
              {"."}
            </p>
          </div>
          {/* Image Right */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/family-planning.jpg"
                alt="Realistic birth control consultation at WomanCare"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Infertility Evaluations */}
        <div id="infertility" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-28">
          {/* Image Left */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/infertility.jpg"
                alt="Realistic supportive consultation moment between patient and provider"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Text Right */}
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <h2 className="font-heading text-3xl text-primary font-bold mb-4">
              {"Infertility Evaluations"}
            </h2>
            <p>
              {"If you're ready to have children, but are having difficulty conceiving, we offer infertility evaluations for you and your partner. During your initial infertility evaluation appointment, your WomanCare physician will review with you any previous surgeries you've had, chronic diseases, lifestyle and stress, illnesses, medications used, alcohol or tobacco use, sexual practices and more. In addition, you and your partner may undergo a series of infertility tests, which can include physical examinations, blood tests, urine tests, biopsy, PCOS (polycystic ovarian syndrome) evaluations and more. "}
              <Link href="/contact" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Give us a call
              </Link>
              {" or talk with your "}
              <Link href="/providers" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                WomanCare provider
              </Link>
              {" about infertility evaluations."}
            </p>
          </div>
        </div>

        {/* Section 3: Preconception Care */}
        <div id="preconception" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-28">
          {/* Text Left */}
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <h2 className="font-heading text-3xl text-primary font-bold mb-4">
              {"Preconception Care"}
            </h2>
            <p>
              {"Preconception care at WomanCare involves learning and practicing healthy lifestyle changes to get your body ready to conceive and carry a child. There's a lot you can do to prepare for pregnancy such as taking a prenatal supplement, getting plenty of rest, achieving a balanced, healthy diet, exercising, eliminating potentially harmful habits and more. There are even steps your partner can take to help your chances of getting pregnant. Schedule your preconception care appointment at WomanCare today to learn more."}
            </p>
            <div>
              <Link href="/contact" className="btn-primary">
                Schedule Preconception Visit
              </Link>
            </div>
          </div>
          {/* Image Right */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/preconception.png"
                alt="Realistic active woman preparing a healthy meal with fresh vegetables in kitchen"
                fill
                className="object-cover"
              />
            </div>
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
