"use client";


export default function NewPatientsPage() {
  const formUrl = "https://forms.woman-care.org/patient-medical-history";

  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ 
            backgroundImage: "url('/images/new-patients.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Medical receptionist smiling at a patient signing in on a tablet"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"New Patients"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"Providing care to women of all ages."}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro Text */}
        <div className="card-custom bg-white p-8 md:p-12 shadow-md space-y-6 text-charcoal/85 leading-relaxed text-base md:text-lg font-light">
          <p>
            {"Welcome to our practice. We're so pleased that you've chosen WomanCare. We know that you have many alternatives when it comes to your health and wellness, and we are honored that you've selected us."}
          </p>
          <p>
            {"WomanCare exists to provide comprehensive, compassionate health care to women of all ages. Our goal is to provide you with the best care available today, in the most comfortable setting, using the most advanced technology. In order to help you become better acquainted with our practice, we've outlined some of the basics all patients need to know regarding insurance and billing. We want to be sure you're comfortable with every facet of our practice, including the financial aspects, and we encourage you to let us know if you have any questions or concerns. We know that dealing with insurance regulations and the constant changes in coverage can be frustrating, and our goal is to keep things as clear and simple as possible for you."}
          </p>
        </div>

        {/* H2 Numbered Checklist Section */}
        <div className="card-custom bg-white p-8 md:p-12 shadow-md space-y-8">
          <h2 className="font-heading text-2xl md:text-3xl text-primary font-bold border-b border-primary/10 pb-3">
            {"Please Bring to Your Appointment"}
          </h2>
          
          <ol className="space-y-6 list-none pl-0">
            
            {/* Step 1 */}
            <li className="flex items-start gap-4">
              <span className="h-8 w-8 rounded-full bg-secondary/15 flex items-center justify-center text-sm font-bold text-secondary shrink-0 mt-0.5">
                {"1"}
              </span>
              <p className="text-sm md:text-base text-charcoal/85 leading-relaxed">
                {"Please complete the online "}
                <a 
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors"
                >
                  {"Patient Medical History form"}
                </a>
                {". Follow by printing off and filling out the necessary Information Sheet, HIPAA Policy Form and Review of Systems Form and bring them with you the day of your appointment. Completion of these forms prior to your visit will save you time and allow you to see the doctor more quickly on the day of your appointment."}
              </p>
            </li>

            {/* Step 2 */}
            <li className="flex items-start gap-4">
              <span className="h-8 w-8 rounded-full bg-secondary/15 flex items-center justify-center text-sm font-bold text-secondary shrink-0 mt-0.5">
                {"2"}
              </span>
              <p className="text-sm md:text-base text-charcoal/85 leading-relaxed">
                {"Your co-pay (if you have one) will need to be paid the day of your appointment, before being seen."}
              </p>
            </li>

            {/* Step 3 */}
            <li className="flex items-start gap-4">
              <span className="h-8 w-8 rounded-full bg-secondary/15 flex items-center justify-center text-sm font-bold text-secondary shrink-0 mt-0.5">
                {"3"}
              </span>
              <p className="text-sm md:text-base text-charcoal/85 leading-relaxed">
                {"Any office fees that apply to your deductible will need to be paid the day of your appointment as well."}
              </p>
            </li>

            {/* Step 4 */}
            <li className="flex items-start gap-4">
              <span className="h-8 w-8 rounded-full bg-secondary/15 flex items-center justify-center text-sm font-bold text-secondary shrink-0 mt-0.5">
                {"4"}
              </span>
              <p className="text-sm md:text-base text-charcoal/85 leading-relaxed">
                {"If your insurance requires a referral, please obtain this prior to your visit."}
              </p>
            </li>

            {/* Step 5 */}
            <li className="flex items-start gap-4">
              <span className="h-8 w-8 rounded-full bg-secondary/15 flex items-center justify-center text-sm font-bold text-secondary shrink-0 mt-0.5">
                {"5"}
              </span>
              <p className="text-sm md:text-base text-charcoal/85 leading-relaxed">
                {"If we do not participate with your insurance, payment in full will be necessary on the day of your appointment. As a courtesy to you, we will be glad to file with your insurance for reimbursement."}
              </p>
            </li>

            {/* Step 6 */}
            <li className="flex items-start gap-4">
              <span className="h-8 w-8 rounded-full bg-secondary/15 flex items-center justify-center text-sm font-bold text-secondary shrink-0 mt-0.5">
                {"6"}
              </span>
              <p className="text-sm md:text-base text-charcoal/85 leading-relaxed">
                {"If you have no insurance coverage, we ask that you pay in full at the time of your appointment. For your convenience, WomanCare accepts both Visa® and MasterCard®."}
              </p>
            </li>

          </ol>
        </div>

        {/* Centered Medical History Form Button */}
        <div className="text-center py-4">
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-base shadow-md hover:bg-primary/95 text-white inline-flex"
          >
            {"Patient Medical History Form"}
          </a>
        </div>

        {/* Closing Block with Signatures */}
        <div className="card-custom bg-white p-8 md:p-12 shadow-md space-y-10">
          <div className="space-y-6 text-charcoal/85 leading-relaxed text-sm md:text-base font-light">
            <p>
              {"If you have any questions at all regarding billing or insurance, please feel free to call us at "}
              <a href="tel:8122802134" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                {"(812) 280-2134"}
              </a>
              {" or "}
              <a href="tel:8122826114" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
                {"(812) 282-6114"}
              </a>
              {". If you need to cancel or reschedule your appointment, please call and give us 24 hours notice, so that we may see other patients who need care."}
            </p>
            <p>
              {"Again, we're excited that you have chosen WomanCare. We are committed to providing you with warm and professional care, and we look forward to serving you for many years to come."}
            </p>
          </div>

          {/* Letter closing signature block */}
          <div className="pt-8 border-t border-cream/55 font-heading text-sm md:text-base text-charcoal/90 space-y-4">
            <p className="italic">{"Sincerely,"}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 font-medium">
              <div>{"Christopher S. Grady, MD"}</div>
              <div>{"Ronald L. Wright, MD"}</div>
              <div>{"Amanda S. Davenport, MD"}</div>
              <div>{"Elizabeth Bary Quinkert, RN, CNM"}</div>
              <div>{"Alison Reid, RN, CNM"}</div>
              <div>{"Jennifer Hayes, APRN, CNM, CLC, SANE"}</div>
              <div>{"Rebekah Shirrell, APRN, CNM"}</div>
              <div>{"Jamie Stefanski, APRN, MSN, CNM"}</div>
              <div className="sm:col-span-2">{"Chelsae Nugent, APRN, WHNP-BC"}</div>
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
