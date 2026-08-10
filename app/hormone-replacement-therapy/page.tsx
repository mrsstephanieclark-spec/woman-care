"use client";

import Link from "next/link";
import Image from "next/image";

export default function HormoneReplacementTherapyPage() {
  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: "url('/images/hrt.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Vibrant active woman in midlife walking outdoors during golden hour"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"Hormone Replacement Therapy"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"Restore hormone balance."}
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Row 1: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <p>
              {"WomanCare offers hormone replacement therapy in the form of hormone pellets to relieve unwanted symptoms of "}
              <Link href="/menopause-care" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                menopause
              </Link>
              {" and restore hormone balance. As a woman ages, her body goes through a transition where hormone levels rise and fall and symptoms such as decreasing fertility, hot flashes, menstrual irregularity and mood changes may occur. Unbalanced hormone levels can affect energy levels, moods and overall health and well-being, so getting hormones back in balance can provide women with immense relief."}
            </p>
            <p>
              {"WomanCare is the only provider of hormone pellet therapy in the Louisville region. With hormone pellet therapy, a pellet is placed in the small, fatty portion of your hip below the belt line. These very small pellets release hormones that mimic the effects of endogenous hormones and are absorbed into the body, helping to restore hormones to optimal levels."}
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/hormone-details-1.jpg"
                alt="Endocrine health pellet consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/hormone-details-2.jpg"
                alt="Happy active senior woman representing hormone balance vitality"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <p>
              {"This quick, easy procedure is performed in our office and lasts up to three months. Our hormone pellet therapy is also extremely affordable. Patients who have received hormone replacement therapy at WomanCare have seen amazing results including increased energy levels, reduced hot flashes and irritability, improved muscle strength, and best of all, overall quality of life."}
            </p>
            <p>
              <Link href="/contact" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Give us a call
              </Link>
              {" to find out more about hormone replacement therapy at WomanCare and if it's right for you."}
            </p>
            <div>
              <Link href="/contact" className="btn-primary">
                Inquire About Pellet Therapy
              </Link>
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
