import "./Faq.css"
import { useState } from 'react';
import FaqModal from '../../components/faq-modal/FaqModal.jsx';
const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide end-to-end digital solutions including website development, responsive UI design, backend systems, and performance optimization to help businesses build reliable and scalable digital products.",
  },
  {
    question: "How does your development process work?",
    answer:
      "Our process typically involves four steps: understanding your requirements, designing the user interface, developing the product, and finally testing and launching the solution.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on complexity. A typical website project may take between 2–6 weeks from planning to deployment.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on project requirements such as design complexity, number of pages, and functionality. After understanding your needs, we provide a clear and transparent quote. ",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      " Yes. We offer ongoing support and maintenance services to ensure your website stays secure, updated, and performing well.",
  },
  ,
  {
    question: "Can you redesign an existing website?",
    answer:
      " Absolutely. We can improve the design, performance, and functionality of your current website while keeping your existing content and structure if needed.",
  },
  ,
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes. We work with clients globally and collaborate through online meetings, messaging, and project management tools. ",
  },
  ,
  {
    question: "How can we start working together?",
    answer:
      " You can reach out through our contact form or schedule a consultation to discuss your project requirements.",
  },
  ,
  {
    question: "Still have questions?",
    answer: " Contact us and we'll be happy to discuss your project.",
  },
];
const Faq = () => {
     const [openIndex, setOpenIndex] = useState(null);

     const toggleFAQ = (index) => {
       setOpenIndex(openIndex === index ? null : index);
     };
  return (
    <div className="faq-bg">
      <div className="faq-text">
        <h2>
          Frequently Asked <span>Questions</span> 
        </h2>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FaqModal
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Faq
