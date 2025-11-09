import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import Section from '@/components/Section'
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
    return (
        <Section className='py-10 sm:py-20 '>
            <div className='border-4 border-(--teal) rounded-lg overflow-hidden'>
                <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr]'>
                    <div className='bg-white flex items-center justify-center p-20'>
                        <div>
                            <Heading level={1} className="font-extrabold mb-14">CONTACT</Heading>
                            <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 text-sm">

                                <div>
                                    <Paragraph size='lg' className="text-lg mb-10 text-gray-700">
                                        For any enquiries, or just to say hello, get in touch and contact us.
                                    </Paragraph>
                                </div>
                                <div className='grid grid-cols-2 gap-10'>

                                    <div className="mb-6">
                                        <span className="font-semibold text-(--text-dark)">New projects</span>
                                        <div className="mt-1">Katarine Goldstein</div>
                                        <div className="text-gray-600">kg@normcph.com</div>
                                    </div>
                                    <div className='mb-6'>
                                        <span className="font-semibold text-(--text-dark)">Address</span>
                                        <div className="mt-1">Snaregade 14,<br />1205 København,<br />Denmark</div>
                                    </div>
                                    <div className="mb-6">
                                        <span className="font-semibold text-(--text-dark)">Address</span>
                                        <div className="mt-1">Snaregade 14,<br />1205 København,<br />Denmark</div>
                                    </div>

                                    <div className="mb-6">
                                        <span className="font-semibold text-(--text-dark)">General enquiries</span>
                                        <div className="mt-1 text-gray-600">info@normcph.com</div>
                                        <div className="text-gray-600">+45 28 87 93 09</div>
                                    </div>
                                    <div className="mb-6">
                                        <span className="font-semibold text-(--text-dark)">Careers & Internships</span>
                                        <div className="mt-1 text-gray-600">jobs@normcph.com</div>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-(--text-dark)">Follow us</span>
                                        <div className="mt-1 flex gap-4 text-gray-600">
                                            <span>Tw</span>
                                            <span>Fb</span>
                                            <span>Ins</span>
                                            <span>Pin</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/contact/contact.jpg"
                            alt="Students high-fiving in front of university"
                            width={1000}
                            height={1000}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ContactUs
