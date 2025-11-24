"use client";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import React, { useState } from "react";
import Image from "next/image";
import Span from "@/components/Span";

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  briefing?: string;
};

const services: Service[] = [
  {
    slug: "test-preparation",
    title: "Test Preparation",
    briefing: "TOEFL, OET, IELTS, GRE, GMAT, SAT and PTE.",
    image: "/services/test-preparation.jpeg",
    description:
      "Excel in TOEFL, OET, IELTS, GRE, GMAT, SAT and PTE with Skill Up Study Abroad Agency — your trusted partner for global success. Our expert trainers, personalized preparation plans, and interactive sessions help you master language skills and test strategies with confidence. Whether your goal is to study, work, or settle abroad, Skill Up ensures you achieve your target scores and unlock international opportunities with ease.",
  },
  {
    slug: "study-abroad-counselling",
    title: "Study Abroad Counselling",
    briefing: "Personal Guidance for Global Study",
    image: "/services/study-abroad.jpg",
    description:
      "Study abroad counselling provides you with personalized guidance to select the right program and university for your global education journey, making the overwhelming process much clearer and more manageable. Expert counsellors help assess your academic interests, strengths, and career aspirations, ensuring every decision aligns with your future goals and maximizes your potential. With professional advice on applications, scholarships, visas, and adapting to a new culture, you can confidently take every step towards international academic success.",
  },
  {
    slug: "course-guidance",
    title: "Course Guidance",
    briefing: "Guidance For The Right Course",
    image: "/services/course.jpg",
    description:
      "Course guidance is essential for students planning to study abroad, as it provides expert support in identifying programs that perfectly suit academic and professional aspirations. Skilled counsellors help shortlist the best-fit courses and institutions, while offering valuable advice on securing scholarships and financial aid to make global education affordable. This comprehensive guidance ensures every step—from choosing a major to winning scholarship opportunities—is aligned with your goals, making your study abroad journey rewarding and successful.",
  },
  {
    slug: "application-processing",
    title: "University/College Application Processing",
    briefing: "Expert Guidance For Applications",
    image: "/services/university.jpeg",
    description:
      "Skill Up Study Abroad Agency provides expert guidance throughout the entire university or college application process, ensuring every detail is managed efficiently and accurately. From choosing institutions to preparing and submitting documents, our step-by-step support limits errors and delays, giving you peace of mind and a smoother transition into higher education abroad. This dedicated approach helps you meet deadlines, pass interviews, and fulfill all requirements—making your admission experience seamless and successful.",
  },
  {
    slug: "visa-support",
    title: "Visa Support",
    briefing: "Complete Student Visa Help",
    image: "/services/visa.jpg",
    description:
      "Get dedicated assistance throughout your visa application with leading student visa consultants in Mumbai, ensuring each step—from meticulous document preparation to expert interview coaching—is handled with precision. With up-to-date advice on requirements, personal guidance on form submissions, and full support for embassy appointments, these consultants streamline your journey and help remove the stress from the visa process. Trusting skilled professionals means your application is accurate, timely, and stands the best chance of approval, setting you up for a smooth, worry-free start to your global education adventure.",
  },
  {
    slug: "scholarship-guidance",
    title: "Scholarship Guidance",
    briefing: "Find Your Scholarship Fit",
    image: "/services/scholarship.jpg",
    description:
      "Our experts at Skill Up Study Abroad Agency provide dedicated support in checking your eligibility and applying for the best scholarships, making your journey to international education more affordable. By leveraging our extensive experience in study abroad visa and admission services for Indian students, we help you navigate complex funding options and guide you through every application step. This professional assistance gives you the confidence to secure financial aid, reduce costs, and focus on achieving your academic dreams at leading global institutions.",
  },
  {
    slug: "pre-departure-help",
    title: "Pre-Departure Help",
    briefing: "Essential Help Before Departure",
    image: "/services/pre-departure.jpg",
    description:
      "Benefit from informative pre-departure briefing sessions with Skill Up Study Abroad Agency, specially designed to prepare you for your overseas study adventure. Our expert team equips you with up-to-date information about travel, cultural adaptation, accommodation, safety, and essential steps—so you start your international journey confidently and well-prepared. These sessions cover everything from packing tips to local customs and emergency contacts, ensuring you transition smoothly and make the most of your global education experience. ",
  },
  {
    slug: "language-support",
    title: "Languages",
    briefing: "Spoken English, French & German",
    image: "/services/languages.jpeg",
    description:
      "Skill Up Study Abroad Agency offers language programs for students interested in learning or improving their skills in spoken English, French, and German. With expert guidance, we facilitate access to quality language courses that enhance communication proficiency, opening doors for study and career opportunities abroad. Our tailored approach ensures students develop strong language skills supported by practical learning experiences.",
  },
  {
    slug: "accommodation",
    title: "Accommodation",
    briefing: "Seamless Housing Abroad",
    image: "/services/accomodation.jpg",
    description:
      "Skill Up ensures seamless accommodation arrangements tailored to your needs while you study abroad. Whether you prefer homestays, shared apartments, or university dormitories, we connect you with safe, comfortable, and convenient housing options. Our dedicated support team assists with location selection, budgeting, and settling-in services to make your new environment welcoming and stress-free, allowing you to focus fully on your academic and cultural experience.",
  },
  {
    slug: "loan",
    title: "Loan",
    briefing: "Flexible Study Abroad Loans",
    image: "/services/loan.jpg",
    description:
      "Skill Up offers flexible loan arrangements to help students fund their studies abroad seamlessly. Our partnerships with banks and financial institutions assist in securing education loans that cover tuition fees, accommodation, travel, and living expenses. Whether you need unsecured loans with quick approval or collateral-based higher loans, we guide you through the application process, negotiate better terms, and ensure you get the financial support needed to focus entirely on your educational journey.",
  },
];

const Services: React.FC = () => {
  const tabLabels = services.map((s) => ({ title: s.title, slug: s.slug }));
  const [activeTab, setActiveTab] = useState(tabLabels[0]?.slug || "");

  const handleTabClick = (slug: string) => {
    setActiveTab(slug);
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Section>
        <div className="pt-10 sm:pt-20">
          {/* Tabs */}
          <div className="w-full block mb-10 overflow-x-auto touch-pan-x scroll-smooth scrollbar-thin ">
            <div className="flex rounded-md mb-2 whitespace-nowrap w-max">
              {tabLabels.map((tab) => (
                <button
                  key={tab.slug}
                  className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none text-base
          ${activeTab === tab.slug
                      ? "bg-(--orange) shadow text-(--teal)"
                      : " text-(--teal) hover:text-(--orange)"}
        `}
                  onClick={() => handleTabClick(tab.slug)}
                >
                  <Span>{tab.title}</Span>
                </button>
              ))}
            </div>
          </div>


          <div className="bg-(--orange)/10 rounded-md px-4 sm:px-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                id={service.slug}
                className="service-section flex flex-col lg:flex-row border-b border-(--teal)/20 py-6 sm:py-10 gap-2 lg:gap-6"
              >
                <div className="lg:w-2/8 xl:w-1/5 flex items-start">
                  <Heading
                    level={6}
                    className="mb-2 font-bold uppercase text-(--teal)"
                  >
                    {service.briefing}
                  </Heading>
                </div>
                <div className="lg:w-5/7 xl:w-4/5 flex flex-col sm:flex-row gap-6 justify-center">
                  <div className="w-full md:w-50 xl:w-80 h-52 shrink-0 mt-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={500}
                      className="w-full h-full rounded object-cover"
                    />
                  </div>

                  <div className="">
                    <Paragraph size="xl" className="font-semibold">
                      {service.title}
                    </Paragraph>
                    <Paragraph size="base" className="text-justify mt-2">
                      {service.description}
                    </Paragraph>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
