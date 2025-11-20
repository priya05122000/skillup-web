"use client";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Stat = {
  value: string;
  label: string;
};

const Stats: React.FC = () => {
  // Static stats
  const stats: Stat[] = [
    { value: "500", label: "Partner Universities" },
    { value: "20", label: "Countries" },
    { value: "1200", label: "Global Admissions" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="pb-10 md:pb-20 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-0 md:px-4 lg:px-12 xl:px-0">
      <div className="grid grid-cols-1 lg:gap-8 message-content border-2 border-(--teal) rounded-tl-[70px] rounded-br-[70px]">
        <div ref={ref} className="flex flex-col sm:flex-row justify-between text-(--black) gap-6 sm:gap-2 py-2 lg:py-0 px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:py-6">
              <Heading level={3} className="hidden sm:flex justify-center">
                <span className="flex items-baseline">
                  {inView ? (
                    <CountUp end={parseInt(stat.value, 10)} duration={2} />
                  ) : (
                    0
                  )}
                  <span className="ml-1">+</span>
                </span>
              </Heading>
              <Heading level={6} className="flex sm:hidden justify-center">
                <span className="flex items-baseline">
                  {inView ? (
                    <CountUp end={parseInt(stat.value, 10)} duration={2} />
                  ) : (
                    0
                  )}
                  <span className="ml-1">+</span>
                </span>
              </Heading>
              <Paragraph
                size="xl"
                className="font-normal hidden sm:block text-center"
              >
                {stat.label}
              </Paragraph>
              <Paragraph
                size="lg"
                className="font-normal block sm:hidden text-center"
              >
                {stat.label}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
