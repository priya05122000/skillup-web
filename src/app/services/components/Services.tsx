import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import React from "react";
import Image from "next/image";

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
    image: "/services/test-preparation.png",
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
    image: "/services/university.png",
    description: "Skill Up Study Abroad Agency provides expert guidance throughout the entire university or college application process, ensuring every detail is managed efficiently and accurately. From choosing institutions to preparing and submitting documents, our step-by-step support limits errors and delays, giving you peace of mind and a smoother transition into higher education abroad. This dedicated approach helps you meet deadlines, pass interviews, and fulfill all requirements—making your admission experience seamless and successful.",
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
    image: "/services/languages.png",
    description:
      "Skill Up Study Abroad Agency offers language programs for students interested in learning or improving their skills in spoken English, French, and German. With expert guidance, we facilitate access to quality language courses that enhance communication proficiency, opening doors for study and career opportunities abroad. Our tailored approach ensures students develop strong language skills supported by practical learning experiences.",
  },
];

const Services: React.FC = () => {
  return (
    <div>
      <Section>
        <div className="pt-10 sm:pt-20">
          <div className="bg-(--orange)/10 rounded-md p-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                id={service.slug}
                className="service-section grid grid-cols-1 md:grid-cols-6 border-b border-(--teal)/20 py-10 gap-6"
              >
                <div className="md:col-span-1 flex items-start">
                  <Heading
                    level={6}
                    className="mb-2 font-bold uppercase text-(--teal)"
                  >
                    {service.briefing}
                  </Heading>
                </div>

                <div className="md:col-span-2 flex justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="w-80 h-52 mb-4 rounded object-cover"
                  />
                </div>

                <div className="md:col-span-3">
                  <Paragraph size="xl" className="font-semibold">
                    {service.title}
                  </Paragraph>
                  <Paragraph size="base" className="text-justify mt-2">
                    {service.description}
                  </Paragraph>
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
