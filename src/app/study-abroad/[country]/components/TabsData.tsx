"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import { FC, useState } from "react";
import { CircleCheckBig } from "lucide-react";
import { useRef } from "react";

type TabContent = {
  id: string;
  label: string;
  title?: string;
  subtitle?: string;
  paragraphs: string[];
};

type TabsDataProps = {
  tabData: TabContent[];
};

const TabButton: FC<{
  tab: TabContent;
  isActive: boolean;
  onClick: () => void;
}> = ({ tab, isActive, onClick }) => (
  <button
    key={tab.id}
    onClick={onClick}
    className={`text-base md:text-lg rounded-md font-semibold px-3 py-4 transition-colors duration-200 cursor-pointer border-b border-(--lightgray) ${
      isActive
        ? "bg-(--teal) text-(--white)"
        : "text-(--black) hover:bg-gray-300"
    }`}
  >
    {tab.label}
  </button>
);

const TabContentDisplay: FC<{ data: TabContent }> = ({ data }) => (
  <div className="text-gray-700">
    {data.title && (
      <Heading level={5} className="text-(--black) mb-6">
        {data.title}
      </Heading>
    )}
    {data.subtitle && (
      <Paragraph size="base" className="text-(--black) font-semibold mb-4">
        {data.subtitle}
      </Paragraph>
    )}
    {data.paragraphs.map((text, index) => (
      <Paragraph
        size="base"
        key={index}
        className="text-(--black) leading-relaxed mb-4"
      >
        <CircleCheckBig
          className="inline-flex text-(--orange) mr-2"
          size={18}
        />
        {text}
      </Paragraph>
    ))}
  </div>
);

const TabsData: FC<TabsDataProps> = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id ?? "");
  const activeData = tabData.find((tab) => tab.id === activeTab);
  const contentRef = useRef<HTMLDivElement>(null);

  // const handleTabClick = (id: string) => {
  //   setActiveTab(id);
  //   setTimeout(() => {
  //     if (contentRef.current) {
  //       const yOffset = -100;
  //       const y =
  //         contentRef.current.getBoundingClientRect().top +
  //         window.pageYOffset +
  //         yOffset;
  //       window.scrollTo({ top: y, behavior: "smooth" });
  //     }
  //   }, 0);
  // };

  return (
    <Section className="py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-1/5 grid grid-cols-2 sm:flex sm:flex-col shadow-xs h-fit rounded-md border border-(--light-gray)">
          {tabData.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              // onClick={() => handleTabClick(tab.id)}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
        {/* Tab Content on right */}
        <div className="w-full md:w-4/5" ref={contentRef}>
          {activeData && <TabContentDisplay data={activeData} />}
        </div>
      </div>
    </Section>
  );
};

export default TabsData;
