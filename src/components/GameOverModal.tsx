export default function GameOverModal({
  score,
  onRestart,
}: {
  score: number;
  onRestart: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Game Over</h2>
      <p className="text-xl mb-6">Final Score: {score}</p>
      <button
        onClick={onRestart}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
      >
        Play Again
      </button>
    </div>
  );
}