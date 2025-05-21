'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  onComplete: () => void;
};

export default function Stage3CodeComplete({ onComplete }: Props) {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const correctAnswer = 'for';

  const checkAnswer = () => {
    if (input.trim() === correctAnswer) {
      setFeedback('correct');
      setTimeout(onComplete, 1000);
    } else {
      setFeedback('wrong');
    }
  };

  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg max-w-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">👨‍💻 Code Completion</h2>
      <p className="mb-2 text-sm text-gray-700">
        Fill in the missing keyword in this loop:
      </p>
      <pre className="bg-gray-200 p-4 rounded font-mono text-sm mb-4">
{`___ (let i = 0; i < 5; i++) {
  console.log(i);
}`}
      </pre>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Your answer here..."
      />
      <button
        onClick={checkAnswer}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full"
      >
        Submit
      </button>

      {feedback === 'correct' && (
        <motion.p
          className="text-green-600 mt-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Well done!
        </motion.p>
      )}
      {feedback === 'wrong' && (
        <motion.p
          className="text-red-600 mt-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ❌ Try again!
        </motion.p>
      )}
    </div>
  );
}
