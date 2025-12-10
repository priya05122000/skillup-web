"use client";

import React, { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { BookOpen, Users, ArrowRight, ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Section from "@/components/Section";
import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading";
// import { motion } from "framer-motion";
import Image from "next/image";
// import Span from "@/components/Span";

type Program = {
  id: number;
  title: string;
  image: string;
  lessons: string;
  students: string;
};

const programs: Program[] = [
  {
    id: 1,
    title: "Proven Global Expertise",
    image: "/about-us/global-expertise.webp",
    lessons: "10 lessons",
    students: "300 students",
  },
  {
    id: 2,
    title: "Personalized Student Guidance",
    image: "/about-us/course2.webp",
    lessons: "8 lessons",
    students: "450 students",
  },
  {
    id: 3,
    title: "Vast University Network",
    image: "/about-us/vast-university.webp",
    lessons: "12 lessons",
    students: "200 students",
  },
  {
    id: 4,
    title: "End-to-End Support",
    image: "/about-us/course4.webp",
    lessons: "5 lessons",
    students: "200 students",
  },
];

type ProgramCardProps = {
  program: Program;
  isActive: boolean;
};

const ProgramCard: React.FC<ProgramCardProps> = ({ program, isActive }) => (
  <div className="relative group overflow-hidden rounded-md shadow-md hover:shadow-lg transition-all duration-300">
    <Image
      src={program.image}
      alt={program.title}
      height={1000}
      width={1000}
      className="w-full h-70 lg:h-[300px] object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>
    <div className="absolute bottom-0 w-full h-11 md:h-16 lg:h-11  text-(--white) flex justify-between items-end backdrop-blur-md px-4 py-2 border-t border-(--white)/30 bg-(--orange)/50">
      {/* {isActive ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-between w-full"
        >
          <div>
            <Heading level={6} className="font-semibold mb-2">
              {program.title}
            </Heading>
            <div className="flex items-center gap-6 text-(--white) mb-4">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <Span>{program.lessons}</Span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <Span>{program.students}</Span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-(--teal) text-(--white) rounded-full p-2 shadow hover:scale-110 transition w-10 h-10 cursor-pointer"
            >
              <ArrowRight />
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <Heading level={6} className="text-(--white) font-semibold mb-2 w-full">
          {program.title}
        </Heading>
      )} */}
      {/* <div className="backdrop-blur-md px-2 py-1 border border-(--white)/30 bg-(--teal)/70"> */}
      <Paragraph size="base" className="text-(--white) font-semibold mb-1 w-full">
        {program.title}
      </Paragraph>
      {/* </div> */}
    </div>
  </div>
);

const ExploreProgramsSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="w-full py-10 sm:py-20 relative overflow-hidden">
      <Section>
        <div className="mb-4 md:mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-4 ">
          <div>
            <Paragraph
              size="lg"
              className="uppercase text-(--teal) font-bold leading-tight"
            >
              WHY CHOOSE OUR STUDY ABROAD CONSULTANCY
            </Paragraph>
            <Heading level={4} className="leading-tight mt-2">
              SkillUp: Your Trusted Partner in Global Education Success
            </Heading>
          </div>

          {/* <div className="flex justify-end gap-3 mt-2 md:mt-0">
            <button
              className="bg-(--orange) hover:bg-(--teal) text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-90 transition cursor-pointer"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              className="bg-(--orange) hover:bg-(--teal) text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-90 transition cursor-pointer"
              onClick={handleNext}
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div> */}
        </div>
        {/* <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div key={program.id}>
                <ProgramCard program={program} isActive={false} />
              </div>
            ))}
          </div>
        </div> */}

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          centeredSlides={false}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            500: { slidesPerView: 2, centeredSlides: false },
            768: { slidesPerView: 3, centeredSlides: false },
            1100: { slidesPerView: 4, centeredSlides: false },
          }}
          className="py-10"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {programs.map((program) => (
            // <SwiperSlide key={program.id}>
            //   {({ isActive }: { isActive: boolean }) => (
            //     <ProgramCard program={program} isActive={isActive} />
            //   )}
            // </SwiperSlide>
            <SwiperSlide key={program.id}>
              <ProgramCard program={program} isActive={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </section>
  );
};

export default ExploreProgramsSection;
