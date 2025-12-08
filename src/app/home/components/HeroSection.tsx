"use client";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import { MdArrowOutward, MdOutlineWhatsapp } from "react-icons/md";
import React, { useContext } from "react";
import { EnquiryFormContext } from "@/app/ClientLayout";
import AnimatedButton from "@/components/AnimatedButton";
import PopupForm from "@/components/PopupForm";
import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

const heroButtons = [
  {
    children: "Free Consultation",
    icon: <MdArrowOutward />,
    bgColor: "bg-(--white)",
    textColor: "text-(--white)",
    hoverTextColor: "group-hover:text-(--teal)",
    skewColor: "bg-(--teal)",
    onClick: undefined,
  },
  // {
  //   children: "Chat with Us",
  //   icon: <MdOutlineWhatsapp />,
  //   bgColor: "bg-(--white)",
  //   textColor: "text-(--white)",
  //   hoverTextColor: "group-hover:text-(--teal)",
  //   skewColor: "bg-(--teal)",
  // },
  // {
  //   children: "Brochure",
  //   icon: <MdArrowOutward />,
  //   bgColor: "bg-(--white)",
  //   textColor: "text-(--white)",
  //   hoverTextColor: "group-hover:text-(--teal)",
  //   skewColor: "bg-(--teal)",
  // },
];

const slides = [
  {
    img: "/home/slider1.jpg",
    title: "Skill Up Study Abroad Mumbai",
    heading1: "Shape your future",
    heading2: "with a global degree",
    paragraph:
      "From university selection to visa approval — we guide you every step of the way.",
    buttonText: "Book free consultation",
  },
  {
    img: "/home/slider4.jpeg",
    title: "Skill Up Study Abroad",
    heading1: "Master your test.",
    heading2: "Unlock your future.",
    paragraph: "Join result-driven test prep programs designed to help you excel in global exams.",
    buttonText: "Book a free demo",
  },
  {
    img: "/home/slider3.jpeg",
    title: "Skill Up Study Abroad Mumbai",
    heading1: "Master languages.",
    heading2: "Unlock new opportunities.",
    paragraph: "Upgrade your language skills for study, work, and life abroad.",
    buttonText: "Book Free Trial Class",
  },
];

const HeroSection: React.FC = () => {
  const enquiryFormContext = useContext(EnquiryFormContext);
  const setShowEnquiryForm = enquiryFormContext?.setShowEnquiryForm;
  const heroButtonsWithClick = heroButtons.map((btn) => {
    if (btn.children === "Free Consultation" && setShowEnquiryForm) {
      return { ...btn, onClick: () => setShowEnquiryForm(true) };
    }
    if (btn.children === "Chat with Us") {
      return {
        ...btn,
        onClick: () => window.open("https://wa.me/99304 94883", "_blank"),
      };
    }
    return btn;
  });

  return (
    <section
      className="relative h-[65vh] sm:h-[calc(90vh-80px)] w-full mb-20"
      aria-label="Hero"
    >
      <Swiper
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        grabCursor={true}
        effect="fade"
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="absolute inset-0">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100vw"
                quality={80}
                priority
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black/70"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-10 flex h-full items-end sm:items-center justify-center pb-12 sm:pb-0">
              <Section className="text-left text-(--white) w-full ">
                <div className="max-w-lg lg:max-w-2xl">
                  {/* <Paragraph
                    size="lg"
                    className="font-bold leading-tight uppercase"
                  >
                    {slide.title}
                  </Paragraph> */}
                  <Heading level={4} className="font-bold leading-tight mt-4">
                    <span className="bg-(--teal) px-1.5 pb-1.5">{slide.heading1}</span> -{" "}
                    {slide.heading2}
                  </Heading>
                  <Paragraph size="lg" className="mt-4 text-(--white)/70">
                    {slide.paragraph}
                  </Paragraph>
                  <div className="my-6 gap-4 hidden sm:flex">
                    <AnimatedButton
                      bgColor="bg-(--white)"
                      textColor="text-(--white)"
                      hoverTextColor="group-hover:text-(--teal)"
                      skewColor="bg-(--orange)"
                      icon={<MdArrowOutward />}
                      className="px-4 py-3"
                      onClick={setShowEnquiryForm ? () => setShowEnquiryForm(true) : undefined}
                    >
                      {slide.buttonText}
                    </AnimatedButton>
                  </div>
                </div>
              </Section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="absolute max-w-72 sm:max-w-72 lg:max-w-xs z-50 bg-(--white)/10 backdrop-blur-md bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-auto w-full px-8 py-8 rounded-md border border-(--white)/10 shadow-lg">
        <div className="flex  flex-col gap-4 sm:flex-row justify-evenly z-50">
          {heroButtonsWithClick.map((btn, idx) => (
            <AnimatedButton
              key={idx}
              bgColor={btn.bgColor}
              textColor={btn.textColor}
              hoverTextColor={btn.hoverTextColor}
              skewColor={btn.skewColor}
              icon={btn.icon}
              className="px-4 py-3"
              onClick={btn.onClick}
            >
              {btn.children}
            </AnimatedButton>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
