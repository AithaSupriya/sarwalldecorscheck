import React, { useState } from "react";
import faq from "../assets/faq.png";
import { FaQuestionCircle } from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";


const faqs = [
    {
        question: "What types of decor products does Sar Wall Decors offer?",
        answer:
            "We specialize in handcrafted fiber and metal decor, wall art, sculptures, and custom interior accents to elevate any space.",
    },
    {
        question: "Can I request a custom design for my home or office?",
        answer:
            "Absolutely! We take custom orders tailored to your space, style, and size requirements. Reach out to discuss your ideas with our design team.",
    },
    {
        question: "Do you deliver across India?",
        answer:
            "Yes! Sarwall Decors ships safely to major cities and towns throughout India, ensuring your decor arrives in perfect condition.",
    },
    {
        question: "How should I maintain my decor items?",
        answer:
            "Dust regularly with a soft cloth. Avoid harsh chemicals and prolonged exposure to direct sunlight to preserve colors and finishes.",
    },
    {
        question: "Are your products suitable for outdoor use?",
        answer:
            "Many of our products are weather-resistant and can be used both indoors and outdoors, adding charm to gardens, patios, and interiors alike.",
    },
    {
        question: "What is the usual delivery timeline for orders?",
        answer:
            "Orders are typically delivered within 7–14 working days, depending on the product type, customization, and shipping location.",
    },
];

const SarwallFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 sm:py-16 bg-[#2725661c]">
            <div className="container mx-auto px-4 md:px-16  max-w-7xl">

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* FAQ Section */}
                    <div className="lg:w-7/12 order-2 lg:order-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-6"
                            style={{
                                color: "#272566", // navy/dark blue color
                                fontFamily: "math",
                                fontWeight: 600,   // medium weight
                                fontSize: "2rem", // ~36px
                                lineHeight: "1.2",
                                textAlign: "center"
                            }}>
                            Frequently Asked Questions
                        </h3>
                        <div className="space-y-3">
                            {faqs.map((faqItem, index) => (
                                <div key={index} className="rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className={`flex justify-between items-center w-full px-5 py-4 text-left font-medium transition-colors rounded-lg ${openIndex === index
                                                ? "bg-black text-white"
                                                : "bg-[#272566] text-white hover:bg-indigo-900"
                                            }`}
                                    >
                                        {/* Question Text with Icon */}
                                        <div className="flex items-start gap-2 flex-1">
                                            <FaQuestionCircle className="mt-1 text-xl text-white flex-shrink-0" />
                                            <span className="text-white">{faqItem.question}</span>
                                        </div>

                                        {/* Arrow Icon on the Right */}
                                        <span
                                            className={`text-white transition-transform ${openIndex === index ? "rotate-180" : ""
                                                } ml-2 flex-shrink-0`}
                                        >
                                            <FaChevronDown />
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    {openIndex === index && (
                                        <div className="px-5 py-4 bg-white text-gray-800 border-t border-gray-200">
                                            {faqItem.answer}
                                        </div>
                                    )}
                                </div>

                            ))}
                        </div>
                    </div>

                    {/* FAQ Image */}
                    <div className="lg:w-5/12 order-1 lg:order-2">
                        <img
                            src={faq}
                            alt="Sarwall Decors FAQ"
                            className="w-full rounded-xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SarwallFAQ;