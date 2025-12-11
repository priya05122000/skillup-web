"use client";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import SectionCenter from "@/components/SectionCenter";
import EnquiryFormFields from "@/components/EnquiryFormFields";

interface EnquireFormProps {
  description: string;
  aboutImage: string;
}

const EnquireForm: React.FC<EnquireFormProps> = ({ description, aboutImage }) => (
  <SectionCenter className="py-10 md:py-20">
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="w-full sm:w-1/2 lg:w-3/5">
        <Paragraph size="lg" className="font-bold uppercase text-(--teal)">
          Train Smart, Score High
        </Paragraph>
        <Heading level={4} className="font-bold leading-tight">
          Expert Prep. Proven Results
        </Heading>
        <Image
          src={aboutImage}
          alt="Contact Image"
          width={1000}
          height={1000}
          className="rounded-md mt-4 w-full object-cover h-50 lg:h-70 xl:h-80"
        />
        <Paragraph size="base" className="mt-4">
          {description}
        </Paragraph>
      </div>
      <div className="relative z-10 w-full sm:w-1/2 lg:w-2/5 flex h-fit">
        <div className="w-full sm:w-[350px] md:w-[500px] bg-(--teal)/70 bg-opacity-95 p-10 rounded-md shadow-xl backdrop-blur">
          <div className="flex flex-col items-center mb-4">
            <span className="text-5xl mb-2 text-white">
              <i className="fa-solid fa-graduation-cap" />
            </span>
            <Heading level={6} className="text-white font-bold text-center mb-2">
              Connect with us
            </Heading>
          </div>
          <EnquiryFormFields />
        </div>
      </div>
    </div>
  </SectionCenter>
);

export default EnquireForm;
