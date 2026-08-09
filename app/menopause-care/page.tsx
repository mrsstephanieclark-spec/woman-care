"use client";

import Link from "next/link";

export default function MenopauseCarePage() {
  return (
    <div className="flex-grow bg-cream">
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-gray-900 plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ 
            backgroundImage: "url('/images/menopause-care.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="A mature woman laughing in a bright kitchen, representing wellness and vitality in later life"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold">
            Perimenopause & Menopause Care
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-custom bg-white p-8 md:p-12">
          <div className="prose prose-charcoal max-w-none">
            <h2 className="font-heading text-2xl text-primary font-bold mb-4">
              Content Details Coming Soon
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              This page has been set up with the correct global shell and design elements. It is currently ready to receive detailed copy and custom layouts for <strong>Perimenopause & Menopause Care</strong> from subsequent prompts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Office
              </Link>
              <Link href="/" className="btn-secondary">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
