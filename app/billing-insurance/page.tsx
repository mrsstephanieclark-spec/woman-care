"use client";

export default function BillingInsurancePage() {
  const payOnlineUrl = "https://pay.woman-care.org";

  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ 
            backgroundImage: "url('/images/billing-insurance.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Patient reviewing billing options on a screen with coordinator"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold">
            {"Billing & Insurance Information"}
          </h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Intro Card */}
        <div className="card-custom bg-white p-8 md:p-12 shadow-md text-charcoal/85 leading-relaxed text-base md:text-lg font-light">
          <p>
            {"In order to help you become better acquainted with our practice, we've outlined some of the basics every patient needs to know regarding insurance and billing. We want to be sure you're comfortable with every facet of our practice, including the financial aspects, and we encourage you to let us know if you have any questions or concerns. We know that dealing with insurance regulations and the constant changes in coverage can be frustrating, and our goal is to keep things as clear and simple as possible for you."}
          </p>
        </div>

        {/* 3 Insurance Cards Stack */}
        <div className="space-y-6">
          
          {/* Card 1 */}
          <div className="card-custom bg-white border border-cream/55 p-8 shadow-sm">
            <p className="text-sm md:text-base text-charcoal/85 leading-relaxed">
              <strong className="text-primary font-semibold">
                {"If we are participating with your insurance"}
              </strong>
              {", we ask that any co-pays, deductibles or non-covered service be paid for on the day of your service. Also, if your insurance requires a referral, make sure our office receives the referral on the day of your service."}
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-custom bg-white border border-cream/55 p-8 shadow-sm">
            <p className="text-sm md:text-base text-charcoal/85 leading-relaxed">
              <strong className="text-primary font-semibold">
                {"If we do not participate with your insurance"}
              </strong>
              {", payment in full will be necessary on the day of your appointment. As a courtesy to you, we will be glad to file with your insurance for reimbursement."}
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-custom bg-white border border-cream/55 p-8 shadow-sm">
            <p className="text-sm md:text-base text-charcoal/85 leading-relaxed">
              <strong className="text-primary font-semibold">
                {"If you have no insurance coverage"}
              </strong>
              {", it will be necessary for you to pay in full at the time of your appointment. For your convenience, WomanCare accepts both Visa® and MasterCard®."}
            </p>
          </div>

        </div>

        {/* Action Button & Contact Info */}
        <div className="card-custom bg-white border border-cream/55 p-8 text-center space-y-6 shadow-sm">
          <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">
            {"If you have any questions at all regarding billing or insurance, please feel free to call us at "}
            <a href="tel:8122802134" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
              {"(812) 280-2134"}
            </a>
            {"."}
          </p>
          
          <div>
            <a
              href={payOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-base font-bold shadow-md hover:bg-primary/95 text-white inline-flex"
            >
              {"Pay Online"}
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
