import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Span from "@/components/Span";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <Section className="py-10 sm:py-20 ">
        <div className="rounded-md overflow-hidden xl:h-[550px]">
          <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] xl:grid-cols-[2fr_1fr]">
            <div className="bg-(--teal) text-white flex p-6 lg:p-12 xl:p-16">
              <div className="">
                <Heading
                  level={1}
                  className="font-extrabold mb-8 xl:mb-14 text-(--orange)"
                >
                  CONTACT
                </Heading>
                <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-20 text-sm">
                  <div>
                    <div>
                      <Paragraph size="base" className=" mb-5">
                        Whether you have questions, require details, or simply
                        want to connect, reach out to us—we’re always here to
                        help and listen.
                      </Paragraph>
                    </div>
                    <div>
                      <Span className="font-semibold text-(--orange)">
                        Follow us
                      </Span>
                      <div className="mt-2 flex gap-2">
                        <Link
                          href="#"
                          aria-label="Facebook"
                          className="hover:text-(--white)"
                        >
                          <FaFacebookF className="w-5 h-5" />
                        </Link>
                        <Link
                          href="#"
                          aria-label="Instagram"
                          className="hover:text-(--white)"
                        >
                          <FaInstagram className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-1 mt-4 xl:mt-0">
                    <div className="xl:mb-4">
                      <Span className="font-semibold text-(--orange)">
                        Address (Seawoods)
                      </Span>
                      <Paragraph size="base" className="mt-1">
                        Office No. 10, Shah Heritage,
                        <br />
                        Plot No. 9, Sector 42/A,
                        <br />
                        Opp. D-Mart, Seawoods (W),
                        <br />
                        Navi Mumbai-400706
                      </Paragraph>
                    </div>
                    {/* <div className="mb-4">
                      <Span className="font-semibold text-black/50">
                        Address (Koparkhairane)
                      </Span>
                      <Paragraph size="base" className="mt-1">
                        Shop no 3, Anmol Terrace CHS Ltd,
                        <br />
                        Sector 5, Koparkhairane Rd,
                        <br />
                        Opposite Lokmanya Tilak college,
                        <br />
                        Navi Mumbai -400709
                      </Paragraph>
                    </div> */}
                  </div>
                </div>
                <div className="mt-4">
                  <Paragraph size="base" className="font-semibold text-(--orange)">
                    General enquiries
                  </Paragraph>
                </div>
                <div className="mb-4 grid xl:grid-cols-2 xl:gap-20 font-semibold">
                  <div className="font-bold">
                    <Paragraph size="lg" className="mt-1">
                      <a href="mailto:info@skillupstudyabroad.com" className="hover:underline">
                        info@skillupstudyabroad.com
                      </a>
                    </Paragraph>
                    <Paragraph size="lg" className="mt-1">
                      <a href="mailto:admission@skillupstudyabroad.com" className="hover:underline">
                        admission@skillupstudyabroad.com
                      </a>
                    </Paragraph>
                  </div>
                  <div className="font-bold">
                    <Paragraph size="lg" className="mt-1">
                      <a href="tel:+919820588082" className="hover:underline">
                        +91-98205 88082
                      </a>
                    </Paragraph>
                    <Paragraph size="lg" className="mt-1">
                      <a href="tel:+919930180955" className="hover:underline">
                        +91-99301 80955
                      </a>
                    </Paragraph>
                  </div>

                </div>

                <div className="grid lg:grid-cols-2 xl:gap-20 xl:mt-8">
                  <div className="mb-4">
                    <Span className="font-semibold uppercase">
                      SeaWoods (W), <br /> Navi Mumbai
                    </Span>
                  </div>
                  <div className="mb-4">
                    <Span className="font-semibold text-(--orange)">Working Hours</Span><br />
                    <Span className="font-semibold">
                      MON - FRI : 10:00 AM - 7:00 PM <br />
                    </Span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <Image
                src="/contact/contact.webp"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.253993367129!2d73.01331777520397!3d19.01806428217047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c397f30d1ed1%3A0x60b36d6304bf2fb8!2sShah%20Heritage%20Chs%20Limited%20Jairam%20Tukaram%20Tandel%20Marg%2C%20Seawoods%20West%2C%20Karave%20Nagar%2C%20Seawoods%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706!5e0!3m2!1sen!2sin!4v1717690000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shah Heritage Seawoods Location"
        />
      </div>
    </>
  );
};

export default ContactUs;
