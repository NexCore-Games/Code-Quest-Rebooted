// src/components/Level1.tsx
'use client';

import { useState } from 'react';
import QuestionCard from './QuestionCard';
import questions from '@/lib/question';

type Props = {
  level: number;
  onStageComplete: () => void;
  onCorrect: () => void;
  onWrong: () => void;
};

export default function Level1({
  level,
  onStageComplete,
  onCorrect,
  onWrong,
}: Props) {
  const [current, setCurrent] = useState(0);

  const levelSize = 3;
  const startIndex = (level - 1) * levelSize;
  const endIndex = startIndex + levelSize;
  const levelQuestions = questions.slice(startIndex, endIndex);

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      onCorrect();
      if (current + 1 < levelQuestions.length) {
        setCurrent(current + 1);
      } else {
        onStageComplete(); // move to Stage 2
      }
    } else {
      onWrong(); // lose life or game over
    }
  };

  return (
    <QuestionCard
      question={levelQuestions[current]}
      onAnswer={handleAnswer}
    />
  );
}
