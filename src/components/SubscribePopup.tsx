import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import AnimatedButton from "@/components/AnimatedButton";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface SubscribePopupProps {
    onClose: () => void;
}

const SubscribePopup: React.FC<SubscribePopupProps> = ({ onClose }) => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        setMobileNumber(value);
    };

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(mobileNumber)) {
            toast.error("Please enter a valid 10-digit mobile number.");
            setSubmitting(false);
            return;
        }
        if (!executeRecaptcha) {
            toast.error("Captcha failed. Please refresh and try again.");
            setSubmitting(false);
            return;
        }
        const captchaToken = await executeRecaptcha("subscribe_popup");
        // console.log("🟢 Captcha Token Generated:", captchaToken);
        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mobileNumber, recaptchaToken: captchaToken }),
            });
            if (res.ok) {
                toast.success("Request received! We'll contact you soon.");
                setMobileNumber("");
                onClose();
            } else {
                toast.error("Unable to process your request. Try again later.");
            }
        } catch {
            toast.error("Failed to send demo request. Please try again.");
        }
        setSubmitting(false);
    };

    return (
        <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-(--black)/60 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="bg-(--teal)/40 shadow-2xl p-6 sm:p-10 max-w-lg w-full relative backdrop-blur-md rounded-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <button
                    className="absolute top-2 right-2 cursor-pointer text-xl text-(--bg-grey)"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <IoClose />
                </button>
                <Heading
                    level={5}
                    className="font-bold leading-tight text-center text-(--white) uppercase"
                >
                    Book a Free Consultation
                </Heading>
                <Paragraph size="lg" className="mt-4 text-(--white) text-center">
                    Book a free consultation to experience expert guidance tailored to your study abroad goals.
                </Paragraph>
                <form onSubmit={handleSubscribe} className="space-y-2 mt-5">
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                        <input
                            type="text"
                            name="Mobile Number"
                            required
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            placeholder="Enter your Mobile number"
                            className="flex-1 px-4 py-2 rounded border border-white bg-white focus:outline-none"
                            maxLength={10}
                            pattern="\d{10}"
                        />
                        <AnimatedButton
                            type="submit"
                            disabled={submitting}
                            bgColor="bg-(--white)"
                            textColor="text-(--white)"
                            hoverTextColor="group-hover:text-(--teal)"
                            skewColor="bg-(--orange)"
                            className="px-4 py-2"
                        >
                            {submitting ? "Submitting..." : "Submit"}
                        </AnimatedButton>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default SubscribePopup;
