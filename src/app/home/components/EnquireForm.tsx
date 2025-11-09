import React from 'react'
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

const options = [
    "MBBS", "Nursing", "Pharmacy", "Dental", "Other"
];

const EnquireForm: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[550px] relative">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden  relative">

                {/* LEFT IMAGE */}
                <div className="hidden md:block relative h-full">
                    <Image
                        src="/home/enquireform.jpg"
                        alt="Join with Us"
                        className="object-cover w-full h-full min-h-[550px]"
                        width={600}
                        height={550}
                    />
                    {/* ✅ Gradient overlay FROM right to left (purple fading into image) */}
                    <div className="absolute inset-0 bg-linear-to-l from-(--orange) via-(--orange)/30 to-transparent"></div>
                </div>

                {/* RIGHT FORM */}
                <div className="flex flex-col justify-center items-center w-full bg-(--orange) relative z-10">
                    <div className="flex flex-col items-center mb-6">
                        <span className="text-6xl mb-2 text-white">
                            <FaGraduationCap />
                        </span>
                        <Heading level={4} className="text-white font-bold text-center mb-2">Join With Us</Heading>
                    </div>

                    <form className="w-full max-w-sm flex flex-col gap-4">
                        <input type="text" placeholder="Full Name" className="w-full px-4 py-2  bg-white text-black focus:outline-none" />
                        <input type="email" placeholder="Email" className="w-full px-4 py-2  bg-white text-black focus:outline-none" />
                        <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-2  bg-white text-black focus:outline-none" />
                        <select className="w-full px-4 py-2  bg-white text-black focus:outline-none">
                            <option value="">Please choose an option</option>
                            {options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>

                        <div className="flex flex-col gap-2 ">
                            <label className="flex items-center gap-2 text-xs text-white">
                                <input type="checkbox" required className="accent-(--orange)" />
                                You authorize us to call, email, or SMS you at any time.
                            </label>
                        </div>

                        {/* <button
                            type="submit"
                            className="w-full py-2  bg-(--orange) text-white font-bold text-lg mt-2 hover:bg-(--orange) transition"
                        >
                            Apply Now
                        </button> */}
                        <button type="submit" className="relative overflow-hidden px-4 py-2 text-(--white) bg-(--white) rounded-md cursor-pointer outline-none border-none group">
                            <Paragraph
                                size="base"
                                className="relative font-semibold z-10 transition-colors duration-400 inline-flex items-center gap-2 group-hover:text-(--orange)"
                            >
                                Submit
                            </Paragraph>
                            <div className="absolute top-0 -left-[10%] w-[120%] h-full rounded-md bg-(--teal) skew-x-30 z-0 transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EnquireForm;
