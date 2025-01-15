import { useQuiz } from "../../context/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <div className="bg-[#1098ad] rounded-3xl py-6 px-9 mb-6">
        <p>
          <strong>{points}</strong> out of {maxPossiblePoints} (
          {Math.ceil(percentage)}%)
        </p>
      </div>
      <p>(Highscore : {highscore} points)</p>
      <button
        className="px-6 py-3 rounded-lg bg-gray-500 text-white font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600 active:scale-95"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restar Quiz
      </button>
    </>
  );
}

export default FinishScreen;
