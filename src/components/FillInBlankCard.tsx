'use client';

import { useState } from 'react';

interface Question {
  question: string;
  answer: string;
}

export default function FillInBlankCard({
  question,
  onAnswer,
}: {
  question: Question;
  onAnswer: (correct: boolean) => void;
}) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    const correct = input.trim().toLowerCase() === question.answer.toLowerCase();
    onAnswer(correct);
    setInput('');
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
      <input
        className="w-full p-2 mb-4 text-black rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your answer"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white"
      >
        Submit
      </button>
    </div>
  );
}
