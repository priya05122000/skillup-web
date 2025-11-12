"use client";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";
import Span from "@/components/Span";
import { BiSolidQuoteRight } from "react-icons/bi";

// Testimonial type and data array
interface Testimonial {
  name: string;
  batch: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Marvin McKinney",
    batch: "15th Batch Students",
    image: "/home/aboutus-1.jpg",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt veritatis vitae assumenda? Quia ipsa incidunt, dolorum earum doloribus provident amet eum praesentium eveniet aperiam tempore explicabo, labore ab dolores magni rem assumenda illum rerum? Nisi, dicta veniam. Labore cumque enim odio amet cupiditate dicta sapiente explicabo, nisi eligendi hic perferendis nostrum temporibus distinctio optio quas maiores, pariatur incidunt modi doloremque! Amet iure nam ipsam consequuntur provident.",
    rating: 3,
  },
  {
    name: "Marvin McKinney",
    batch: "15th Batch Students",
    image: "/home/aboutus-1.jpg",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt veritatis vitae assumenda? Quia ipsa incidunt, dolorum earum doloribus provident amet eum praesentium eveniet aperiam tempore explicabo, labore ab dolores magni rem assumenda illum rerum? Nisi, dicta veniam. Labore cumque enim odio amet cupiditate dicta sapiente explicabo, nisi eligendi hic perferendis nostrum temporibus distinctio optio quas maiores, pariatur incidunt modi doloremque! Amet iure nam ipsam consequuntur provident.",
    rating: 3,
  },
];

const Testimonials: React.FC = () => {
  return (
    <Section className="bg-(--teal)">
      <div className="py-10 sm:py-20 " aria-label="About Us">
        <div className="h-full relative lg:pb-20">
          <div className="max-w-3xl mx-auto">
            <Heading
              level={4}
              className="font-bold leading-tight text-center text-white"
            >
              Start Your Journey With Us
            </Heading>
            <Paragraph size="lg" className="mt-4 text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum
              velit, deleniti voluptates nesciunt quam ut natus hic nobis
              consequatur nam sunt error assumenda nihil quasi aperiam dicta
              blanditiis porro.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14   mt-10 h-full">
            <div className=" flex items-center justify-center lg:justify-start xl:justify-center ">
              <div className="w-[200px] sm:w-[350px] lg:w-[300px] xl:w-[350px] h-[300px] sm:h-[450px] relative isolate">
                <div className="absolute inset-0 z-40">
                  <Image
                    src="/home/aboutus-1.jpg"
                    alt="Students high-fiving in front of university"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/3 z-50">
                  <Image
                    src="/home/aboutus-2.jpg"
                    alt="Students high-fiving in front of university"
                    width={200}
                    height={250}
                    className="object-cover w-[120px] sm:w-[200px] h-[200px] sm:h-[250px] rounded-full"
                  />
                </div>
                <div className="w-32 h-32 border-4 border-white rounded-full absolute bottom-0 left-0 -translate-1/3 sm:-translate-x-1/6 translate-y-1/3 sm:translate-y-1/6 z-0">
                  <div className="w-10 h-10 border-4 border-white rounded-full absolute bottom-1/2 left-1/2  -translate-x-1/2 translate-y-1/2 z-0"></div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col w-full items-center  mt-10 lg:mt-0 justify-center">
              <Swiper
                className="mySwiper w-full h-full sm:my-10"
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                style={{ maxWidth: "600px", maxHeight: "500px" }}
              >
                {testimonials.map((t, idx) => (
                  <SwiperSlide key={idx} className="p-6 bg-white rounded-md shadow flex flex-col gap-4 justify-between h-full">
                    <div className="flex items-center gap-3">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div className="border-l-3 border-(--orange) pl-3">
                        <Paragraph size="lg" className="font-bold ">{t.name}</Paragraph>
                        <Span>{t.batch}</Span>
                      </div>
                      <span className="ml-auto text-4xl text-black/20 font-bold select-none">
                        <BiSolidQuoteRight />
                      </span>
                    </div>
                    <hr className="my-4 opacity-10" />
                    <Paragraph size="base" className="italic">{t.text}</Paragraph>
                    <div className="flex items-center gap-1 mt-4">
                      {[...Array(5)].map((_, i) =>
                        i < t.rating ? (
                          <FaStar key={i} className="text-(--orange) text-base" />
                        ) : (
                          <FaRegStar key={i} className="text-(--orange) text-base" />
                        )
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;