/* eslint-disable react/prop-types */
function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="px-6 py-3 rounded-lg bg-gray-500 text-white font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600 active:scale-95"
      onClick={() => {
        dispatch({ type: "nextQuestion" });
      }}
    >
      Next
    </button>
  );
}

export default NextButton;
