"use client";

import Link from "next/link";
import Image from "next/image";

interface Provider {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

const physiciansAndNP: Provider[] = [
  {
    id: "grady",
    name: "Christopher S. Grady, MD",
    role: "Attending Physician, OB/GYN",
    bio: "A native of the Louisville area, Dr. Grady received his undergraduate degree from Translyvania University, then graduated from the University of Louisville Medical School, followed by an OB/GYN residency at the Medical College of Georgia. He provides care for women of all ages, including general and high-risk obstetrics and a wide range of gynecological care. He has three boys and is a member of the Southern Indiana Chamber of Commerce and Northside Christian Church.",
    photo: "/images/provider-grady.jpg"
  },
  {
    id: "wright",
    name: "Ronald L. Wright, MD",
    role: "Attending Physician, OB/GYN",
    bio: "Originally from Muskegon, Michigan, Dr. Wright received his BA from Tulane University, then went on to graduate from the University of Louisville Medical School. From there, Dr. Wright completed his OB/GYN residency at the University of Texas Southwestern Medical School. From general and high-risk obstetrics to incontinence and infertility including laparoscopy, Dr. Wright provides complete care to women of all ages. He and his wife Jennifer have two children. Dr. Wright volunteers at Woman's Choice Resource Center and is a member of Southeast Christian Church.",
    photo: "/images/provider-wright.jpg"
  },
  {
    id: "davenport",
    name: "Amanda Davenport, MD",
    role: "Attending Physician, OB/GYN",
    bio: "Dr. Davenport completed her undergraduate studies at Vanderbilt University, then went on to earn her Doctor of Medicine (M.D.) from the University of Louisville Medical School. She completed her OB/GYN Residency at Cleveland Clinic and MetroHealth Medical Center where she received the Award for Excellence in Female Pelvic Medicine and Reconstructive Surgery from the American Urogynecology Society for her research and surgical skills. From general and high-risk obstetrics to incontinence and infertility including laparoscopy, Dr. Davenport provides complete care to women of all ages. Her scope of practice includes vaginal deliveries, VBACs, and cesarean sections. Dr. Davenport is originally from Kentucky and is proud to be back home to serve the women of Kentuckiana.",
    photo: "/images/provider-davenport.jpg"
  },
  {
    id: "yannetti",
    name: "Melissa Yannetti, DO",
    role: "Attending Physician, OB/GYN",
    bio: "Dr. Yannetti grew up on Long Island, New York and completed her B.S. at Stony Brook University before moving to the midwest to complete medical school at Marian University in Indianapolis. She then completed her OB/GYN residency at Michigan State University McLaren Greater Lansing Hospital which included training in robotic-assisted gynecologic surgery. Dr. Yannetti is interested in providing a full scope of care to women of all ages including general and high-risk obstetrics as well as minimally invasive gynecologic surgery. In her free time she enjoys running races, reading, and spending time with her husband, newborn daughter, and two pitbulls.",
    photo: "/images/provider-yannetti.jpg"
  },
  {
    id: "nugent",
    name: "Chelsae Nugent, APRN, WHNP-BC",
    role: "Women's Health Nurse Practitioner",
    bio: "Chelsae, a Louisville native, is a Women's Health Nurse Practitioner with advanced education and clinical training who provides a wide range of obstetrics and gynecology health services for women. She is able to diagnose and manage common as well as complex conditions, in conjunction with WomanCare's physicians, to provide coordinated and comprehensive care for patients. She is available for OB/GYN appointments and consultation and is also qualified to offer gestational diabetes education. She received her BSN from Bellarmine University and received her MSN with a specialized focus in women's health from the University of Cincinnati College of Nursing.",
    photo: "/images/provider-nugent.jpg"
  }
];

const midwives: Provider[] = [
  {
    id: "quinkert",
    name: "Elizabeth Quinkert, RN, CNM",
    role: "Certified Nurse-Midwife",
    bio: "As the region's most experienced Certified Nurse-Midwife, Elizabeth specializes in natural childbirth, deliveries and fertility counseling. She also provides care for well women, annual exams, preconceptual counseling, contraceptive services and prenatal care. In August of 2017, Elizabeth delivered her 4,000th baby! Elizabeth received her RN and BSN degrees from Indiana University Southeast, and earned her MSN and CNM designations from the University of Kentucky. She is a Member of the American College of Nurse-Midwives, a presenter at area high schools on topics such as birth control, pregnancy, breastfeeding and STD prevention. A native of Harrison County who served as an Army Nurse at Fort Campbell, Kentucky, she has four children and four grandchildren.",
    photo: "/images/provider-quinkert.jpg"
  },
  {
    id: "reid",
    name: "Alison Reid, RN, CNM, CLC",
    role: "Certified Nurse-Midwife, Certified Lactation Counselor",
    bio: "As a Certified Nurse-Midwife, Alison specializes in natural childbirth, deliveries and fertility counseling. She also provides care for well women, annual exams, preconceptual counseling, contraceptive services and prenatal care. Alison received her RN and BSN degrees from Indiana University Southeast, and earned her MSN and CNM designations from the Frontier School of Midwifery and Family Nursing. Prior to earning her Certified Nurse Midwife designation, Alison worked for many years as an RN at Clark Memorial Hospital, where she provided prenatal, antepartum and intrapartal care to expectant mothers, and postnatal care to mothers and infants, and also served as Relief Charge Nurse. She is a Member of the American College of Nurse-Midwives.",
    photo: "/images/provider-reid.jpg"
  },
  {
    id: "hayes",
    name: "Jennifer Hayes, APRN, CNM, CLC, SANE",
    role: "Advanced Practice Nurse Practitioner, CNM, CLC, SANE",
    bio: "Jennifer specializes in caring for women and newborns, with a career lovingly built on providing compassionate care for both. She graduated with her bachelors degree in Nursing from Indiana University Southeast, and earned her Certified Nurse Midwife certification from the University of Indianapolis. As a Certified Lactation Counselor® she has demonstrated the necessary skills, knowledge, and attitudes to provide clinical breastfeeding counseling and management support to women who are thinking about breastfeeding or have questions or problems concerning breastfeeding/lactation. Prior to joining WomanCare she worked in the Family Birth Place at Clark Memorial Hospital in the labor and delivery and postpartum unit. She also worked for the University of Louisville Hospital caring for women who were victims of sexual assault and domestic violence. She is a member of the American College of Nurse-Midwives.",
    photo: "/images/provider-hayes.jpg"
  },
  {
    id: "shirrell",
    name: "Rebekah Shirrell, APRN, CNM",
    role: "Certified Nurse-Midwife",
    bio: "As a Certified Nurse-Midwife, Rebekah specializes in natural childbirth, deliveries and fertility counseling. She also provides care for well women, annual exams, preconceptual counseling, contraceptive services and prenatal care. Rebekah earned her RN and BSN degrees from Bellarmine University in Louisville, and her MSN and CNM designations from the University of Cincinnati. Prior to joining WomanCare, Rebekah worked for many years in the Family Birth Place and Women's Care Place at Clark Memorial Hospital, was a High-Risk OB Case Manager for Passport Health Plan; and a Clinical Instructor at Bellarmine University. She is a Member of the American College of Nurse-Midwives.",
    photo: "/images/provider-shirrell.jpg"
  },
  {
    id: "stefanski",
    name: "Jamie Stefanski, APRN, MSN, CNM",
    role: "Certified Nurse-Midwife",
    bio: "Jamie earned her Bachelors in Nursing and MSN in Midwifery from the University of Cincinnati. She worked for many years as an RN in both labor & delivery and critical care before returning to school to become a Midwife. Prior to joining WomanCare, Jamie worked for the TriHealth Nurse Midwives in Cincinnati. She is a member of the American College of Nurse Midwives. As a Certified Nurse Midwife and Advanced Practice Nurse Practitioner, Jamie takes pride in providing high quality, evidenced-based care to women throughout their life span. She values diversity and inclusivity and strives to partner with patients and families to help them reach their goals.",
    photo: "/images/provider-stefanski.jpg"
  },
  {
    id: "cubbage",
    name: "Sarah Cubbage, APRN, CNM",
    role: "Certified Nurse-Midwife",
    bio: "Whether coaching women to achieve their birth goals, providing holistic evidenced based care, or watching the miracle of families being born, Sarah is a passionate woman's care advocate. She is available for OB/GYN appointments, annual exams, pre-conceptual and fertility counseling, contraceptive services, gestational diabetes education, prenatal care, natural childbirth and deliveries. Sarah received her Bachelors in Nursing from Ohio University and earned her Master's in Certified Nurse Midwife from Frontier Nursing University. Prior to joining Woman Care, she worked for many years as a labor and delivery nurse at Clark Memorial Hospital and at the Tree of Life Family Birth Center. Sarah was also a clinical instructor for Bellarmine University and is a Member of the American College of Nurse-Midwives.",
    photo: "/images/provider-cubbage.jpg"
  },
  {
    id: "valdes-bencomo",
    name: "Ana Valdes Bencomo, APRN, CNM, C-EFM",
    role: "Certified Nurse-Midwife",
    bio: "As a certified nurse midwife, Ana specializes in providing safe, compassionate care to women throughout all stages of life — from adolescence, pregnancy and childbirth through menopause. She graduated with a Bachelor of Science in Nursing from the University of Louisville and later earned a Master of Science in Midwifery at Frontier Nursing University. Before starting her career as a midwife, she worked as labor and delivery/antepartum nurse for five years at Norton Women's and Children's Hospital. She has served as adjunct clinical faculty in maternal-newborn health at Galen College of Nursing. She also speaks Spanish, which allows her to better connect and care for a more diverse patient population. During her free time, she enjoys reading, discovering new places and spending time with family and friends.",
    photo: "/images/provider-valdes-bencomo.jpg"
  },
  {
    id: "wheeler",
    name: "Emily Wheeler, MSN, APRN, CNM",
    role: "Certified Nurse-Midwife",
    bio: "Emily Wheeler earned a bachelors RN in 2019 from Morehead State University and a masters in midwifery from Frontier Nursing University in May of 2024. She provides full midwifery care across hospital and birth center settings. She specializes in routine gynecologic care, birth control, prenatal and postpartum care, first assist in c-section births and newborn circumcisions. She is excited about welcoming you into an environment where you feel heard, respected, and empowered every step of the way.",
    photo: "/images/provider-wheeler.jpg"
  }
];

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div 
      id={provider.id} 
      className="card-custom bg-white flex flex-col h-full border border-cream/55 hover:border-primary/20 transition-all duration-300 scroll-mt-28"
    >
      <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden mb-6 bg-cream">
        <Image
          src={provider.photo}
          alt={`Portrait of ${provider.name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-xl text-primary font-bold mb-1">
            {provider.name}
          </h3>
          <span className="inline-block bg-secondary/15 text-secondary text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
            {provider.role}
          </span>
          <p className="text-sm text-charcoal/80 leading-relaxed font-light">
            {provider.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProvidersPage() {
  return (
    <div className="flex-grow bg-cream">
      
      {/* Page Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center bg-charcoal plum-overlay">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ 
            backgroundImage: "url('/images/providers.jpg')", 
            backgroundColor: "#2B2320" 
          }}
          aria-label="WomanCare clinical care providers team portrait"
        />
        <div className="plum-overlay-content relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">
            {"Meet Our Providers"}
          </h1>
          <p className="text-cream/90 text-base md:text-lg max-w-2xl mx-auto font-light">
            {"Physicians, nurse-midwives and providers who make time to answer every question and address every concern."}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white border-b border-cream">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-6 text-charcoal/80 text-base md:text-lg leading-relaxed font-light">
          <p>
            {"At WomanCare, our providers are focused on providing you with the best possible experience. In a world where we seldom receive the attention we expect, our physicians, "}
            <Link href="/midwives-natural-birth" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
              nurse-midwives
            </Link>
            {" and providers make time to answer every question and address every concern."}
          </p>
          <p>
            {"We know that your health, especially when it comes to pregnancy and "}
            <Link href="/prenatal-care-delivery" className="font-semibold text-primary underline underline-offset-4 decoration-primary/45 hover:decoration-primary transition-colors">
              delivery
            </Link>
            {", is of utmost concern to you, and we want you to know that your well-being and peace of mind is our top priority."}
          </p>
          <p>
            {"We think you'll find that WomanCare is a very different kind of practice, one where the needs of the patient always come first. We sincerely enjoy providing the best possible care for women, and it shows in everything we do."}
          </p>
          <p>
            {"We invite you to raise your expectations, and to have confidence in your relationship with your doctor. Everything we do is focused on that single goal. It's our pleasure to serve you. We encourage you to find out more about our physicians and nurse-midwives below."}
          </p>
        </div>
      </section>

      {/* Provider List Sections */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: Physicians & Nurse Practitioner */}
        <div className="space-y-8">
          <h2 className="font-heading text-3xl text-primary font-bold border-b border-primary/10 pb-4 text-center lg:text-left">
            {"Physicians & Nurse Practitioner"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {physiciansAndNP.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </div>

        {/* Section 2: Certified Nurse-Midwives */}
        <div className="space-y-8 pt-12">
          <h2 className="font-heading text-3xl text-primary font-bold border-b border-primary/10 pb-4 text-center lg:text-left">
            {"Certified Nurse-Midwives"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {midwives.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
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
