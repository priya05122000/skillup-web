"use client";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import { MdArrowOutward, MdOutlineWhatsapp } from "react-icons/md";
import React from "react";
import AnimatedButton from "@/components/AnimatedButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

const heroButtons = [
  {
    children: "Apply Now",
    icon: <MdArrowOutward />,
    bgColor: "bg-(--white)",
    textColor: "text-(--white)",
    hoverTextColor: "group-hover:text-(--teal)",
    skewColor: "bg-(--teal)",
  },
  {
    children: "Chat with Us",
    icon: <MdOutlineWhatsapp />,
    bgColor: "bg-(--white)",
    textColor: "text-(--white)",
    hoverTextColor: "group-hover:text-(--teal)",
    skewColor: "bg-(--teal)",
  },
  {
    children: "Brochure",
    icon: <MdArrowOutward />,
    bgColor: "bg-(--white)",
    textColor: "text-(--white)",
    hoverTextColor: "group-hover:text-(--teal)",
    skewColor: "bg-(--teal)",
  },
];

const slides = [
  {
    img: "/home/hero-image.jpg",
    title: "Skill Up Study Abroad Mumbai",
    heading: "Leading You to Premier Universities Across the Globe",
    paragraph:
      "Expand your future at 500+ top-rated universities and colleges worldwide.",
    buttonText: "Reserve your spot for a consultation",
  },
  {
    img: "/home/hero-image.jpg",
    title: "Skill Up Study Abroad Agency",
    heading: "Study in CANADA",
    paragraph: "Pursue your education in Canada’s world-class institutions",
    buttonText: "Book your consultation now",
  },
  {
    img: "/home/hero-image.jpg",
    title: "Skill Up Study Abroad Mumbai",
    heading: "Study in IRELAND",
    paragraph: "Choose from Ireland’s elite group of 9 leading universities.",
    buttonText: "Set up your appointment today",
  },
  {
    img: "/home/hero-image.jpg",
    title: "Skill Up Study Abroad Agency",
    heading: "Rise To The Top By Learning Smarter!",
    paragraph: "Excel in TOEFL, OET, IELTS, GRE, and PTE",
    buttonText: "Reserve your spot for a consultation",
  },
];

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen sm:h-[calc(90vh-80px)] w-full mb-20"
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
            <div className="relative z-10 flex h-full items-center justify-center">
              <Section className="text-left text-(--white) w-full ">
                <div className="max-w-lg lg:max-w-2xl">
                  <Paragraph
                    size="lg"
                    className="font-bold leading-tight uppercase"
                  >
                    {slide.title}
                  </Paragraph>
                  <Heading level={4} className="font-bold leading-tight mt-4">
                    <span className="bg-(--teal)">Skill Up Academy</span> -{" "}
                    {slide.heading}
                  </Heading>
                  <Paragraph size="lg" className="mt-4 text-(--white)/70">
                    {slide.paragraph}
                  </Paragraph>
                  <div className="my-8 flex gap-4">
                    <AnimatedButton
                      bgColor="bg-(--white)"
                      textColor="text-(--white)"
                      hoverTextColor="group-hover:text-(--teal)"
                      skewColor="bg-(--orange)"
                      icon={<MdArrowOutward />}
                      className="px-4 py-3"
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
      <div className="absolute max-w-72 sm:max-w-xl lg:max-w-2xl z-50 bg-(--white)/10 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-auto w-full px-8 py-8 rounded-md border border-(--white)/10 shadow-lg">
        <div className="flex  flex-col gap-4 sm:flex-row justify-evenly z-50">
          {heroButtons.map((btn, idx) => (
            <AnimatedButton
              key={idx}
              bgColor={btn.bgColor}
              textColor={btn.textColor}
              hoverTextColor={btn.hoverTextColor}
              skewColor={btn.skewColor}
              icon={btn.icon}
              className="px-4 py-3"
            >
              {btn.children}
            </AnimatedButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
