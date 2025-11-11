"use client";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import { useState } from "react";

type TabContent = {
  id: string;
  label: string;
  title?: string;
  subtitle?: string;
  paragraphs: string[];
};

const TabsData = ({ tabData }: { tabData: TabContent[] }) => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const activeData = tabData.find((tab) => tab.id === activeTab);

  return (
    <Section className="py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 overflow-hidden mb-8">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 text-base md:text-lg rounded-2xl font-semibold py-4 transition-colors duration-200 cursor-pointer
              ${
                activeTab === tab.id
                  ? "bg-(--teal) text-(--white)"
                  : "text-(--black) hover:bg-gray-300"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeData && (
        <div className="text-gray-700">
          <Heading level={5} className="text-(--black) mb-6">
            {activeData.title}
          </Heading>
          {activeData.subtitle && (
            <Paragraph size="base" className="text-(--black) font-semibold mb-4">
              {activeData.subtitle}
            </Paragraph>
          )}
          {activeData.paragraphs.map((text, index) => (
            <Paragraph size="base" key={index} className="text-(--black) leading-relaxed mb-4">
              {text}
            </Paragraph>
          ))}
        </div>
      )}
    </Section>
  );
};

export default TabsData;
