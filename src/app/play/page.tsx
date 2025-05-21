// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import QuestionCard from '@/components/QuestionCard';
// import Stage2DragDrop from '../../components/Stage2DragDrop';
// import Stage3CodeComplete from '../../components/Stage3CodeComplete';
// import GameOverModal from '@/components/GameOverModal';
// import questions from '../../lib/question';

// export default function PlayPage() {
//   const [current, setCurrent] = useState(0);
//   const [score, setScore] = useState(0);
//   const [lives, setLives] = useState(3);
//   const [gameOver, setGameOver] = useState(false);
//   const [level, setLevel] = useState(1);
//   const [stage, setStage] = useState(1);

//   const nextStage = () => setStage((prev) => prev + 1);

//   const levelSize = 3;
//   const startIndex = (level - 1) * levelSize;
//   const endIndex = startIndex + levelSize;
//   const levelQuestions = questions.slice(startIndex, endIndex);

//   const handleAnswer = (correct: boolean) => {
//     if (correct) {
//       setScore(score + 10);
//       if (current + 1 < questions.length) {
//         setCurrent((prev) => prev + 1);
//       } else {
//         nextStage();
//       }
//     } else {
//       setLives((prev) => {
//         const updated = prev - 1;
//         if (updated <= 0) setGameOver(true);
//         return updated;
//       });
//     }
//   };

//   const restartGame = () => {
//     setCurrent(0);
//     setScore(0);
//     setLives(3);
//     setGameOver(false);
//     setLevel(1);
//     setStage(1);
//   };

//   if (gameOver || stage > 3) {
//     return <GameOverModal score={score} onRestart={restartGame} />;
//   }

//   const getStageComponent = () => {
//     switch (stage) {
//       case 1:
//         return (
//           <QuestionCard
//             question={levelQuestions[current]}
//             onAnswer={handleAnswer}
//           />
//         );
//       case 2:
//         return <Stage2DragDrop onComplete={nextStage} />;
//       case 3:
//         return <Stage3CodeComplete onComplete={nextStage} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-black px-6 py-10">
//       <motion.header
//         className="mb-8 text-white flex justify-between items-center w-full max-w-5xl px-6 text-sm sm:text-base"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="bg-slate-800 py-2 px-4 rounded-xl shadow text-white font-semibold">Score: {score}</div>
//         <div className="bg-slate-800 py-2 px-4 rounded-xl shadow text-white font-semibold">Lives: {lives}</div>
//         <div className="bg-slate-800 py-2 px-4 rounded-xl shadow text-white font-semibold">Stage: {stage}</div>
//         <div className="text-white mb-4">
//         Question {current + 1} of {questions.length}
//         </div>
//       </motion.header>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={stage}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -30 }}
//           transition={{ duration: 0.5 }}
//           className="w-full max-w-5xl flex justify-center"
//         >
//           {getStageComponent()}
//         </motion.div>
//       </AnimatePresence>
//     </main>
//   );
// }





'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuestionCard from '@/components/QuestionCard';
import Stage2DragDrop from '../../components/Stage2DragDrop';
import Stage3CodeComplete from '../../components/Stage3CodeComplete';
import GameOverModal from '@/components/GameOverModal';
import questions from '../../lib/question';

export default function PlayPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(1);
  const [stage, setStage] = useState(1);

  const levelSize = 3;
  const startIndex = (level - 1) * levelSize;
  const endIndex = startIndex + levelSize;
  const levelQuestions = questions.slice(startIndex, endIndex);

  const nextStage = () => {
    setStage((prev) => prev + 1);
    setCurrent(0); // Reset to first question for new stage
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore((prev) => prev + 10);
      if (current + 1 < levelQuestions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        nextStage();
      }
    } else {
      setLives((prev) => {
        const updated = prev - 1;
        if (updated <= 0) setGameOver(true);
        return updated;
      });
    }
  };

  const restartGame = () => {
    setCurrent(0);
    setScore(0);
    setLives(3);
    setGameOver(false);
    setLevel(1);
    setStage(1);
  };

  if (gameOver || stage > 3) {
    return <GameOverModal score={score} onRestart={restartGame} />;
  }

  const getStageComponent = () => {
    switch (stage) {
      case 1: {
        const currentQuestion = levelQuestions[current];
        return currentQuestion ? (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        ) : null;
      }
      case 2:
        return <Stage2DragDrop onComplete={nextStage} />;
      case 3:
        return <Stage3CodeComplete onComplete={nextStage} />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-black px-6 py-10">
      <motion.header
        className="mb-8 text-white flex justify-between items-center w-full max-w-5xl px-6 text-sm sm:text-base"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-slate-800 py-2 px-4 rounded-xl shadow text-white font-semibold">Score: {score}</div>
        <div className="bg-slate-800 py-2 px-4 rounded-xl shadow text-white font-semibold">Lives: {lives}</div>
        <div className="bg-slate-800 py-2 px-4 rounded-xl shadow text-white font-semibold">Stage: {stage}</div>
        <div className="text-white mb-4">
          Question {current + 1} of {levelQuestions.length}
        </div>
      </motion.header>

      <AnimatePresence mode="wait">
        <motion.div
          key={stage + '-' + current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl flex justify-center"
        >
          {getStageComponent()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}