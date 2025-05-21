'use client';

import { motion } from 'framer-motion';

const mockLeaderboard = [
  { username: 'AlphaCoder', score: 1250 },
  { username: 'JSNinja', score: 1190 },
  { username: 'BugCrusher', score: 1130 },
  { username: 'DevWizard', score: 1080 },
  { username: 'AsyncApe', score: 1025 },
  { username: 'NullPointer', score: 1000 },
];

const badgeEmoji = ['🥇', '🥈', '🥉'];

export default function Leaderboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white flex flex-col items-center px-4 py-12 relative">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 text-center z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🧠 Leaderboard
      </motion.h1>

      <div className="w-full max-w-2xl bg-white bg-opacity-5 backdrop-blur-md rounded-2xl shadow-lg p-6 space-y-4 z-10">
        {mockLeaderboard.map((player, index) => (
          <motion.div
            key={player.username}
            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
              index < 3 ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-white bg-opacity-10'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold w-6">
                {index < 3 ? badgeEmoji[index] : index + 1}
              </span>
              <span className="font-medium">{player.username}</span>
            </div>
            <span className="text-lg font-semibold">{player.score} XP</span>
          </motion.div>
        ))}
      </div>

      {/* Background animated canvas (optional reuse) */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-gradient bg-gradient-to-br from-[#1e1e2f] via-[#2c2c3c] to-[#1b1b2c] opacity-70" />
    </main>
  );
}
