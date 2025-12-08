"use client";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Link from "next/link";
import ParagraphList from "@/components/ParagraphList";

const TermsAndConditions = () => {
  return (
    <Section className="space-y-6 py-12">
      <section>
        <Paragraph size="lg" className="uppercase text-center">
          Skill Up Study Abroad
        </Paragraph>
        <Heading
          level={4}
          className="my-2 text-blue-custom text-center privacy-policy uppercase"
        >
          Terms and Conditions
        </Heading>
        <div className="flex justify-center my-6">
          <div className="w-20 h-1 text(--black) flex items-center"></div>
        </div>
        <div>
          <Paragraph size="sm" className="">
            <strong>Last Updated: </strong>26/11/2025
          </Paragraph>
          <Paragraph size="sm" className="my-4">
            Welcome to <strong>Skill Up Study Abroad</strong> <br /> All
            material on this website belongs to Skill Up Study Abroad and is
            protected by copyright law. Using any part of this site for
            commercial gain is not allowed. Using any part of this site for
            offline sharing is also not allowed. If you wish to use the site for
            anything other than searching for academic programs, you should
            contact the company for permission.
          </Paragraph>
        </div>

        <div className="my-8">
          <Paragraph size="lg" className="my-4 uppercase font-bold">
            Skill Up Study Abroad
          </Paragraph>
          <Paragraph size="sm" className="">
            Also, the content on this website does not create or form part of
            any contract between you and us, nor should it be taken as an offer
            from us. Additional disclaimers may apply to certain sections or
            materials on the site.
          </Paragraph>
        </div>
        <div className="my-8">
          <Paragraph size="lg" className="my-4 uppercase font-bold">
            Accuracy
          </Paragraph>
          <Paragraph size="sm" className="">
            While every effort has been made to ensure the information on this
            website is accurate, Skill Up Study Abroad cannot guarantee that all
            details are correct. Anyone using this information does so at their
            own risk and agrees not to hold Skill Up responsible for any loss or
            damage resulting from its use.
          </Paragraph>
        </div>
        <div className="my-8">
          <Paragraph size="lg" className="my-4 uppercase font-bold">
            Safety
          </Paragraph>
          <Paragraph size="sm" className="">
            Skill Up Study Abroad cannot guarantee that this website is free
            from viruses or other harmful elements. Users should take necessary
            precautions to protect their devices. External links are provided
            for convenience only; Skill Up is not responsible for, nor does it
            endorse, the content or reliability of any linked websites.
          </Paragraph>
        </div>
        <div className="my-8">
          <Paragraph size="lg" className="my-4 uppercase font-bold">
            Completeness of Information
          </Paragraph>
          <Paragraph size="sm" className="">
            Although Skill Up Study Abroad strives to keep all information
            up-to-date, it does not guarantee that the content is complete or
            fully accurate. The company may update or change content at any time
            without notice. Users are advised to verify university-related
            details directly with the respective institutions.
          </Paragraph>
        </div>
        <div className="my-8">
          <Paragraph size="lg" className="my-4 uppercase font-bold">
            Data Submission
          </Paragraph>
          <Paragraph size="sm" className="">
            Skill Up Study Abroad does not seek confidential or proprietary
            information through its website. Any data, materials, or
            communications you send will be treated as non-confidential and may
            be used by Skill Up for any purpose, including advisory,
            promotional, event, newsletter, or job-related activities. Users
            must not post or transmit any unlawful, offensive, or inappropriate
            content through the website.
          </Paragraph>
        </div>
        <div className="my-8">
          <Paragraph
            size="lg"
            className="my-4 text-blue-custom  uppercase font-bold"
          >
            Third-Party Links
          </Paragraph>
          <Paragraph size="sm" className="text-dark-custom">
            Our website may contain links to third-party websites for additional
            information or convenience. We do not endorse or take responsibility
            for the content, privacy practices, or accuracy of such external
            sites.
          </Paragraph>
        </div>
        <div className="my-8">
          <Paragraph size="lg" className="my-4 uppercase font-bold">
            Copyright
          </Paragraph>
          <Paragraph size="sm" className="">
            All materials on this website are the property of Skill Up Study
            Abroad, unless stated otherwise.
          </Paragraph>
        </div>
        <div className="my-8">
          <Paragraph size="lg" className="my-4 uppercase font-bold">
            Variation of the Agreement
          </Paragraph>
          <Paragraph size="sm" className="">
            Skill Up Study Abroad may update, modify, or revise the terms,
            conditions, and notices that govern the use of this website at any
            time. Skill Up and the site owners are not responsible for any
            claims, losses, or damages of any kind arising from the use of the
            information or services on this website. This includes, but is not
            limited to, direct, indirect, incidental, or consequential damages,
            as well as loss of profits, data, or other harm, whether due to
            breach of contract, negligence, product liability, or any other
            cause.
          </Paragraph>
        </div>
      </section>
    </Section>
  );
};

export default TermsAndConditions;
