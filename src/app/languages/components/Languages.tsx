import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import React from "react";
import Image from "next/image";

export type Language = {
    slug: string;
    title: string;
    description: string;
    image: string;
    briefing?: string;
};

const languages: Language[] = [
    {
        slug: "french",
        title: "French",
        briefing: "French",
        image: "/languages/french.jpg",
        description:
            "French is a global language of culture, diplomacy, and international business. Learning French opens doors to study and work in over 29 countries worldwide.\n\nAs one of the official languages of the UN and many international organizations, French is crucial for careers in diplomacy, tourism, and international relations. Skill Up’s French language training focuses on conversational fluency, grammar mastery, and cultural immersion to prepare you for global opportunities.",
    },
    {
        slug: "german",
        title: "German",
        briefing: "German",
        image: "/languages/german.jpg",
        description:
            "German is the language of Europe’s largest economy and a hub for engineering, science, and technology. Mastering German enhances your career prospects in multinational companies and academic institutions.\n\nWidely spoken in Germany, Austria, and Switzerland, German offers access to top universities and research programs. Skill Up’s German courses combine interactive lessons and practical communication skills to ensure you gain linguistic confidence and professional advantage.",
    },
    {
        slug: "spoken-english",
        title: "Spoken English",
        briefing: "Spoken English",
        image: "/languages/spoken-english.jpg",
        description:
            "English is the dominant global language for education, business, and communication. Strong spoken English skills increase your employability and social confidence worldwide.\n\nSkill Up’s spoken English classes develop pronunciation, fluency, and vocabulary through conversation practice, role plays, and real-life scenarios. This training prepares you to excel in interviews, presentations, and everyday communication with ease.",
    },
    {
        slug: "japanese",
        title: "Japanese",
        briefing: "Japanese",
        image: "/languages/japanese.jpg",
        description:
            "Japanese offers access to one of the world’s largest economies and a unique cultural heritage. Learning Japanese opens career and educational pathways in technology, trade, and tourism.\n\nJapan’s strong economic ties with India and global influence make Japanese a valuable asset. Skill Up’s Japanese training covers speaking, writing, and cultural nuances to help you communicate effectively and expand your global network.",
    },
    {
        slug: "korean",
        title: "Korean",
        briefing: "Korean",
        image: "/languages/korean.jpg",
        description:
            "Korean is a strategic language tied to South Korea’s booming economy and cultural exports. Learning Korean can open doors in technology, entertainment, and international business.\n\nSouth Korea’s strong ties with India and educational scholarships make Korean a sought-after language. Skill Up offers structured Korean lessons emphasizing vocabulary, pronunciation, and grammar to help you succeed academically and professionally.",
    },
    {
        slug: "spanish",
        title: "Spanish",
        briefing: "Spanish",
        image: "/languages/spanish.jpg",
        description:
            "Spanish is one of the most widely spoken languages globally, with rich cultural and business significance. Proficiency in Spanish boosts your opportunities across the Americas and Europe.\n\nSkill Up’s Spanish language courses focus on practical communication and comprehensive grammar skills, preparing you for travel, work, or study in Spanish-speaking countries. Spanish fluency enhances cross-cultural connections and international career growth.",
    },
];

const Languages: React.FC = () => {
    return (
        <div>
            <Section>
                <div className="pt-10 sm:pt-20">
                    <div className="bg-(--orange)/10 rounded-md px-4 sm:px-10">
                        {languages.map((language, idx) => (
                            <div
                                key={idx}
                                id={language.slug}
                                className="service-section flex flex-col lg:flex-row border-b border-(--teal)/20 py-6 sm:py-10 gap-2 lg:gap-6"
                            >
                                <div className="lg:w-2/8 xl:w-1/5 flex items-start">
                                    <Heading
                                        level={6}
                                        className="mb-2 font-bold uppercase text-(--teal)"
                                    >
                                        {language.briefing}
                                    </Heading>
                                </div>
                                <div className="lg:w-5/7 xl:w-4/5 flex flex-col sm:flex-row gap-6 justify-center">
                                    <div className="w-full md:w-50 xl:w-80 h-52 shrink-0 ">
                                        <Image
                                            src={language.image}
                                            alt={language.title}
                                            width={500}
                                            height={500}
                                            className="w-full h-full rounded object-cover"
                                        />
                                    </div>

                                    <div className="">
                                        <Paragraph size="base" className="text-justify ">
                                            {language.description}
                                        </Paragraph>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Languages;
