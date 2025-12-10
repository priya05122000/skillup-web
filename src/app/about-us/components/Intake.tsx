"use client";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";

export default function Intake() {
  return (
    <Section>
      <section className="flex flex-col lg:flex-row items-center justify-center py-10 sm:py-20 pt-20 sm:pt-30">
        <div className="relative bg-(--teal) w-full rounded-md shadow-lg flex flex-col lg:flex-row">
          {/* Left image section */}
          <div className="lg:w-4/9 xl:w-3/7 relative flex justify-center items-center p-4 md:p-8 mb-86 sm:mb-102 lg:mb-0">
            <div className="absolute -top-10 sm:-top-15 lg:left-8 xl:left-14 z-10">
              <div className="bg-foreground p-3 md:p-4 rounded-md">
                <Image
                  src="/about-us/intake.webp"
                  alt="Luxury Apartment"
                  width={450}
                  height={600}
                  className="object-cover h-[400px] w-62 sm:h-[500px] sm:w-[500px] lg:w-md lg:h-[600px] xl:h-[550px] rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Right info section */}
          <div className="lg:w-5/9 xl:w-4/7 px-6 md:px-8 py-8 flex flex-col text-(--white)">
            {/* Title */}
            <Heading level={6} className="mb-2">
              January Intake
            </Heading>

            {/* Description */}
            <Paragraph size="sm" className="mb-6 leading-relaxed text-justify">
              This is considered the secondary admission period in the UK,
              offering fewer course choices compared to the main September
              intake. It serves as an excellent chance for students who missed
              the primary intake or want extra time to prepare their
              applications. Deadlines for January intake generally fall between
              June and September, though these vary by course and university.
            </Paragraph>

            <Heading level={6} className="mb-2">
              September Intake
            </Heading>

            {/* Description */}
            <Paragraph size="sm" className="mb-6 leading-relaxed text-justify">
              Known as the main or autumn intake, September is the most popular
              admission period with the widest selection of courses available
              across UK universities. Application timelines for this intake
              usually run between February and May but can differ according to
              the specific university and program, so it's essential to confirm
              details directly with your chosen institution.
            </Paragraph>

            <Heading level={6} className="mb-2">
              May Intake
            </Heading>

            {/* Description */}
            <Paragraph size="sm" className="mb-6 leading-relaxed text-justify">
              May (spring/summer) intake is much less common, with only a select
              number of universities and courses available during this period.
              Institutions such as Coventry University, Northumbria University,
              and a few others may open admissions for specific programs, giving
              students an additional opportunity to start their studies without
              waiting for the major intakes.
            </Paragraph>
          </div>
        </div>
      </section>
    </Section>
  );
}
