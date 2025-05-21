// src/components/GameLayout.tsx

'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GameLayoutProps {
  children: ReactNode;
  stage: number;
  score: number;
  lives: number;
  level: number;
}

const stageNames = [
  'Mind Benders',
  'Logic Craft',
  'Code Forge'
];

export default function GameLayout({
  children,
  stage,
  score,
  lives,
  level
}: GameLayoutProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-start py-10 px-4"
    >
      <div className="w-full max-w-3xl text-center mb-8">
        <h1 className="text-3xl font-bold tracking-wide mb-1">Stage {stage}: {stageNames[stage - 1]}</h1>
        <p className="text-lg text-gray-300">Level {level} | Score: {score} | Lives: {Array(lives).fill('❤️').join(' ')}</p>
      </div>
      <div className="w-full max-w-2xl">{children}</div>
    </motion.main>
  );
}