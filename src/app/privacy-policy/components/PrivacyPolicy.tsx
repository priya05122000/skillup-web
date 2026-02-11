"use client";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Link from "next/link";

const PrivacyPolicy = () => {
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
                    Privacy Policy
                </Heading>
                <div className="flex justify-center my-6">
                    <div className="w-20 h-1 text(--black) flex items-center"></div>
                </div>
                <div>
                    <Paragraph size="sm" className="">
                        The contents of this website are the property of Skill Up Study Abroad and are protected under applicable copyright laws. Capturing, reproducing, or reusing any content from this site for commercial purposes is strictly prohibited. Reproduction or reuse of the content for offline distribution is also not permitted.
                    </Paragraph>
                    <Paragraph size="sm" className="my-4">
                        Any questions regarding the use of this site for purposes other than academic program search should be directed to:
                    </Paragraph>
                </div>

                <div className="my-8">
                    <Paragraph size="lg" className="my-4 uppercase font-bold">
                        Skill Up Study Abroad
                    </Paragraph>
                    <Paragraph size="sm" className="">
                        Email: <Link href="mailto:skillupacademy.ulwe@gmail.com" className="underline ">skillupacademy.ulwe@gmail.com</Link>
                    </Paragraph>
                    <Paragraph size="sm" className="my-4">
                        None of the content on this website forms part of any contract between you and Skill Up Study Abroad, nor does it constitute an offer by the company. Certain sections of the website may include specific disclaimers that apply in addition to these general terms.
                    </Paragraph>
                </div>
                <div className="my-8">
                    <Paragraph size="lg" className="my-4 uppercase font-bold">
                        Accuracy
                    </Paragraph>
                    <Paragraph size="sm" className="">
                        While every reasonable effort has been made to ensure the accuracy of the information provided, Skill Up Study Abroad does not guarantee that all content is free from errors or omissions. Users rely on the information at their own risk and agree to indemnify Skill Up Study Abroad against any claims, injury, or damage arising from such reliance.
                    </Paragraph>
                </div>
                <div className="my-8">
                    <Paragraph size="lg" className="my-4 uppercase font-bold">
                        Safety
                    </Paragraph>
                    <Paragraph size="sm" className="">
                        Skill Up Study Abroad does not guarantee that the website will be free from viruses or other harmful components. Users are advised to take appropriate precautions to safeguard their devices and data.
                    </Paragraph>
                    <Paragraph size="sm" className="my-4">
                        External links are provided for convenience. Skill Up Study Abroad does not endorse and is not responsible for the content, accuracy, or condition of any linked third-party websites.
                    </Paragraph>
                </div>
                <div className="my-8">
                    <Paragraph size="lg" className="my-4 uppercase font-bold">
                        Completeness of Information
                    </Paragraph>
                    <Paragraph size="sm" className="">
                        Although every effort is made to keep the information up to date, Skill Up Study Abroad does not warrant the completeness of the material presented. The company reserves the right to modify or update the website content at any time without prior notice.
                    </Paragraph>
                    <Paragraph size="sm" className="my-4">
                        Users should independently verify university details and related information directly with the respective institutions before making decisions.
                    </Paragraph>
                </div>
                <div className="my-8">
                    <Paragraph size="lg" className="my-4 uppercase font-bold">
                        Data Submission
                    </Paragraph>
                    <Paragraph size="sm" className="">
                        Skill Up Study Abroad does not request confidential or proprietary information through its website. Any material, information, or communication transmitted through the site will be considered non-confidential and non-proprietary.
                    </Paragraph>
                    <Paragraph size="sm" className="my-4">
                        Skill Up Study Abroad reserves the right to use submitted information for purposes including, but not limited to, advising services, promotional communication, event updates, newsletters, and job-related opportunities.
                        Users are prohibited from posting or transmitting unlawful, threatening, defamatory, obscene, or otherwise objectionable material that violates any applicable law.
                    </Paragraph>
                    <Paragraph size="sm" className="my-4">
                        All information submitted on this website becomes the property of Skill Up Study Abroad.
                    </Paragraph>
                </div>
                <div className="my-8">
                    <Paragraph size="lg" className="my-4 uppercase font-bold">
                        Copyright
                    </Paragraph>
                    <Paragraph size="sm" className="">
                        Skill Up Study Abroad holds copyright ownership of all materials on this website unless otherwise stated.

                    </Paragraph>
                </div>
                <div className="my-8">
                    <Paragraph size="lg" className="my-4 uppercase font-bold">
                        Variation of Terms
                    </Paragraph>
                    <Paragraph size="sm" className="">
                        Skill Up Study Abroad reserves the right to revise or update the terms, conditions, and notices under which the website is offered at any time.
                    </Paragraph>
                </div>
                <div className="my-8">
                    <Paragraph size="lg" className="my-4 uppercase font-bold">
                        Limitation of Liability
                    </Paragraph>
                    <Paragraph size="sm" className="">
                        Skill Up Study Abroad and the hosting providers of this website shall not be liable for any claims, losses, demands, or damages of any kind arising from the use of this website or its services. This includes, but is not limited to, direct, indirect, incidental, or consequential damages, loss of profits, or loss of data, whether based on contract, negligence, warranty, product liability, or any other legal theory.
                    </Paragraph>
                </div>
            </section>
        </Section>
    )
}

export default PrivacyPolicy
