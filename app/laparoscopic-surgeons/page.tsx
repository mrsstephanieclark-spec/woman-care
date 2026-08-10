"use client";

import Link from "next/link";
import Image from "next/image";

export default function LaparoscopicSurgeonsPage() {
  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ 
            backgroundImage: "url('/images/laparoscopic-surgeons.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Laparoscopic surgeons in sterile scrubs preparing for procedure"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"Extensively Skilled Laparoscopic Surgeons"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"Minimally-invasive surgery, smaller incisions, quicker recovery."}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Verbose Text */}
          <div className="lg:col-span-8 space-y-6 text-charcoal/85 leading-relaxed">
            <p>
              {"Unlike common surgeries with a larger incision and longer recovery time, laparoscopic surgery is a minimally-invasive surgery, with a very small incision and a much quicker recovery time. This type of surgery is beneficial to a woman as it allows her doctor with a minimally invasive way to look directly at abdominal and pelvic organs including ovaries, fallopian tubes, and the uterus."}
            </p>
            
            <p>
              {"At WomanCare, "}
              <Link href="/providers#grady" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Dr. Grady
              </Link>
              {", "}
              <Link href="/providers#wright" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Dr. Wright
              </Link>
              {" and "}
              <Link href="/providers#davenport" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Dr. Davenport
              </Link>
              {" specialize in both traditional and laparoscopic surgeries. Dr. Davenport was the recipient of a laparoscopic award for excellence in her residency."}
            </p>

            <p>
              {"In a procedure, a very thin, lighted tube with a camera is gently placed through a small incision in the abdomen, usually no more than a quarter inch to a half inch, to examine and treat internal organs, or to remove tissue. Patients enjoy several benefits of using laparoscopic surgery instead of the more common, open surgery such as: reduced hospital stays, less discomfort, less stress, quicker recovery and smaller scars."}
            </p>

            <p>
              {"Drs. Grady, Wright and Davenport have deep experience with these types of procedures including hysterectomies and procedures to treat conditions such as endometriosis. We also offer non-invasive and minimally invasive in-office procedures including hysteroscopy, "}
              <Link href="/novasure" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                NovaSure endometrial ablation
              </Link>
              {", "}
              <Link href="/hormone-replacement-therapy" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                hormone therapy
              </Link>
              {" and more."}
            </p>
          </div>

          {/* Right Column: Illustration Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square bg-white">
              <Image
                src="/images/laparoscopic-details-1.jpg"
                alt="Laparoscopic surgery monitor and equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="card-custom bg-white border border-cream/55 p-6 text-center">
              <h4 className="font-heading text-lg text-primary font-bold mb-2">{"Minimally Invasive Expertise"}</h4>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                {"Our board-certified gynecological surgeons deliver safe, advanced clinical surgical paths close to home."}
              </p>
            </div>
          </div>

        </div>

        {/* Benefits Stat/Icon Row (4 Items) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-cream/55 shadow-sm space-y-8">
          <h3 className="font-heading text-2xl md:text-3xl text-primary font-bold text-center">
            {"Key Benefits of Laparoscopy"}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-cream/35 rounded-2xl border border-cream/50">
              <div className="h-12 w-12 bg-secondary/15 rounded-xl flex items-center justify-center text-secondary mb-4 shrink-0 font-bold">
                ✓
              </div>
              <h4 className="font-heading text-lg text-primary font-semibold">
                {"Reduced Hospital Stays"}
              </h4>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-cream/35 rounded-2xl border border-cream/50">
              <div className="h-12 w-12 bg-secondary/15 rounded-xl flex items-center justify-center text-secondary mb-4 shrink-0 font-bold">
                ✓
              </div>
              <h4 className="font-heading text-lg text-primary font-semibold">
                {"Less Discomfort"}
              </h4>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-cream/35 rounded-2xl border border-cream/50">
              <div className="h-12 w-12 bg-secondary/15 rounded-xl flex items-center justify-center text-secondary mb-4 shrink-0 font-bold">
                ✓
              </div>
              <h4 className="font-heading text-lg text-primary font-semibold">
                {"Quicker Recovery"}
              </h4>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-cream/35 rounded-2xl border border-cream/50">
              <div className="h-12 w-12 bg-secondary/15 rounded-xl flex items-center justify-center text-secondary mb-4 shrink-0 font-bold">
                ✓
              </div>
              <h4 className="font-heading text-lg text-primary font-semibold">
                {"Smaller Scars"}
              </h4>
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
