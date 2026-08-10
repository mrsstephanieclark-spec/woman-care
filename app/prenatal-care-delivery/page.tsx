"use client";

import Link from "next/link";
import Image from "next/image";

export default function PrenatalCareDeliveryPage() {
  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: "url('/images/prenatal-hero.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Expecting mother resting peacefully in a living room"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"Prenatal Care & Delivery"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"Have a safe, healthy pregnancy and delivery."}
          </p>
        </div>
      </section>

      {/* Two-Column Body Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          
          {/* Row 1: Text Left, Photo Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
              <p>
                {"Learning that you're pregnant can bring a mix of excitement, anticipation and apprehension. At WomanCare, we understand that. Our "}
                <Link href="/providers" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                  physicians
                </Link>
                {" and "}
                <Link href="/providers" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                  midwives
                </Link>
                {" are here to provide you with prenatal care and counseling to ensure a safe, healthy pregnancy and delivery for you and your baby."}
              </p>
              <p>
                {"Your WomanCare "}
                <Link href="/providers" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                  Physician
                </Link>
                {" or "}
                <Link href="/midwives-natural-birth" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                  Midwife
                </Link>
                {" will meet with you early in your pregnancy for a thorough examination and evaluation. This will usually include routine tests for a variety of conditions that could affect your pregnancy. We'll ask you questions about your family history, and give you the chance to have your own questions answered."}
              </p>
              <p>
                {"We'll continue to see you throughout your pregnancy, every four to six weeks in the early months, and more frequently as you approach your delivery date. Throughout your pregnancy, we maintain a watchful eye on you and your baby and talk with you about how to give your baby a healthy start to life, what foods to eat or avoid, exercise recommendations, activities to seek or avoid, vitamins to take and more."}
              </p>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
                <Image
                  src="/images/prenatal-details-1.jpg"
                  alt="Pregnancy consultation session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Photo Left, Text Right (Alternating) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-white">
                <Image
                  src="/images/prenatal-details-2.jpg"
                  alt="Clark Memorial Family Birth Place environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
              <p>
                {"Early and continuous prenatal care allows us to spot any health concerns that may be present for either of you and adjust your plan of care accordingly. If risk factors should appear at any point in your pregnancy, know that you're in good hands, as WomanCare physicians have deep experience in high risk pregnancies."}
              </p>
              <p>
                {"If you're looking for experience, you'll be pleased to know that no practice in southern Indiana delivers more babies than WomanCare. And we're all about options, so you can choose between natural birth with one of our Certified Nurse Midwives or a more traditional delivery with one of our experienced physicians."}
              </p>
              <p>
                {"Either way, you'll get expertise in high risk pregnancies and one of the lowest C-section rates in the region. And we'll deliver your bundle of joy just minutes from downtown Louisville at Clark Memorial's beautiful "}
                <a 
                  href="https://www.clarkmemorial.org/our-services/family-birth-place" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors"
                >
                  Family Birth Place
                </a>
                {"."}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Pulled-Out Subsection: Ultrasounds */}
      <section className="py-20 bg-blush/20 border-y border-blush/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-custom bg-white p-8 md:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Left */}
              <div className="lg:col-span-7 space-y-6 text-charcoal/85 leading-relaxed">
                <h2 className="font-heading text-3xl text-primary font-bold mb-4">
                  {"Ultrasounds"}
                </h2>
                <p>
                  {"When you're expecting, getting an ultrasound and seeing your baby for the first time and as he or she develops throughout pregnancy can be very exciting."}
                </p>
                <p>
                  {"Ultrasounds use sound waves to create an image of your baby in your womb. Ultrasounds allow you to see your baby's heartbeat and movement of his or her body, arms and legs. They also help your doctor determine the gender of your baby, usually around 20 weeks."}
                </p>
                <p>
                  {"For an abdominal ultrasound, you'll lie down and our technician will put a special gel on your belly, which helps carry sound waves. Then a probe will be moved around over your belly to get an image. Afterward, you can receive photos from your ultrasound to take home if you wish. Your doctor will tell you if anything seems unusual. But keep in mind that ultrasounds are not typically used to diagnose problems with your baby."}
                </p>
              </div>

              {/* Photo Right */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-cream">
                  <Image
                    src="/images/prenatal-ultrasound.jpg"
                    alt="Realistic pregnancy ultrasound scan image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

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
