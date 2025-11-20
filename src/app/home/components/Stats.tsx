"use client";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import React, { useEffect, useState } from "react";

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

  // State for animated values
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 0; // 2 seconds for all stats
    const intervals = stats.map((stat, i) => {
      const target = parseInt(stat.value, 10);
      const stepTime = Math.max(Math.floor(duration / target), 10);
      let current = 0;
      return setInterval(() => {
        current += 1;
        setAnimatedValues((prev) => {
          const updated = [...prev];
          updated[i] = current > target ? target : current;
          return updated;
        });
        if (current >= target) {
          clearInterval(intervals[i]);
        }
      }, stepTime);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <Section className="py-10">
      <div className="grid grid-cols-1 lg:gap-8 message-content bg-(--teal) rounded-md">
        <div className="flex flex-col sm:flex-row justify-evenly text-(--white) gap-6 sm:gap-2 py-4 sm:py-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center lg:py-6">
              <Heading level={3} className="hidden sm:flex justify-center">
                <span className="flex items-baseline">
                  {animatedValues[i]}
                  <span className="ml-1">+</span>
                </span>
              </Heading>
              <Heading level={6} className="flex sm:hidden justify-center">
                <span className="flex items-baseline">
                  {animatedValues[i]}
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
    </Section>
  );
};

export default Stats;
