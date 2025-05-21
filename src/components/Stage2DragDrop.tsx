'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  onComplete: () => void;
};

export default function Stage2DragDrop({ onComplete }: Props) {
  const [completed, setCompleted] = useState(false);

  const handleDropCorrect = () => {
    setCompleted(true);
    setTimeout(onComplete, 1000);
  };

  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">🧩 Match the Diagram</h2>

      {!completed ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-700 mb-2">Drag the correct shape into the box: Circle </p>

          <div className="flex justify-center items-center gap-4">
            <div
              draggable
              onDragStart={(e) => e.dataTransfer.setData('shape', 'circle')}
              className="w-12 h-12 bg-blue-500 rounded-full cursor-grab"
            ></div>

            <div
              draggable
              onDragStart={(e) => e.dataTransfer.setData('shape', 'square')}
              className="w-12 h-12 bg-green-500 rounded-md cursor-grab"
            ></div>
          </div>

          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const data = e.dataTransfer.getData('shape');
              if (data === 'circle') handleDropCorrect();
            }}
            className="w-32 h-32 border-2 border-dashed border-gray-400 flex items-center justify-center mt-6"
          >
            Drop Here
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-green-600 font-bold text-xl text-center"
        >
          ✅ Correct! Moving to Stage 3...
        </motion.div>
      )}
    </div>
  );
}
