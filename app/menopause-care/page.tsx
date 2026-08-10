"use client";

import Link from "next/link";
import Image from "next/image";

export default function MenopauseCarePage() {
  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: "url('/images/menopause-care.avif')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="A mature woman smiling outdoors"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"Perimenopause & Menopause Care"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"Compassionate care through every stage of the transition."}
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Row 1: Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <p>
              {"Our "}
              <Link href="/providers" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                physicians
              </Link>
              {" provide excellent counseling and care for women experiencing perimenopause or menopause, talking openly with women about physical symptoms and changes, as well as the emotional aspects. Since it occurs over months or years, it is commonly divided into two stages: perimenopause and postmenopause."}
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/menopause-details-1.jpg"
                alt="Supportive medical consultation session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Perimenopause */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/menopause-details-2.jpg"
                alt="Woman staying active and positive during midlife transition"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold mb-4">
              {"Perimenopause"}
            </h2>
            <p>
              {"Perimenopause marks the time in which a woman's body begins its transition into menopause. Hormone levels will rise and fall, and women may experience a number of symptoms. Perimenopause may last four to five years or longer."}
            </p>
            <div className="bg-white rounded-2xl p-6 border border-cream/55 shadow-sm">
              <h4 className="font-heading text-base font-semibold text-primary mb-3">
                {"Symptoms that commonly occur during perimenopause include:"}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 list-none pl-0">
                {[
                  "Decreasing fertility",
                  "Hot flashes",
                  "Menstrual irregularity",
                  "Mood changes",
                  "Vaginal dryness",
                ].map((symptom, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-sm md:text-base">
                    <span className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Row 3: Menopause & Postmenopause */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold mb-4">
              {"Menopause & Postmenopause"}
            </h2>
            <p>
              {"A woman is said to have reached menopause when a year has passed since her last period. The ovaries produce much less estrogen and no progesterone, and no longer release eggs. The years that follow are known as postmenopause."}
            </p>
            <div>
              <Link href="/contact" className="btn-primary">
                Schedule Menopause Consultation
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/menopause-details-3.jpg"
                alt="Health provider explaining estrogen balancing"
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
