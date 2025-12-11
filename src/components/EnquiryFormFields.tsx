import React, { useState } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import Dropdown from "@/components/Dropdown";
import FormInput from "@/components/FormInput";
import Paragraph from "@/components/Paragraph";
import { CountryOption } from "@/types/forms";
import toast from "react-hot-toast";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

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

export interface EnquiryFormFieldsProps {
    onSuccess?: () => void;
    buttonText?: string;
    className?: string;
}

const EnquiryFormFields: React.FC<EnquiryFormFieldsProps> = ({ onSuccess, buttonText = "Submit", className }) => {
    const [selectedProgram, setSelectedProgram] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [openDropdownName, setOpenDropdownName] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [agree, setAgree] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setSuccess(null);
        setError(null);

        // Validation
        const nameRegex = /^[A-Za-z\s]+$/;
        const mobileRegex = /^\d{10}$/;
        const emailRegex = /^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        // NAME REQUIRED
        if (!nameRegex.test(fullName) || fullName.length < 2 || fullName.length > 50) {
            setError("Please enter a valid full name (letters and spaces only, 2–50 chars).");
            setSubmitting(false);
            return;
        }

        // MOBILE REQUIRED
        if (!mobileRegex.test(mobile)) {
            setError("Please enter a valid 10-digit mobile number.");
            setSubmitting(false);
            return;
        }

        // EMAIL OPTIONAL → VALIDATE ONLY IF USER TYPED SOMETHING
        if (email && !emailRegex.test(email)) {
            setError("Please enter a valid professional email address.");
            setSubmitting(false);
            return;
        }

        // COURSE OPTIONAL → NO NEED TO CHECK FOR EMPTY
        // Already filtered by input sanitization

        // COUNTRY OPTIONAL → DO NOT VALIDATE IF EMPTY

        // CHECKBOX REQUIRED
        if (!agree) {
            setError("You must authorize us to contact you.");
            setSubmitting(false);
            return;
        }

        if (!executeRecaptcha) {
            setError("Captcha failed. Please refresh and try again.");
            setSubmitting(false);
            return;
        }
        const captchaToken = await executeRecaptcha("enquiry_form");
        // console.log("🟢 Captcha Token Generated:", captchaToken);

        try {
            const res = await fetch("/api/send-enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    email,
                    mobile: `+91${mobile}`,
                    course: selectedProgram,
                    country: selectedCountry,
                    recaptchaToken: captchaToken,
                }),
            });
            if (res.ok) {
                toast.success("Your enquiry has been sent!");
                setFullName("");
                setEmail("");
                setMobile("");
                setSelectedProgram("");
                setSelectedCountry("");
                setAgree(false);
                setSuccess("Your enquiry has been sent!");
                if (onSuccess) onSuccess();
            } else {
                setError("Failed to send enquiry. Please try again.");
            }
        } catch {
            setError("Failed to send enquiry. Please try again.");
        }
        setSubmitting(false);
    };

    return (
        <form className={`w-full flex flex-col gap-4 ${className || ""}`} onSubmit={handleSubmit} autoComplete="new-password">
            {/* Hidden dummy input to suppress autofill */}
            <input type="password" name="fakePassword" autoComplete="new-password" style={{ display: "none" }} tabIndex={-1} />
            {/* Hidden dummy input to further suppress autofill */}
            <input type="text" name="fakeusernameremembered" autoComplete="username" style={{ display: "none" }} tabIndex={-1} />
            <FormInput
                autoComplete="new-password"
                type="text"
                name="user_fullName"
                placeholder="Full Name *"
                value={fullName}
                onChange={e => {
                    // Allow alphabets, spaces, and dots for initials
                    const value = e.target.value.replace(/[^A-Za-z.\s]/g, "");
                    setFullName(value);
                }}
                required
            />
            <FormInput
                autoComplete="new-password"
                type="text"
                name="contact_email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                    const value = e.target.value
                        // remove % also
                        .replace(/[^a-zA-Z0-9@._-]/g, "")
                        .replace(/(@.*)@/g, "$1");

                    setEmail(value);
                }}
            />

            <FormInput
                autoComplete="new-password"
                type="tel"
                name="contact_mobile"
                placeholder="Mobile Number *"
                value={mobile}
                onChange={e => {
                    // Only allow up to 10 digits
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setMobile(value);
                }}
                required
            />
            <FormInput
                autoComplete="new-password"
                type="text"
                name="user_course"
                placeholder="Course"
                value={selectedProgram}
                onChange={(e) => {
                    const value = e.target.value
                        .replace(/[^A-Za-z .-]/g, ""); // no numbers allowed
                    setSelectedProgram(value);
                }}
            />
            <Dropdown
                options={countryOptions}
                selected={selectedCountry}
                placeholder="Country"
                onSelect={setSelectedCountry}
                openDropdown={setOpenDropdownName}
                openName={openDropdownName}
            />
            <label className="flex items-start gap-1 text-xs text-white">
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={e => setAgree(e.target.checked)}
                    required
                    className="accent-(--orange)"
                />
                <span className=" leading-3.5">You authorize us to call, email, or SMS you at any time.
                </span>
            </label>
            <AnimatedButton
                type="submit"
                bgColor="bg-(--white)"
                textColor="text-(--white)"
                hoverTextColor="group-hover:text-(--orange)"
                skewColor="bg-(--orange)"
                className="px-4 py-2"
                disabled={submitting}
            >
                {submitting ? "Submitting..." : buttonText}
            </AnimatedButton>
            {/* {success && <Paragraph className="text-white mt-2">{success}</Paragraph>} */}
            {error && <Paragraph className="text-(--red) mt-2">{error}</Paragraph>}
        </form>
    );
};

export default EnquiryFormFields;

