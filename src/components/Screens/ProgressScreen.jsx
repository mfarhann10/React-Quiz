import { useQuiz } from "../../context/QuizContext";

function ProgressScreen() {
  const { index, points, numQuestions, maxPossiblePoints, answer } = useQuiz();
  return (
    <header>
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <div className="flex flex-row items-center gap-80 text-center">
        <p>
          <strong>{index}</strong> / {numQuestions}
        </p>
        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </div>
    </header>
  );
}

export default ProgressScreen;
