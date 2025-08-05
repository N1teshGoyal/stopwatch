import { useState } from "react";

export default function Accordions() {
  const que = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces",
    },
    {
      id: 2,
      question: "What is Vite?",
      answer: "Vite is a build tool that provides fast development and hot module replacement",
    },
  ];

  const [visibleAnswers, setVisibleAnswers] = useState(
    Array(que.length).fill(false)
  );

  const handleClick = (index) => {
    const updated = [...visibleAnswers];
    updated[index] = !updated[index];
    setVisibleAnswers(updated);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Accordions</h1>
      <div className="w-full max-w-md space-y-4">
        {que.map((item, index) => (
          <div key={item.id} className="bg-white shadow-md rounded-md p-4">
            <h2
              onClick={() => handleClick(index)}
              className="text-lg font-semibold text-gray-700 cursor-pointer hover:text-blue-600 transition"
            >
              {item.question}
            </h2>
            {visibleAnswers[index] && (
              <p className="mt-2 text-gray-600 pl-4 border-l-2 border-blue-500">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
