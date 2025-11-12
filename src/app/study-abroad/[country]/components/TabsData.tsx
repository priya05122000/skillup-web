"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import { FC, useState } from "react";

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
    className={`flex-1 text-base md:text-lg rounded-2xl font-semibold px-3 py-4 transition-colors duration-200 cursor-pointer snap-start ${
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
        {text}
      </Paragraph>
    ))}
  </div>
);

const TabsData: FC<TabsDataProps> = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.id ?? "");
  const activeData = tabData.find((tab) => tab.id === activeTab);

  return (
    <Section className="py-10">
      <div className="flex gap-6 overflow-x-auto mb-8 snap-x snap-mandatory snap-start">
        {tabData.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      {/* Tab Content */}
      {activeData && <TabContentDisplay data={activeData} />}
    </Section>
  );
};

export default TabsData;
