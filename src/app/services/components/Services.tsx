import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import Section from '@/components/Section'
import React from 'react'
import Image from 'next/image'

export type Service = {
    title: string;
    description: string;
    image: string;
}
const services: Service[] = [
    {
        title: 'Test Preparation',
        image: '/home/service1.jpg',
        description:
            'Excel in TOEFL, OET, IELTS, GRE, and PTE with Skill Up Study Abroad Agency — your trusted partner for global success. Our expert trainers, personalized preparation plans, and interactive sessions help you master language skills and test strategies with confidence. Whether your goal is to study, work, or settle abroad, Skill Up ensures you achieve your target scores and unlock international opportunities with ease.'
    },
    // Add more services here as needed
    {
        title: 'Study Abroad Counselling',
        image: '/home/service1.jpg',
        description:
            'Study abroad counselling provides you with personalized guidance to select the right program and university for your global education journey, making the overwhelming process much clearer and more manageable. Expert counsellors help assess your academic interests, strengths, and career aspirations, ensuring every decision aligns with your future goals and maximizes your potential. With professional advice on applications, scholarships, visas, and adapting to a new culture, you can confidently take every step towards international academic success.'
    },
    {
        title: 'Course Guidance',
        image: '/home/service1.jpg',
        description:
            'Course guidance is essential for students planning to study abroad, as it provides expert support in identifying programs that perfectly suit academic and professional aspirations. Skilled counsellors help shortlist the best-fit courses and institutions, while offering valuable advice on securing scholarships and financial aid to make global education affordable. This comprehensive guidance ensures every step—from choosing a major to winning scholarship opportunities—is aligned with your goals, making your study abroad journey rewarding and successful.'
    },
    {
        title: 'University/College Application Processing',
        image: '/home/service1.jpg',
        description:
            'Skill Up Study Abroad Agency provides expert guidance throughout the entire university or college application process, ensuring every detail is managed efficiently and accurately. From choosing institutions to preparing and submitting documents, our step-by-step support limits errors and delays, giving you peace of mind and a smoother transition into higher education abroad. This dedicated approach helps you meet deadlines, pass interviews, and fulfill all requirements—making your admission experience seamless and successful.'
    },
    {
        title: 'Visa Support',
        image: '/home/service1.jpg',
        description:
            'Get dedicated assistance throughout your visa application with leading student visa consultants in Mumbai, ensuring each step—from meticulous document preparation to expert interview coaching—is handled with precision. With up-to-date advice on requirements, personal guidance on form submissions, and full support for embassy appointments, these consultants streamline your journey and help remove the stress from the visa process. Trusting skilled professionals means your application is accurate, timely, and stands the best chance of approval, setting you up for a smooth, worry-free start to your global education adventure.'
    },
    {
        title: 'Scholarship Guidance',
        image: '/home/service1.jpg',
        description:
            'Our experts at Skill Up Study Abroad Agency provide dedicated support in checking your eligibility and applying for the best scholarships, making your journey to international education more affordable. By leveraging our extensive experience in study abroad visa and admission services for Indian students, we help you navigate complex funding options and guide you through every application step. This professional assistance gives you the confidence to secure financial aid, reduce costs, and focus on achieving your academic dreams at leading global institutions.'
    },
    {
        title: 'Pre-Departure Help',
        image: '/home/service1.jpg',
        description:
            'Benefit from informative pre-departure briefing sessions with Skill Up Study Abroad Agency, specially designed to prepare you for your overseas study adventure. Our expert team equips you with up-to-date information about travel, cultural adaptation, accommodation, safety, and essential steps—so you start your international journey confidently and well-prepared. These sessions cover everything from packing tips to local customs and emergency contacts, ensuring you transition smoothly and make the most of your global education experience. '
    }
]

const Services: React.FC = () => {
    return (
        <div>
            <Section>
                <div className="py-10 sm:py-20">
                    <div>
                        <Heading level={4} className="font-bold leading-tight">
                            Services
                        </Heading>
                    </div>
                    <div>
                        {services.map((service, idx) => (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-6 mt-10 border-b border-teal-500 pb-10 gap-6">
                                <div className="md:col-span-1 flex items-start">
                                    <Paragraph size="lg" className="mb-2 font-semibold">{service.title}</Paragraph>
                                </div>
                                <div className="md:col-span-2 flex justify-center">
                                    <Image src={service.image} alt={service.title} width={500} height={500} className="w-80 h-52 mb-4 rounded object-cover" />
                                </div>
                                <div className="md:col-span-3 flex items-center">
                                    <Paragraph className="text-justify">{service.description}</Paragraph>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Services
