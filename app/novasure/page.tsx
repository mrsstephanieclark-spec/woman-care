"use client";

import Link from "next/link";
import Image from "next/image";

export default function NovasurePage() {
  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: "url('/images/novasure-hero.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Calm and relaxed middle-aged woman in warm home environment"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"NovaSure Endometrial Ablation"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"A one-time, five-minute in-office procedure for heavy periods."}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Intro Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <p>
              {"NovaSure endometrial ablation is a one-time, five-minute procedure designed to remove just the uterine lining – the endometrium – which is the part of your body that causes heavy bleeding. No incisions are required, leaving your uterus intact. For 77.7% women, their heavy periods are dramatically reduced or stopped altogether. And when you choose NovaSure endometrial ablation, you're in great company. To date, two-plus million women have been treated with the NovaSure procedure."}
            </p>
            <p>
              {"In our 30s and 40s, as women approach "}
              <Link href="/menopause-care" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                menopause
              </Link>
              {", we're more likely to develop abnormal menstrual bleeding. Unfortunately, having heavy periods means a lot more than simply heavy bleeding; heavy periods can wreak havoc in our lives. According to studies, they can take a physical, social and emotional toll."}
            </p>
            <p>
              {"WomanCare performs NovaSure endometrial ablation in office, making the procedure more affordable compared to practices that perform the procedure in a hospital. There's no need for anesthetic with NovaSure, and it's fast, usually taking five minutes or less! Learn more about NovaSure below – and talk to your WomanCare Physician – to find out if the procedure is right for you."}
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/novasure-intro.jpg"
                alt="Supportive gynecological consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Benefits Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/novasure-benefits.jpg"
                alt="Active woman enjoying physical recreation with self-confidence"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold mb-4">
              {"Benefits of NovaSure"}
            </h2>
            <p>
              {"Many women who've had the NovaSure endometrial ablation procedure say they are now able to spend more time at work and daily activities, participating in more social and athletic outings now that they no longer suffer from heavy menstrual bleeding. They also report improved energy levels, better moods, and a boost in self-confidence. And many also had a significant reduction in painful periods and PMS symptoms like irritability."}
            </p>
          </div>
        </div>

        {/* NovaSure Quick Facts Grid */}
        <div className="space-y-6">
          <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold mb-6 text-center">
            {"NovaSure Quick Facts"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="card-custom bg-white border border-cream/55 text-center flex flex-col justify-center py-8">
              <span className="block font-heading text-3xl font-bold text-primary mb-2">{"1 in 5"}</span>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">{"women"}</span>
              <p className="text-xs text-charcoal/70">{"suffer from heavy periods."}</p>
            </div>

            <div className="card-custom bg-white border border-cream/55 text-center flex flex-col justify-center py-8">
              <span className="block font-heading text-3xl font-bold text-primary mb-2">{"2+ Million"}</span>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">{"women"}</span>
              <p className="text-xs text-charcoal/70">{"have been treated with the NovaSure endometrial ablation procedure."}</p>
            </div>

            <div className="card-custom bg-white border border-cream/55 text-center flex flex-col justify-center py-8">
              <span className="block font-heading text-3xl font-bold text-primary mb-2">{"77.7%"}</span>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">{"of women"}</span>
              <p className="text-xs text-charcoal/70">{"in a clinical trial menstrual bleeding is dramatically reduced or stopped altogether."}</p>
            </div>

            <div className="card-custom bg-white border border-cream/55 text-center flex flex-col justify-center py-8">
              <span className="block font-heading text-3xl font-bold text-primary mb-2">{"97%"}</span>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">{"of patients surveyed"}</span>
              <p className="text-xs text-charcoal/70">{"would recommend the procedure to a friend."}</p>
            </div>

          </div>
        </div>

        {/* What to Expect Layout */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-cream/55 shadow-sm space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl text-primary font-bold mb-4">
              {"What to Expect"}
            </h2>
            <p className="text-charcoal/75 text-sm md:text-base leading-relaxed">
              {"This simple, safe procedure is performed in office at WomanCare. You can have the procedure any time during your cycle—even if you are bleeding at the time. Here's what you can expect before, during and after you have the NovaSure procedure."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-primary/10">
            
            {/* Before */}
            <div className="pt-6 lg:pt-0 lg:pl-0 space-y-4">
              <h3 className="font-heading text-xl text-primary font-bold flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-secondary/15 flex items-center justify-center text-sm text-secondary">{"1"}</span>
                {"Before Procedure"}
              </h3>
              <ul className="space-y-3 pl-0 list-none">
                {[
                  "Your doctor will give you a pregnancy test just to be on the safe side.",
                  "He or she will also thoroughly examine you to be sure there aren't more serious causes of your heavy periods, such as uterine cancer, an active pelvic infection or from wearing an IUD.",
                  "You may also be given an anti-inflammatory medication one or two hours prior to the procedure to minimize discomfort."
                ].map((bullet, index) => (
                  <li key={index} className="flex gap-2.5 text-sm text-charcoal/80">
                    <span className="text-secondary shrink-0 font-bold">{"•"}</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* During */}
            <div className="pt-6 lg:pt-0 lg:pl-6 space-y-4">
              <h3 className="font-heading text-xl text-primary font-bold flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-secondary/15 flex items-center justify-center text-sm text-secondary">{"2"}</span>
                {"During Procedure"}
              </h3>
              <p className="text-sm text-charcoal/80 font-medium">
                {"The actual procedure takes about five minutes, but you should plan on being at WomanCare for at least one hour."}
              </p>
              <ol className="space-y-3.5 pl-0 list-none">
                {[
                  "Your doctor opens your cervix (the opening to your uterus) slightly, inserts a slender wand and extends a triangular-shaped netted device into your uterus.",
                  "The netting expands, fitting to the size and shape of your uterus.",
                  "Precisely measured radio frequency energy is delivered through the netting for about 90 seconds.",
                  "The netted device is pulled back into the wand, and both are removed from your uterus."
                ].map((step, index) => (
                  <li key={index} className="flex gap-3 text-xs md:text-sm text-charcoal/80">
                    <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] text-primary font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* After */}
            <div className="pt-6 lg:pt-0 lg:pl-6 space-y-4">
              <h3 className="font-heading text-xl text-primary font-bold flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-secondary/15 flex items-center justify-center text-sm text-secondary">{"3"}</span>
                {"After Procedure"}
              </h3>
              <p className="text-sm text-charcoal/80 font-medium">
                {"Before leaving, you'll receive specific discharge instructions. These may include the following:"}
              </p>
              <ul className="space-y-3 pl-0 list-none">
                {[
                  "Place a heating pad on your lower abdomen to help reduce cramping.",
                  "Consult your physician about medication to help stop cramping.",
                  "You may shower the same day, but refrain from swimming or taking a bath.",
                  "Refrain from placing anything in the vagina for four weeks, including using tampons or having sexual intercourse."
                ].map((bullet, index) => (
                  <li key={index} className="flex gap-2.5 text-sm text-charcoal/80">
                    <span className="text-secondary shrink-0 font-bold">{"•"}</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Candidacy section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
            <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold mb-4">
              {"Is NovaSure Right for Me?"}
            </h2>
            <p>
              {"NovaSure endometrial ablation is for premenopausal women with heavy periods due to benign causes who are finished childbearing. Having the NovaSure procedure is one of the easiest ways to eliminate heavy bleeding to dramatically improve your quality of life—and free you to do all the activities you love. If you're suffering from abnormal menstrual bleeding and want to relieve the physical, social and emotional tolls it's taking on your life, talk to your WomanCare physician about NovaSure."}
            </p>
            <p className="font-medium text-charcoal">
              {"You must be absolutely sure you do not want to have any children in the future. Your uterine lining will be removed during the procedure. This is the area in your body where the bleeding originates—and it's essential for nurturing the growth of a fetus. It is important to know that it is still possible to become pregnant after a NovaSure endometrial ablation procedure. Pregnancy following endometrial ablation is very dangerous for both the mother and the fetus so before you have the NovaSure procedure, talk with your WomanCare physician about contraception options."}
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
              <Image
                src="/images/novasure-candidacy.jpg"
                alt="A woman walking on a trail, smiling representing healthy living after NovaSure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Special Safety Information Callout Box */}
        <div className="bg-blush/20 border border-primary/20 rounded-3xl p-6 md:p-8 space-y-4">
          <h3 className="font-heading text-xl text-primary font-bold flex items-center gap-2">
            <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {"Special Safety Information"}
          </h3>
          <p className="text-sm text-charcoal/85 leading-relaxed">
            {"NovaSure endometrial ablation is for premenopausal women with heavy periods due to benign causes who are finished childbearing. Pregnancy following the NovaSure procedure can be dangerous. The NovaSure procedure is not for those who have or suspect uterine cancer; have an active genital, urinary or pelvic infection; or have an IUD. NovaSure endometrial ablation is not a sterilization procedure. Rare but serious risks include, but are not limited to, thermal injury, perforation and infection. Temporary side effects may include cramping, nausea, vomiting, discharge and spotting."}
          </p>
          <p className="text-sm">
            {"For complete safety information and to learn more, visit "}
            <a
              href="http://www.novasure.com/patients"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors"
            >
              {"www.novasure.com"}
            </a>
            {"."}
          </p>
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
