import React, { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What is EthAI?', answer: 'EthAI is a platform leveraging AI for market insights.' },
    { question: 'How does Tokenomics work?', answer: 'Tokenomics involves the distribution and utility of tokens within the EthAI ecosystem.' },
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="w-full max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="p-4 bg-gray-800 rounded-lg"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-xl font-semibold cursor-pointer">{faq.question}</h3>
            {openIndex === index && (
              <p className="text-gray-300 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
