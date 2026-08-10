"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is a nurse-midwife?",
      answer: (
        <div className="space-y-4">
          <p className="italic text-charcoal/70 text-xs">
            {"(Excerpt from American College of Nurse-Midwives pamphlet Certified Nurse Midwives and your GYN health)"}
          </p>
          <p>
            {"Today's CNM is a skilled health care professional who provides primary health care to women. This care includes evaluation, assessment, treatment, and referral to a specialist, if required. CNMs emphasize health promotion, education, and disease prevention. Care given by CNMs includes preconception counseling, care during pregnancy and childbirth, normal gynecological services, and care of peri and post-menopausal women."}
          </p>
          <p>
            {"With health education as a primary focus, CNMs goals are to prevent problems and to assist women in developing and maintaining good health habits. Nurse-Midwives help women during labor and delivery and are trained and experienced in prenatal, postpartum, normal newborn care and in routine gynecological care."}
          </p>
          <p>
            {"Nurse-midwifery care focuses on maintaining health and encouraging women to make informed decisions about their health care. Nurse-midwives welcome your questions and take time to listen to you and talk with you."}
          </p>
          <p>
            {"CNMs are licensed in all 50 states and certified by a national examination. They are held to the rigorous standards of practice set by the American College of Nurse-Midwives. In addition, they attend continuing education programs offered by hospitals, universities and the ACNM."}
          </p>
        </div>
      )
    },
    {
      question: "How is a nurse-midwife different than an OB/GYN?",
      answer: (
        <div className="space-y-4">
          <p>
            {"Nurse-midwives provide care to low risk women. They are trained in assessment of these women, and refer women whose care requires a higher level of expertise in the services of an OB/GYN. For pregnant women, the care of a low risk pregnancy can be independently managed by the nurse-midwife, but in the event that the status of the pregnancy changes she will consult with the OB/GYN on the appropriate management of such events. In some instances, the pregnancy may become complicated enough to exclude the nurse-midwife from the care of the woman."}
          </p>
          <p>
            {"Nurse-midwives are skilled in educating the family about maintaining a healthy lifestyle, and spend time helping the couple to develop a birth plan that encompasses the birthing options desired by the couple, while maintaining safety for the mom and baby. During labor, the nurse-midwife provides information and support, involving the family in as many of the decisions as is possible. The nurse-midwife will consult with the physician if complications arise, and assist the physician in performing a cesarean section if that is necessary."}
          </p>
        </div>
      )
    },
    {
      question: "Is the care different if I have a nurse-midwife?",
      answer: (
        <div className="space-y-4">
          <p>
            {"The care given by a nurse-midwife is guided by the same organizations that guide OB/GYN care given by physicians. Guidelines established by the American College of OB/GYN, ACOG, as well as the guidelines of the American College of Nurse-Midwives, ACNM, are followed."}
          </p>
          <p className="font-semibold text-primary">
            {"During the course of the pregnancy the midwife-patient would expect to receive testing as follows:"}
          </p>
          <div className="bg-cream/35 rounded-xl p-5 border border-cream/55 space-y-4">
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-secondary mb-1">{"1st trimester"}</span>
              <p className="text-sm">{"CBC, Blood Typing, Antibody Screen, Rubella Immunity, RPR, Hep B, urine and vaginal cultures. Optional tests include HIV testing and Cystic Fibrosis screening and AFP testing."}</p>
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-secondary mb-1">{"2nd trimester"}</span>
              <p className="text-sm">{"Ultrasound for fetal anatomy. Optional tests include the AFP testing or Quad screen."}</p>
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-secondary mb-1">{"3rd trimester"}</span>
              <p className="text-sm">{"H&H, Hep B, RPR and 1 hour glucose test."}</p>
            </div>
          </div>
          <p>
            {"Other tests may be offered as needed to include: 3 hour glucose test for failed 1 hour test, repeat ultrasounds to monitor abnormal findings, and fetal non-stress testing for fetal well being."}
          </p>
          <p>
            {"Labor management can differ slightly from that of a typical OB/GYN, however many OB/GYN practices are similar to those of nurse-midwives. We feel very comfortable with our patients delivering in the position where they can feel the most effective. Many deliver in the sitting position, as it is the position they feel most comfortable pushing in, but other options such as squatting, side-lying, and hands and knees are used on occasion."}
          </p>
          <p>
            {"Occasionally a dad will help with the delivery, and usually they will desire to cut the umbilical cord once the baby is born. Providing the infant cries just after birth and begins to become pink, we will wait a few minutes to cut the umbilical cord to allow the baby to get the optimal amount of blood from the placenta."}
          </p>
          <p>
            {"If there is a need to get the baby to the warmer for resuscitation, we will immediately have the cord clamped and cut in order to accomplish this. The baby is placed on the mom's abdomen immediately after birth, and a sterile towel and warmed blanket are placed on top in order for the parents to participate with the drying and stimulation of the baby, and to facilitate the bonding process."}
          </p>
          <p>
            {"We rarely do episiotomies, reserving that procedure for situations where the infant is in need of rapid delivery, and the maternal pushing efforts are ineffective at accomplishing that. In our minds procedures such as enemas and shaving of the perineum are a thing of the past, and do not require these things of our patients. Of course if the patient chooses to have an enema they are welcomed to do so, and can do it themselves at home, or can have the nurses perform it at the hospital."}
          </p>
          <p>
            {"We usually reserve the use of leg stirrups for patients having epidurals, but have performed many births utilizing the family members as human stirrups to assist the patient in positioning herself for the birth, and to involve them in the birth."}
          </p>
        </div>
      )
    },
    {
      question: "Do you do homebirths? Can I see you if I am planning a homebirth?",
      answer: (
        <div className="space-y-4">
          <p>
            {"We do not perform homebirths. The Indiana State Board of Nursing regulates the practice of nurse-midwives in Indiana. According to the Indiana Codes, nurse-midwives are required to have a collaborative practice agreement with a physician, outlining their scope of practice. Under this agreement, our practice is limited to providing well-women and obstetric care to low risk women, and performing births in the hospital setting. We have hospital privileges at Clark Memorial Hospital."}
          </p>
          <p>
            {"According to our malpractice carrier, we cannot provide prenatal care to women planning homebirths, as this can be construed as promoting and practicing homebirths. Once a client divulges to us that she has made plans for a homebirth, we will provide her with a copy of the prenatal records, and she will then follow with the lay midwife she has obtained for that service."}
          </p>
        </div>
      )
    },
    {
      question: "Who will deliver me? How much time will you spend with me in labor? What do you do in case of an emergency?",
      answer: (
        <div className="space-y-4">
          <p>
            {"Once a patient establishes herself with us by verbally requesting midwifery services for their birth, we will mark their chart as a 'midwife patient' so that when she comes in for labor, the nurses in Labor and Delivery will notify us. We have a physician on-call with us at all times in case of an emergency, and will respond promptly when we call for their assistance. Should the need arise for a cesarean section, we will discuss this with the patient and significant others, and we will assist the physician with the surgery. They are not required to be present at the hospital for the entire time we are there, nor to be present when our patients are delivering. When a midwife patient presents to Labor and Delivery and is evaluated by the nurses, the midwife is notified. After discussion of the patient's labor status and support system is present, a plan will be made to determine when we will arrive at the hospital."}
          </p>
        </div>
      )
    },
    {
      question: "Can I still have an epidural if I want one? What is available for assisting with natural childbirth? Do you use doulas?",
      answer: (
        <div className="space-y-4">
          <p>
            {"One of our roles in prenatal and delivery care is that of advocate for the couple. Some of our patients request epidurals for their delivery. Though we are highly skilled in assisting many clients in accomplishing their goal of a natural, non-medicated birth, we are just as supportive of patients that request an epidural. Our philosophy of birth being a normal physiologic process is not a justification for withholding medications from a patient that desires it. We will discuss the risks and benefits of the intervention with the couple, and honor their decision to alter the plan. We have attended many happy, healthy births from both medicated and non-medicated women. We ask our clients to be open to options, and flexible with their birth plans, in order to allow for alternatives should the need arise."}
          </p>
          <p>
            {"In our new family birthplace at Clark Memorial Hospital we have large, spacious labor rooms that allow the couple to have family present if desired. There is a family waiting area available in each room, as well as a waiting area down the hall. There is a shower in each room, as well as garden tubs in two of the rooms, where hydrotherapy is available for pain management. Many women enjoy the freedom of intermittent fetal monitoring, which allows the woman to be ambulatory throughout the labor, and have the baby monitored at 30 minute intervals, according to the ACOG guidelines. A large gymnastics ball, also known as a birthing ball, is available as a comfort measure, as well as a squatting bar for better positioning for the job of pushing."}
          </p>
          <p>
            {"Of course, the major asset that we have to assist in natural childbirth is our nurses, who have skill and experience in assisting couples in accomplishing their goals of a healthy mother and baby, and natural childbirth. Doulas, or labor assistants, are also welcome at our facility, and many couples choose to obtain the services of these women to provide additional support."}
          </p>
        </div>
      )
    },
    {
      question: "What are the routines for the baby in the hospital? What if I don't want the routine newborn procedures?",
      answer: (
        <div className="space-y-4">
          <p>
            {"Care of the newborn, beginning immediately after birth, is in the hands of the pediatrician and the nursery nurses. Any concerns, requests, or questions in this area are out of our hands. You may request an appointment with the pediatrician prior to delivery to discuss your concerns and requests, and have your questions answered. If you plan to have a Louisville based pediatrician care for your child, they will not have admitting privileges at an Indiana hospital, so you should contact them and get a recommendation from them for care of your newborn at Clark Memorial Hospital."}
          </p>
        </div>
      )
    },
    {
      question: "Which over-the-counter medications can I take during pregnancy?",
      answer: (
        <div className="space-y-4">
          <p>
            {"Our patients who are pregnant often want to know which over-the-counter medications are safe to take during pregnancy. The table below includes safe medications for many of the most common medical conditions. If you have questions about any of these, or about a condition that does not appear below, please feel free to call us."}
          </p>
          
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full divide-y divide-cream/40 border border-cream/55">
              <thead className="bg-cream/40">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                    {"Symptom"}
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                    {"Medication"}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-cream/40 text-xs md:text-sm text-charcoal/80">
                {[
                  ["Allergies", "Plain Claritin, Zyrtec, Benadryl"],
                  ["Belching", "Tums"],
                  ["Colds", "Sudafed, Actifed, Tylenol Cold and Sinus, Dayquil"],
                  ["Congestion", "Ocean Nasal Spray, Afrin"],
                  ["Constipation", "Metamucil, Citrucel, Milk of Magnesia, Senakot"],
                  ["Cough", "Robitussin DM, Halls Cough Drops, Mucinex (or DM)"],
                  ["Diarrhea", "Imodium AD"],
                  ["Headache", "Tylenol (regular or extra strength)"],
                  ["Heartburn", "Tums, Rolaids, Mylanta, Zantac, Pepcid"],
                  ["Hemorrhoids", "Anusol, Tucks, Anapram (Rx needed), Preparation H"],
                  ["Nausea", "Emetrol"],
                  ["Sore Throat", "Chloraseptic spray, Halls Cough Drops, Cepacol"],
                  ["Stool Softener", "Colace"],
                  ["Yeast Infection", "Monistat 3, Gyne-Lotrim"],
                ].map(([symptom, medicine], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-cream/10"}>
                    <td className="px-4 py-3 font-semibold text-primary">{symptom}</td>
                    <td className="px-4 py-3">{medicine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ 
            backgroundImage: "url('/images/faqs-hero.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="Mother resting peacefully holding her sleeping newborn baby close"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold">
            {"Frequently Asked Questions"}
          </h1>
        </div>
      </section>

      {/* Accordion List Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-cream/55 shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-primary hover:bg-cream/10 transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={`h-6 w-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[1500px] border-t border-cream/50" : "max-h-0 pointer-events-none"
                  } overflow-hidden`}
                >
                  <div className="p-6 text-charcoal/85 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
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
