/* eslint-disable react/prop-types */
function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="px-6 py-3 rounded-full bg-gray-500 text-white font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600 active:scale-95"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="px-6 py-3 rounded-full bg-gray-500 text-white font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600 active:scale-95"
        onClick={() => {
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
}

export default NextButton;
