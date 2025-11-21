import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TestItem = {
  slug?: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  isExplore?: boolean;
};

const testItems: TestItem[] = [
  {
    slug: "test-preparation",
    title: "IELTS",
    description: "International English Language Testing System (IELTS)",
  },
  {
    slug: "test-preparation",
    title: "PTE",
    description: "Pearson Test of English (PTE)",
  },
  {
    slug: "test-preparation",
    title: "OET",
    description: "Occupational English Test (OET)",
  },
  {
    slug: "test-preparation",
    title: "TOEFL",
    description: "Test of English as a Foreign Language (TOEFL)",
  },
  {
    slug: "test-preparation",
    title: "GRE",
    description: "Graduate Record Examination (GRE)",
  },
  {
    slug: "test-preparation",
    title: "GMAT",
    description: "Graduate Management Admission Test (GMAT)",
  },
  {
    slug: "test-preparation",
    title: "SAT",
    description: "Scholastic Assessment Test (SAT)",
  },
  {
    slug: "test-preparation",
    title: "Explore",
    imageSrc: "/home/arrow-right.png",
    imageAlt: "Aptitude Test",
    isExplore: true,
  },
];

const TestCard: React.FC<TestItem> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isExplore,
}) => (
  <Link
    href="/services/#test-preparation"
    scroll={true}
    className={`block bg-(--teal)/70 backdrop-blur-md text-center p-10 hover:bg-(--teal) transition-all duration-200 ${
      isExplore ? "hidden sm:block" : ""
    }`}
  >
    {isExplore && imageSrc ? (
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        width={80}
        height={80}
        className="mx-auto"
      />
    ) : (
      <Heading level={5}>{title}</Heading>
    )}
    <Paragraph size="base" className="mt-2">
      {isExplore ? "Explore" : description}
    </Paragraph>
  </Link>
);

const TestPreparation: React.FC = () => {
  return (
    <div
      className="bg-cover bg-top relative py-10 sm:py-20"
      style={{ backgroundImage: "url('/home/exam-prep.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      {/* <div
        className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-black/70"
        aria-hidden="true"
      /> */}

      <Section>
        <div className="max-w-3xl mx-auto">
          <Heading
            level={4}
            className="font-bold leading-tight text-center text-white"
          >
            Test Preparation
          </Heading>
          <Paragraph size="lg" className="mt-4 text-white text-center">
            Excel in TOEFL, OET, IELTS, GRE, GMAT, SAT and PTE with Skill Up
            Study Abroad Agency — your trusted partner for global success. Our
            expert trainers, personalized preparation plans, and interactive
            sessions help you master language skills and test strategies with
            confidence.
          </Paragraph>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-10 gap-1 text-white">
            {testItems.map((item, idx) => (
              <TestCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TestPreparation;
