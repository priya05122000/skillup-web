import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Image from "next/image";

interface DestinationItem {
  src: string;
  alt: string;
  label: string;
}

const destinations: DestinationItem[] = [
  {
    src: "/home/destination1.jpg",
    alt: "MBBS Programs",
    label: "Georgia",
  },
  {
    src: "/home/destination2.jpg",
    alt: "Nursing Courses",
    label: "Georgia",
  },
  {
    src: "/home/destination3.jpg",
    alt: "Pharmacy Studies",
    label: "Georgia",
  },
  {
    src: "/home/destination4.jpg",
    alt: "Dental Programs",
    label: "Georgia",
  },
];

const DestinationCard: React.FC<DestinationItem> = ({ src, alt, label }) => (
  <div className="relative group cursor-pointer rounded-md">
    <Image
      src={src}
      alt={alt}
      width={300}
      height={200}
      className="rounded-md object-cover w-full h-64 transition-transform duration-300 "
      // className="rounded-md object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
    />
    <div
      className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/70 rounded-md"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 bottom-0 mx-auto translate-y-1/2 w-4/5 h-28 bg-(--white)/10 shadow-lg rounded-tl-md rounded-md flex items-center justify-center border border-(--white)/30 backdrop-blur-md">
        <div className="flex flex-col gap-2 justify-center h-full w-full">
          <Paragraph
            size="xl"
            className="text-white font-semibold px-4 text-center"
          >
            {label}
          </Paragraph>
          <Paragraph
            size="base"
            className="text-white leading-tight px-4 text-center"
          >
            Lorem ipsum dolor sit amet consectetur
          </Paragraph>
        </div>
      </div>
    </div>

    {/* <div className="absolute bottom-4 rounded-md flex items-center justify-start w-full">
            <Heading level={6} className="text-white text-lg font-semibold text-center px-4">
                {label}
            </Heading>
        </div> */}
  </div>
);

const Destination = () => {
  return (
    <div>
      <Section>
        <div className="pt-10 sm:pt-20 sm:px-10 xl:px-20">
          <div className="max-w-3xl mx-auto">
            <Heading level={4} className="font-bold leading-tight text-center">
              <span className="text-(--teal)">Explore</span> MBBS, Nursing and
              More in HealthCare
            </Heading>
          </div>
        </div>
      </Section>

      <div className="bg-linear-to-t from-(--teal) to-transparent">
        <Section>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-20 pb-20">
            {destinations.map((item, idx) => (
              <div key={idx} className={idx % 2 === 0 ? "" : " mt-10"}>
                <DestinationCard {...item} />
              </div>
            ))}
          </div>
         
        </Section>
      </div>
    </div>
  );
};

export default Destination;
