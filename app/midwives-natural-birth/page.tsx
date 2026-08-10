"use client";

import Link from "next/link";
import Image from "next/image";

export default function MidwivesNaturalBirthPage() {
  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ 
            backgroundImage: "url('/images/midwives-natural-birth.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Midwife providing prenatal care"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"Nurse-Midwives & Natural Birth"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"A personal, intimate birth experience."}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Two-Column Body Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Detailed Copy */}
          <div className="lg:col-span-8 space-y-6 text-charcoal/85 leading-relaxed">
            <p>
              {"The number of births being overseen by nurse-midwives is on the rise. The American College of Nurse-Midwives (ACNM) estimates that soon 10% of babies in the U.S. will be delivered by Certified Nurse-Midwives, up from 3% just ten years ago. Worldwide, midwives deliver more than two-thirds of births."}
            </p>
            
            <p>
              <Link href="/providers#quinkert" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Elizabeth Quinkert (RN, CNM)
              </Link>
              {", "}
              <Link href="/providers#reid" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Alison Reid (RN, CNM, CLC)
              </Link>
              {", "}
              <Link href="/providers#hayes" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Jennifer Hayes (APRN, CNM, CLC, SANE)
              </Link>
              {", "}
              <Link href="/providers#shirrell" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Rebekah Shirrell (APRN, CNM)
              </Link>
              {", "}
              <Link href="/providers#stefanski" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Jamie Stefanski (APRN, MSN, CNM)
              </Link>
              {" and "}
              <Link href="/providers#cubbage" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                Sarah Cubbage (APRN, CNM)
              </Link>
              {" are six Certified Nurse-Midwives in the Louisville metropolitan region employed by WomanCare. They are all well known, established leaders in midwifery with over 20 years of experience in the field. All three are available to provide moms with an intimate and personal birth experience at Clark Memorial Hospital's Family Birth Place."}
            </p>

            <p>
              {"Certified Nurse-Midwives (CNMs) are Bachelor's-prepared registered nurses who graduate from a masters nurse-midwifery program accredited by the American College of Nurse-Midwives, and pass a national certification exam. CNMs are educated extensively in both nursing and midwifery and can practice anywhere in the U.S. (In contrast, Direct-Entry Midwives, also called Lay, Licensed, or Professional Midwives, practice midwifery, but they are not registered nurses, and are not certified.)"}
            </p>

            <p>
              {"A nurse-midwife is an advanced practice nurse with additional education and board certification. Their training allows them to independently care for laboring women, deliver unassisted and provide prenatal and postpartum care to women and newborns. They are very involved in labor and delivery, able to be more present and supportive during labor, and will consult with a collaboratory physician who may become involved in the delivery if needed."}
            </p>

            <p>
              {"Although qualified to administer drugs and perform medical procedures, those interventions are not routine for nurse-midwives, and they are used only when the mother requests them. The nurse-midwife believes in and trusts the natural birth process."}
            </p>

            <p>
              {"Nurse-midwives also provide family planning and birth control counseling, and normal gynecological services such as: physical and breast exams, pap smears, and preventive health screening. Our nurse-midwives may prescribe medications."}
            </p>

            <p className="font-semibold pt-4">
              {"Be sure to like our "}
              <a 
                href="https://www.facebook.com/Woman-Care-Midwifery-Services-130458063701081/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors"
              >
                {"WomanCare Midwifery Services"}
              </a>
              {" page on Facebook."}
            </p>
          </div>

          {/* Right Column: Illustrative Image Mockup */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-square bg-white">
              <Image
                src="/images/midwife-natural-details-1.jpg"
                alt="Midwife supporting patient inside birthing center"
                fill
                className="object-cover"
              />
            </div>
            <div className="card-custom bg-white border border-cream/55 p-6 text-center">
              <h4 className="font-heading text-lg text-primary font-bold mb-2">{"Option of Birth Settings"}</h4>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                {"Enjoy personalized attention during your pregnancy and labor in a hospital or specialized birth center environment."}
              </p>
            </div>
          </div>

        </div>

        {/* Two-Column Checklist Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Checklist Card: What We Offer */}
          <div className="card-custom bg-white border border-cream/55 p-8 shadow-md">
            <h3 className="font-heading text-2xl text-primary font-bold mb-6 border-b border-primary/10 pb-3">
              {"What We Offer"}
            </h3>
            <ul className="space-y-4 pl-0 list-none">
              {[
                "Personalized birth plans",
                "Comprehensive OB care",
                "Natural deliveries",
                "Fertility counseling",
                "Hydrotherapy (water labor)",
                "Well-woman care across the lifespan",
                "Lowest cesarean section rate in the region at 6% in 2015",
              ].map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-charcoal/80">
                  <span className="h-6 w-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm md:text-base text-charcoal/80">
                <span className="h-6 w-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5 font-bold">
                  ✓
                </span>
                <span>
                  {"Delivery at "}
                  <a 
                    href="https://www.clarkmemorial.org/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors"
                  >
                    {"Clark Memorial Hospital"}
                  </a>
                  {" and "}
                  <a 
                    href="https://treeoflifefbc.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors"
                  >
                    {"Tree of Life"}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base text-charcoal/80">
                <span className="h-6 w-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5 font-bold">
                  ✓
                </span>
                <span>{"Collaborative care with experienced, trusting and supportive OB/GYNs"}</span>
              </li>
            </ul>
          </div>

          {/* Right Checklist Card: Normal, Healthy Birth */}
          <div className="card-custom bg-white border border-cream/55 p-8 shadow-md">
            <h3 className="font-heading text-2xl text-primary font-bold mb-2 border-b border-primary/10 pb-3">
              {"Normal, Healthy Birth"}
            </h3>
            <p className="text-sm text-charcoal/70 mb-6 italic">
              {"Normal, healthy birth is supported by physical and psychological factors that promote effective labor."}
            </p>
            <ul className="space-y-4 pl-0 list-none">
              {[
                "Labor begins and progresses on its own",
                "Move around freely in labor",
                "Give birth in whatever position you feel comfortable",
                "Receive support from people you choose",
                "Labor results in a vaginal birth with normal blood loss",
                "Mother and baby stay together after birth, skin-to-skin",
                "Breastfeeding begins right away",
              ].map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-charcoal/80">
                  <span className="h-6 w-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5 font-bold">
                    ✓
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
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
