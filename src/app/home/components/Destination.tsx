import Heading from "@/components/Heading";
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
    <div className="relative group cursor-pointer overflow-hidden rounded-lg">
        <Image
            src={src}
            alt={alt}
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105"
        />
        <div
            className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/70"
            aria-hidden="true"
        />
        <div className="absolute bottom-4 rounded-lg flex items-center justify-start w-full">
            <Heading level={6} className="text-white text-lg font-semibold text-center px-4">
                {label}
            </Heading>
        </div>
    </div>
);

const Destination = () => {
    return (
        <Section>
            <div className="py-10 sm:py-20">
                <div className="max-w-3xl mx-auto">
                    <Heading level={4} className="font-bold leading-tight text-center">
                        <span className="text-(--teal)">Explore</span> MBBS, Nursing and More in HealthCare
                    </Heading>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((item, idx) => (
                        <DestinationCard key={idx} {...item} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Destination;
