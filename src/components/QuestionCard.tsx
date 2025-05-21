interface Question {
  question: string;
  options: string[];
  answer: string;
}

export default function QuestionCard({
  question,
  onAnswer,
}: {
  question: Question;
  onAnswer: (correct: boolean) => void;
}) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
      <div className="grid gap-3">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg"
            onClick={() => onAnswer(opt === question.answer)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
