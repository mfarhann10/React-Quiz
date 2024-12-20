/* eslint-disable react/prop-types */
function OptionScreen({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  const btn =
    "w-full text-left px-4 py-2 rounded-lg border transition-transform transform hover:translate-x-5 hover:bg-gray-300";
  const userAnswer = "translate-x-8";
  const correct = "bg-teal-500 border-teal-500 text-white";
  const wrong = "bg-orange-400 border-orange-400 text-gray-900";
  return (
    <div className="flex flex-col gap-3 mb-8">
      {question.options.map((option, index) => (
        <button
          className={`${btn} ${index === answer ? userAnswer : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? correct
                : wrong
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default OptionScreen;
