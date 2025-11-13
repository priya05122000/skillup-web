import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import Section from '@/components/Section'
import Span from '@/components/Span'
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
    return (
        <>
            <Section className='py-10 sm:py-20 '>
                <div className='rounded-md overflow-hidden'>
                    <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr]'>
                        <div className='bg-(--teal) text-white flex items-center justify-center p-6 lg:p-12 xl:p-16'>
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
                                            <Span className="font-semibold text-black/50">New projects</Span>
                                            <Paragraph size='base' className="mt-1">Katarine Goldstein</Paragraph>
                                            <Paragraph size='base' className="">kg@normcph.com</Paragraph>
                                        </div>
                                        <div className='mb-4'>
                                            <Span className="font-semibold text-black/50">Address</Span>
                                            <Paragraph size='base' className="mt-1">Snaregade 14,<br />1205 København,<br />Denmark</Paragraph>
                                        </div>
                                        <div className="mb-4">
                                            <Span className="font-semibold text-black/50">Address</Span>
                                            <Paragraph size='base' className="mt-1">Snaregade 14,<br />1205 København,<br />Denmark</Paragraph>
                                        </div>

                                        <div className="mb-4">
                                            <Span className="font-semibold text-black/50">General enquiries</Span>
                                            <Paragraph size='base' className="mt-1">info@normcph.com</Paragraph>
                                            <Paragraph size='base' className="">+45 28 87 93 09</Paragraph>
                                        </div>
                                        <div className="mb-4">
                                            <Span className="font-semibold text-black/50">Careers & Internships</Span>
                                            <Paragraph size='base' className="mt-1">info@normcph.com</Paragraph>
                                        </div>
                                        <div>
                                            <Span className="font-semibold text-black/50">Follow us</Span>
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

            {/* Google Maps embed does not support direct color customization via iframe.
                To customize map colors, you need to use Google Maps JavaScript API with custom styles.
                For the embed, you can only change the container's styling. */}
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.803091251145!2d12.57331231601113!3d55.67609698053737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652530c2b6e1e7b%3A0x7e6e8e6b89347568!2sSnaregade%2014%2C%201205%20K%C3%B8benhavn%2C%20Denmark!5e0!3m2!1sen!2sdk!4v1717690000000!5m2!1sen!2sdk"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Norm CPH Location"
                />
            </div>
        </>

    )
}

export default ContactUs
