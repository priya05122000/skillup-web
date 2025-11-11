"use client";

import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { FC } from "react";

type Topic = {
  id: number;
  title: string;
  icon: string;
};

type WhyStudyProps = {
  topics: Topic[];
  name: string;
};

const DynamicIcon = dynamic(
  async () => {
    const lucide = await import("lucide-react");
    const reactIconsFa = await import("react-icons/fa");
    const reactIconsMd = await import("react-icons/md");
    const reactIconsAi = await import("react-icons/ai");

    return function IconWrapper({
      iconName,
      size = 32,
      className = "",
      library = "lucide",
    }: {
      iconName: string;
      size?: number;
      className?: string;
      library?: "lucide" | "fa" | "md" | "ai";
    }) {
      let IconComp;
      switch (library) {
        case "lucide":
          IconComp = (lucide as any)[iconName];
          break;
        case "fa":
          IconComp = (reactIconsFa as any)[iconName];
          break;
        case "md":
          IconComp = (reactIconsMd as any)[iconName];
          break;
        case "ai":
          IconComp = (reactIconsAi as any)[iconName];
          break;
        default:
          IconComp = null;
      }
      if (!IconComp) {
        console.warn(`⚠️ Icon "${iconName}" not found in ${library}.`);
        return null;
      }
      return <IconComp size={size} className={className} />;
    };
  },
  { ssr: false }
);

const TopicSlide: FC<{ topic: Topic }> = ({ topic }) => (
  <div className="px-2 py-4 flex flex-col items-center text-center">
    <div className="mb-4 text-orange-500">
      <DynamicIcon iconName={topic.icon} size={32} library="lucide" />
    </div>
    <Paragraph size="lg" className="font-semibold mb-1">
      {topic.title}
    </Paragraph>
  </div>
);

const WhyStudy: FC<WhyStudyProps> = ({ topics, name }) => {
  if (!topics?.length) return null;
  return (
    <Section className="pt-8 relative overflow-hidden">
      <Heading level={5} className="font-bold mb-10">
        Why Study in {name}
      </Heading>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={2}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="pb-8"
      >
        {topics.map((topic) => (
          <SwiperSlide key={topic.id}>
            <TopicSlide topic={topic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default WhyStudy;
