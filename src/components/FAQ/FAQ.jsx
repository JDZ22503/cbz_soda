import React from "react";

const faqData = [
  {
    question: "What are the ingredients in the soda?",
    answer: "Carbonated water, Lemon, Salt, Black pepper powder, Cumin powder.",
  },
  {
    question: "What are the nutritional values of the soda?",
    answer:
      "Energy: 24 kcal, Carbohydrates: 0.350 g, Protein: 0.75 g, Fat: 0.50 g, Dietary Fiber: 1.25 g, Sodium: 1980 mg, Calcium: 2 mg, Iron: 0.05 mg."
  },
  
  {
    question: "What is the expiration date of the soda?",
    answer: "The soda is best consumed within 2 months, according to laboratory tests.",
  },
];

const FAQ = () => {
  const [active, setActive] = React.useState(null);

  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 py-4">
      <h1 className="text-3xl font-bold text-center pb-8">
        Frequently Asked Questions
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300">
          <div 
          className="flex justify-between items-center cursor-pointer py-4"
          onClick={() => handleClick(index)}>

            <h3 className="text-xl font-sans text-gray-800">{item.question}</h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>
          {active === index && (
            <div>
              <p className="text-gray-600"
              >{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
