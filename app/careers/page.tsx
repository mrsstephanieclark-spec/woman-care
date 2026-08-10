"use client";

import Link from "next/link";

export default function CareersPage() {
  const facebookUrl = "https://www.facebook.com/WomanCareIN/";
  const instagramUrl = "https://www.instagram.com/womancarein/";

  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ 
            backgroundImage: "url('/images/careers.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Two healthcare professionals discussing treatments in supportive environment"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"Careers at WomanCare"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"A career you'll love."}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Intro Copy Card */}
        <div className="card-custom bg-white p-8 md:p-12 shadow-md space-y-6 text-charcoal/85 leading-relaxed text-base md:text-lg font-light">
          <p>
            {"If you're an energetic, positive person who loves to make a difference every day, WomanCare offers you the opportunity to pursue that passion. We're a premiere OB/GYN practice serving women of all ages throughout Southern Indiana and metropolitan Louisville, with three physicians, a nurse practitioner and six certified nurse midwives."}
          </p>
          <p>
            {"From "}
            <Link href="/prenatal-care-delivery" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
              {"pregnancy care and delivery"}
            </Link>
            {" to regular "}
            <Link href="/wellness-exam" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
              {"wellness visits"}
            </Link>
            {" and more, we provide a broad range of care for women of every age. We strive to see every patient on time, to offer our undivided attention and focus on patient comfort and care. It's a friendly, fast-paced work environment with a terrific team, supportive leadership and the best patients in the world."}
          </p>
          <p>
            {"We invite you to return to this page regularly or follow us on "}
            <a 
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors"
            >
              {"Facebook"}
            </a>
            {" and "}
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors"
            >
              {"Instagram"}
            </a>
            {" to be in the know about current opportunities to join our team."}
          </p>
        </div>

        {/* Empty-State Openings Card */}
        <div className="card-custom bg-white border border-cream/55 p-8 md:p-12 shadow-sm text-center space-y-6 max-w-2xl mx-auto">
          <div className="h-14 w-14 bg-secondary/15 rounded-full flex items-center justify-center text-secondary mx-auto shrink-0 font-bold text-xl">
            {"🏢"}
          </div>
          <div className="space-y-2">
            <h3 className="font-heading text-2xl text-primary font-bold">
              {"No Open Positions Right Now"}
            </h3>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              {"Check back soon, or follow us on social media — we'll post here the moment a role opens up."}
            </p>
          </div>

          {/* Social buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto px-6 py-2.5 flex items-center justify-center gap-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
              {"Follow on Facebook"}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto px-6 py-2.5 flex items-center justify-center gap-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              {"Follow on Instagram"}
            </a>
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
