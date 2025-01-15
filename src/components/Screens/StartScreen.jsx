import { useQuiz } from "../../context/QuizContext";

/* eslint-disable react/no-unescaped-entities */
function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h2 className="text-3xl font-bold text-[#ffa94d]">
        Welcome to React Quiz!
      </h2>
      <h3 className="text-xl text-gray-400">
        {numQuestions} Questions to test your React mastery
      </h3>
      <button
        className="px-6 py-3 bg-[#1098ad] text-white font-semibold rounded-full hover:bg-[#0e7c93] transition duration-300"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
