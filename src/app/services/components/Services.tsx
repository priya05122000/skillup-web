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
        title: 'Fitness & Gym',
        image: '/home/service1.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit dolorum obcaecati quae placeat, quas soluta corrupti voluptas, enim autem accusantium repellendus natus sed perspiciatis nostrum quos cumque modi pariatur aliquam dignissimos laudantium eum alias. Nulla a minus temporibus? Eligendi, tempora. Laudantium exercitationem nam ut error consectetur, repellat vero quaerat sequi quod quis odio nemo magnam inventore excepturi eum mollitia et reiciendis. Quia doloribus et quisquam necessitatibus, maiores tempore aut voluptate iusto, error sit a tenetur, pariatur inventore culpa delectus dolores qui explicabo? Temporibus tenetur suscipit quaerat reprehenderit cum, ipsum nisi iste tempore unde libero eos obcaecati vel quae cumque.'
    },
    // Add more services here as needed
    {
        title: 'Fitness',
        image: '/home/service1.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit dolorum obcaecati quae placeat, quas soluta corrupti voluptas, enim autem accusantium repellendus natus sed perspiciatis nostrum quos cumque modi pariatur aliquam dignissimos laudantium eum alias. Nulla a minus temporibus? Eligendi, tempora. Laudantium exercitationem nam ut error consectetur, repellat vero quaerat sequi quod quis odio nemo magnam inventore excepturi eum mollitia et reiciendis. Quia doloribus et quisquam necessitatibus, maiores tempore aut voluptate iusto, error sit a tenetur, pariatur inventore culpa delectus dolores qui explicabo? Temporibus tenetur suscipit quaerat reprehenderit cum, ipsum nisi iste tempore unde libero eos obcaecati vel quae cumque.'
    },
    {
        title: 'Fitness',
        image: '/home/service1.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit dolorum obcaecati quae placeat, quas soluta corrupti voluptas, enim autem accusantium repellendus natus sed perspiciatis nostrum quos cumque modi pariatur aliquam dignissimos laudantium eum alias. Nulla a minus temporibus? Eligendi, tempora. Laudantium exercitationem nam ut error consectetur, repellat vero quaerat sequi quod quis odio nemo magnam inventore excepturi eum mollitia et reiciendis. Quia doloribus et quisquam necessitatibus, maiores tempore aut voluptate iusto, error sit a tenetur, pariatur inventore culpa delectus dolores qui explicabo? Temporibus tenetur suscipit quaerat reprehenderit cum, ipsum nisi iste tempore unde libero eos obcaecati vel quae cumque.'
    },
    {
        title: 'Fitness',
        image: '/home/service1.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit dolorum obcaecati quae placeat, quas soluta corrupti voluptas, enim autem accusantium repellendus natus sed perspiciatis nostrum quos cumque modi pariatur aliquam dignissimos laudantium eum alias. Nulla a minus temporibus? Eligendi, tempora. Laudantium exercitationem nam ut error consectetur, repellat vero quaerat sequi quod quis odio nemo magnam inventore excepturi eum mollitia et reiciendis. Quia doloribus et quisquam necessitatibus, maiores tempore aut voluptate iusto, error sit a tenetur, pariatur inventore culpa delectus dolores qui explicabo? Temporibus tenetur suscipit quaerat reprehenderit cum, ipsum nisi iste tempore unde libero eos obcaecati vel quae cumque.'
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
