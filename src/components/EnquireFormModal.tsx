import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Heading from "@/components/Heading";
import AnimatedButton from "@/components/AnimatedButton";
import FormInput from "@/components/FormInput";
import Dropdown from "@/components/Dropdown";
import { CountryOption } from "@/types/forms";
import EnquiryFormFields from "@/components/EnquiryFormFields";

const courseOptions = ["MBBS", "Nursing", "Pharmacy", "Dental", "Other"];
const countryOptions: CountryOption[] = [
    { name: "Canada", code: "canada" },
    { name: "Australia", code: "australia" },
    { name: "Ireland", code: "ireland" },
    { name: "Germany", code: "germany" },
    { name: "United States", code: "usa" },
    { name: "Denmark", code: "denmark" },
    { name: "Bulgaria", code: "bulgaria" },
    { name: "Malaysia", code: "malaysia" },
    { name: "Russia", code: "russia" },
    { name: "Singapore", code: "singapore" },
    { name: "United Kingdom", code: "uk" },
    { name: "New Zealand", code: "new-zealand" },
    { name: "Sweden", code: "sweden" },
    { name: "Switzerland", code: "switzerland" },
    { name: "Italy", code: "italy" },
    { name: "South Korea", code: "south-korea" },
    { name: "France", code: "france" },
    { name: "Netherlands", code: "netherlands" },
    { name: "UAE", code: "uae" },
    { name: "Phillipines", code: "phillipines" },
];

interface EnquireFormModalProps {
    open: boolean;
    onClose: () => void;
    context?: "enquiry" | "freeConsultation" | "applyNow";
}

const EnquireFormModal: FC<EnquireFormModalProps> = ({ open, onClose, context = "enquiry" }) => {
    const [selectedProgram, setSelectedProgram] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [openDropdownName, setOpenDropdownName] = useState("");

    let heading = "Join With Us";
    if (context === "freeConsultation") heading = "Free Consultation";
    if (context === "applyNow") heading = "Apply Now";

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-(--black)/70 p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="w-full sm:w-[350px] md:w-[500px] bg-(--teal)/40 shadow-2xl p-10 max-w-lg relative backdrop-blur-md rounded-md"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            className="absolute top-2 right-2 cursor-pointer text-2xl text-(--bg-grey)"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <IoClose />
                        </button>
                        <div className="flex flex-col items-center mb-6">
                            <span className="text-5xl mb-2 text-white">
                                {/* Icon can be customized per context if needed */}
                                <AnimatedButton type="button" bgColor="bg-transparent" textColor="text-(--white)"><span>🎓</span></AnimatedButton>
                            </span>
                            <Heading level={5} className="text-white font-bold text-center mb-2">
                                {heading}
                            </Heading>
                        </div>
                        <form className="w-full flex flex-col gap-4">
                            <EnquiryFormFields onSuccess={onClose} />
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EnquireFormModal;
