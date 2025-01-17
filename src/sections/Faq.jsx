import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: "How much time do I need to volunteer?",
    answer:
      "Neque laoreet suspendisse interdum consectetur libero. Lacinia quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl pretium fusce id velit. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet cursus sit amet dictum sit amet.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer various types of support including financial aid, emotional support, and practical assistance. Our team is dedicated to helping in any way we can.",
  },
  {
    question: "How can I get involved in your organization?",
    answer:
      "There are many ways to get involved, from volunteering your time to making donations. You can also participate in our events or spread awareness about our cause.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Your donations go directly towards supporting our various programs and initiatives. We ensure transparency in our financial reports which are available on our website.",
  },
];

const FAQItem = ({ item, isOpen, toggleOpen }) => (
  <div className="mb-4">
    <button
      className={`w-full text-left p-4 flex justify-between items-center ${
        isOpen ? "bg-[#54D4D4] text-white" : "bg-[#F5F5F5]"
      } rounded-lg`}
      onClick={toggleOpen}
    >
      <span className="font-semibold text-xl">{item.question}</span>
      {isOpen ? <ChevronUp className="flex-shrink-0" /> : <ChevronDown className="flex-shrink-0" />}
    </button>
    {isOpen && <div className="mt-2 p-4 text-[#6F7775]">{item.answer}</div>}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-[#9F5FFE] text-xl font-semibold mb-2">Need Help?</h3>
          <h2 className="text-[#1D1D1D] text-4xl font-semibold mb-4">The Answers to All Your Questions</h2>
          <p className="text-[#6F7775] max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="w-12 h-0.5 bg-[#9F5FFE] mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={index === openIndex}
              toggleOpen={() => setOpenIndex(index === openIndex ? null : index)}
            />
          ))}
        </div>
      </div>

     
    </section>
  );
};

export default FAQSection;
