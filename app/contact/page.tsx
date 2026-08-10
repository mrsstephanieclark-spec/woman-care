"use client";

export default function ContactPage() {
  const mapSrc = "https://maps.google.com/maps?q=womancare%20jeffersonville%20in&t=&z=14&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ 
            backgroundImage: "url('/images/contact.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Exterior building photo of WomanCare office"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold">
            {"Contact Us"}
          </h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stack of Information Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Address Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Main Office */}
              <div className="card-custom bg-white border border-cream/55 flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-heading text-lg text-primary font-bold mb-3 pb-1 border-b border-primary/10">
                    {"Main Office"}
                  </h3>
                  <p className="text-sm text-charcoal/80 leading-relaxed font-light">
                    {"301 Gordon Gutmann Boulevard, Suite 201"}<br />
                    {"Jeffersonville, Indiana 47130"}
                  </p>
                </div>
              </div>

              {/* Certified Nurse Midwives Office */}
              <div className="card-custom bg-white border border-cream/55 flex flex-col justify-between p-6">
                <div>
                  <h3 className="font-heading text-lg text-primary font-bold mb-3 pb-1 border-b border-primary/10">
                    {"Midwives Office"}
                  </h3>
                  <p className="text-sm text-charcoal/80 leading-relaxed font-light mb-3">
                    {"1407 Spring Street #2"}<br />
                    {"Jeffersonville, Indiana 47130"}
                  </p>
                  <p className="text-xs text-charcoal/65 leading-relaxed bg-cream/35 p-3 rounded-lg border border-cream/40">
                    {"In the same building as Dr. Black's Eye Associates. Patients should use the rear entrance to that building."}
                  </p>
                </div>
              </div>

            </div>

            {/* Phone / Fax Card */}
            <div className="card-custom bg-white border border-cream/55 p-6">
              <h3 className="font-heading text-lg text-primary font-bold mb-4 pb-1 border-b border-primary/10">
                {"Phone & Fax Directory"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm leading-relaxed text-charcoal/80 font-light">
                <p>
                  <strong className="text-primary font-semibold">{"Phone: "}</strong>
                  <a href="tel:8122826114" className="underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    {"(812) 282-6114"}
                  </a>
                </p>
                <p>
                  <strong className="text-primary font-semibold">{"Fax: "}</strong>
                  {"(812) 650-5315"}
                </p>
                <p>
                  <strong className="text-primary font-semibold">{"Billing: "}</strong>
                  <a href="tel:8122802134" className="underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    {"(812) 280-2134"}
                  </a>
                </p>
                <p>
                  <strong className="text-primary font-semibold">{"Surgery Scheduling: "}</strong>
                  <a href="tel:8122802136" className="underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                    {"(812) 280-2136"}
                  </a>
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="card-custom bg-white border border-cream/55 p-6">
              <h3 className="font-heading text-lg text-primary font-bold mb-4 pb-1 border-b border-primary/10">
                {"Hours of Operation"}
              </h3>
              <div className="text-sm leading-relaxed text-charcoal/80 font-light space-y-1.5">
                <p>
                  <strong className="text-primary font-semibold">{"Monday – Thursday: "}</strong>
                  {"8:00 a.m. – 4:30 p.m."}
                </p>
                <p className="text-xs text-charcoal/65 italic pl-4">
                  {"(Closed for Lunch: 11:45 a.m. – 12:45 p.m.)"}
                </p>
                <p>
                  <strong className="text-primary font-semibold">{"Friday: "}</strong>
                  {"8:00 a.m. – 1:45 p.m."}
                </p>
              </div>
            </div>

            {/* Provider List Card */}
            <div className="card-custom bg-white border border-cream/55 p-6 flex-grow">
              <h3 className="font-heading text-lg text-primary font-bold mb-4 pb-1 border-b border-primary/10">
                {"Our Providers"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/80 leading-relaxed font-light">
                <div>{"Christopher S. Grady, MD"}</div>
                <div>{"Ronald L. Wright, MD"}</div>
                <div>{"Amanda Davenport, MD"}</div>
                <div>{"Elizabeth Quinkert, RN, CNM"}</div>
                <div>{"Alison Reid, RN, CNM, CLC"}</div>
                <div>{"Jennifer Hayes, APRN, CNM, CLC, SANE"}</div>
                <div>{"Rebekah Shirrell, APRN, CNM"}</div>
                <div>{"Jamie Stefanski, APRN, MSN, CNM"}</div>
                <div className="sm:col-span-2">{"Chelsae Nugent, APRN, WHNP-BC"}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-6 flex">
            <div className="w-full relative rounded-2xl overflow-hidden border-2 border-cream/55 shadow-md min-h-[450px]">
              <iframe
                title="Google Map location of WomanCare"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
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
