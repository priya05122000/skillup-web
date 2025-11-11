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
import { motion } from "framer-motion";
import Image from "next/image";
import Span from "@/components/Span";

const programs = [
  {
    id: 1,
    title: "Arts In Communication",
    image: "/about-us/course1.png",
    lessons: "10 lessons",
    students: "300 students",
  },
  {
    id: 2,
    title: "Computer Science - CS",
    image: "/about-us/course2.png",
    lessons: "8 lessons",
    students: "450 students",
  },
  {
    id: 3,
    title: "Graduate Programs",
    image: "/about-us/course3.png",
    lessons: "12 lessons",
    students: "200 students",
  },
  {
    id: 4,
    title: "Welcome Programs",
    image: "/about-us/course4.png",
    lessons: "5 lessons",
    students: "200 students",
  },
  {
    id: 5,
    title: "Final Programs",
    image: "/about-us/course5.png",
    lessons: "15 lessons",
    students: "200 students",
  },
];

const ExploreProgramsSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="w-full py-8 md:py-16 relative overflow-hidden">
      <Section>
        <div className="mb-6 sm:mb-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <Paragraph size="lg" className="italic text-(--ice-gray) mb-2">
              Our Academics Offerings
            </Paragraph>
            <Heading level={4}>Explore Our Programs</Heading>
          </div>

          <div className="flex justify-end gap-3 mt-2 md:mt-0">
            <button
              className="bg-(--teal) hover:bg-(--teal) text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-90 transition cursor-pointer"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              className="bg-(--teal) hover:bg-(--teal) text-white w-10 h-10 flex items-center justify-center rounded-full hover:opacity-90 transition cursor-pointer"
              onClick={handleNext}
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Section>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, centeredSlides: false },
          1024: { slidesPerView: 3, centeredSlides: true },
        }}
        className="pb-10"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {programs.map((program) => (
          <SwiperSlide key={program.id}>
            {({ isActive }) => (
              <div
                className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  height={1000}
                  width={1000}
                  className="w-full h-[350px] object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-5 right-5 text-(--white) flex justify-between items-end">
                  {isActive ? (
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
                          className="bg-(--white) text-(--black) rounded-full p-2 shadow hover:scale-110 transition w-10 h-10 cursor-pointer"
                        >
                          <ArrowRight />
                        </motion.button>
                      </div>
                    </motion.div>
                  ) : (
                    <Heading
                      level={6}
                      className="text-(--white) font-semibold mb-2 w-full"
                    >
                      {program.title}
                    </Heading>
                  )}
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ExploreProgramsSection;
