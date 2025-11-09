import React from 'react'
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

const options = [
    "MBBS", "Nursing", "Pharmacy", "Dental", "Other"
];

const EnquireForm: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[400px] relative">

            <div className="grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden shadow-lg">
                <div className="hidden md:block relative h-full">
                    <img
                        src="/home/destination1.jpg"
                        alt="Join with Us"
                        className="object-cover w-full h-full min-h-[400px]"
                    />
                </div>
                <div className="flex flex-col justify-center items-center w-full" style={{background: "linear-gradient(90deg, #4B5172 80%, #4B5172 100%)"}}>
                    <div className="flex flex-col items-center mb-6">
                        <span className="text-4xl mb-2">
                            <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a4 4 0 0 1 4 4v2.09c2.28.46 4 2.48 4 4.91v2a2 2 0 0 1-2 2h-1v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2H6a2 2 0 0 1-2-2v-2c0-2.43 1.72-4.45 4-4.91V6a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v2h4V6a2 2 0 0 0-2-2Zm-4 8v2h8v-2a4 4 0 0 0-8 0Z" /></svg>
                        </span>
                        <Heading level={4} className="text-white font-bold text-center mb-2">Join with Us</Heading>
                    </div>
                    <form className="w-full max-w-sm flex flex-col gap-4">
                        <input type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none" />
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none" />
                        <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none" />
                        <select className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none">
                            <option value="">Please choose an option</option>
                            {options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        <div className="flex flex-col gap-1 mt-2">
                            <label className="text-xs text-white">
                                You are authorizing us to call or email or SMS at any point of time.
                            </label>
                            <label className="text-xs text-white">
                                Opt in for important updates and notifications on Whatsapp
                            </label>
                        </div>
                        <button type="submit" className="w-full py-2 rounded bg-red-500 text-white font-bold text-lg mt-2 hover:bg-red-600 transition">Apply Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EnquireForm
