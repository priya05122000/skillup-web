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
  country: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Menon",
    country: "London",
    image: "/home/aboutus-1.jpg",
    text:
      "Skill Up Study Abroad Agency provided exceptional guidance throughout my admission and visa process. Their expert team answered every query quickly, going above and beyond to support me at each step. From the initial counseling to landing in the UK, their dedication turned my dream into reality. Thanks to Skill Up, studying in the UK became a truly memorable journey.",
    rating: 5,
  },
  {
    name: "Varun Patel",
    country: "Canada",
    image: "/home/aboutus-1.jpg",
    text:
      "I received outstanding guidance from the Skill Up Study Abroad Agency when applying to Canadian universities and for scholarships. Their team made the entire journey from Mumbai to Canada effortless and stress-free. Every step, from course selection to visa, was handled with care and expertise. Thanks to their support, my transition was smooth, allowing me to focus on building my future in Canada.",
    rating: 5,
  },
  {
    name: "Riya Jain",
    country: "Australia",
    image: "/home/aboutus-1.jpg",
    text:
      "Skill Up Study Abroad Agency made my entire study abroad process seamless, from picking the right course to securing my visa. Their detailed approach and quick communication gave me confidence at every step. The team genuinely cared about my future and always offered honest guidance. I’m truly grateful for their expertise and the personal attention they provided throughout my journey.",
    rating: 5,
  },
  {
    name: "Aarav Singh",
    country: "Germany",
    image: "/home/aboutus-1.jpg",
    text:
      "Skill Up’s counseling made choosing the right study program effortless and took the stress out of application paperwork. Their team’s honesty and transparency created a sense of security for both me and my family. I could always trust their advice, and every recommendation felt tailored to my goals. With their reliable support, we confidently embarked on my overseas education journey.",
    rating: 5,
  },
  {
    name: "Sana Ahmed",
    country: "India",
    image: "/home/aboutus-1.jpg",
    text:
      "The entire application process became simple and smooth with Skill Up handling my university submissions. Through each stage, Skill Up kept me updated and promptly informed about my application status. Even during stressful waits for admission, their team members offered uplifting advice and reassurance. Because of their encouragement and commitment, it helped me stay positive and focused on my study abroad goals.",
    rating: 5,
  },
  {
    name: "Deepak Kumar",
    country: "Ireland",
    image: "/home/aboutus-1.jpg",
    text:
      "Admission and travel arrangements were smooth and effortless, thanks to Skill Up’s organized process. Their team’s prompt communication made a genuine difference every step of the way with Skill Up. Professionalism was clear in every interaction and advice, providing enormous confidence. From start to finish, every detail was handled with care and precision, all made possible with Skill Up.",
    rating: 5,
  },
  {
    name: "Ananya Roy",
    country: "India",
    image: "/home/aboutus-1.jpg",
    text:
      "Pre-departure was a breeze with detailed briefing sessions, giving me total confidence. Their thorough guidance helped me get ready for every aspect of my move with Skill Up. No travel hiccups or paperwork issues, all thanks to the care and efficiency of Skill Up. My entire journey to Canada went smoothly, as every step was expertly organized.",
    rating: 5,
  },
  {
    name: "Mihir Joshi",
    country: "France",
    image: "/home/aboutus-1.jpg",
    text:
      "Skill Up’s scholarship guidance made a significant impact on my study abroad journey. They helped me discover and apply for scholarships that perfectly matched my profile and needs. Their expert assistance eased the financial burden and opened doors to excellent opportunities. I wholeheartedly recommend Skill Up to anyone dreaming of higher education overseas.",
    rating: 5,
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
              Skill Up Study Abroad Agency has empowered countless students to reach their global education goals with expert support every step of the way. Don’t just take our word for it—check out our testimonials and see how we’ve helped others unlock international success.
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
                    className="object-cover w-full h-full rounded-tr-[100px] rounded-bl-[100px] sm:rounded-tr-[150px] sm:rounded-bl-[150px]"
                  />
                </div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/3 z-50">
                  <Image
                    src="/home/aboutus-2.jpg"
                    alt="Students high-fiving in front of university"
                    width={200}
                    height={250}
                    className="object-cover w-[120px] sm:w-[200px] h-[200px] sm:h-[250px] rounded-tl-[60px] rounded-br-[60px] sm:rounded-tl-[80px] sm:rounded-br-[80px]"
                  />
                </div>
                <div className="absolute top-0 left-0  -translate-x-1/2 lg:-translate-x-1/4 xl:-translate-x-1/2 translate-y-10 z-50">
                  <div className="bg-white px-4 sm:px-8 py-2 rounded-md">
                    <Heading level={5} className="text-(--teal) font-bold text-center">
                      +500
                    </Heading>
                    <Paragraph size="lg">Lorem Ipsum</Paragraph>
                  </div>

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
                style={{ maxWidth: "600px", maxHeight: "600px" }}
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
                        <Span>{t.country}</Span>
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