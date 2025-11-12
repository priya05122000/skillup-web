import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import Section from '@/components/Section'
import Span from '@/components/Span'
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
    return (
        <Section className='py-10 sm:py-20 '>
            <div className='border-4 border-(--teal) rounded-lg overflow-hidden'>
                <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr]'>
                    <div className='bg-white flex items-center justify-center p-6 lg:p-12 xl:p-16'>
                        <div className=''>
                            <Heading level={1} className="font-extrabold mb-8 xl:mb-14 text-(--orange)">CONTACT</Heading>
                            <div className="grid grid-cols-1 xl:grid-cols-2  xl:gap-10 text-sm">

                                <div>
                                    <Paragraph size='base' className=" mb-10">
                                        For any enquiries, or just to say hello, get in touch and contact us.
                                    </Paragraph>
                                </div>
                                <div className='grid sm:grid-cols-2 gap-4'>

                                    <div className="mb-4">
                                        <Span className="font-semibold text-(--text-dark)/30">New projects</Span>
                                        <Paragraph size='base' className="mt-1">Katarine Goldstein</Paragraph>
                                        <Paragraph size='base' className="">kg@normcph.com</Paragraph>
                                    </div>
                                    <div className='mb-4'>
                                        <Span className="font-semibold text-(--text-dark)/30">Address</Span>
                                        <Paragraph size='base' className="mt-1">Snaregade 14,<br />1205 København,<br />Denmark</Paragraph>
                                    </div>
                                    <div className="mb-4">
                                        <Span className="font-semibold text-(--text-dark)/30">Address</Span>
                                        <Paragraph size='base' className="mt-1">Snaregade 14,<br />1205 København,<br />Denmark</Paragraph>
                                    </div>

                                    <div className="mb-4">
                                        <Span className="font-semibold text-(--text-dark)/30">General enquiries</Span>
                                        <Paragraph size='base' className="mt-1">info@normcph.com</Paragraph>
                                        <Paragraph size='base' className="">+45 28 87 93 09</Paragraph>
                                    </div>
                                    <div className="mb-4">
                                        <Span className="font-semibold text-(--text-dark)/30">Careers & Internships</Span>
                                        <Paragraph size='base' className="mt-1">info@normcph.com</Paragraph>
                                    </div>
                                    <div>
                                        <Span className="font-semibold text-(--text-dark)/30">Follow us</Span>
                                        <div className="mt-1 flex gap-4">
                                            <Paragraph size='base'>Tw</Paragraph>
                                            <Paragraph size='base'>Tw</Paragraph>
                                            <Paragraph size='base'>Tw</Paragraph>
                                            <Paragraph size='base'>Tw</Paragraph>

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
