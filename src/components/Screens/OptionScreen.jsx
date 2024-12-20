/* eslint-disable react/prop-types */
function OptionScreen({ question }) {
  return (
    <div className="flex flex-col gap-3 mb-8">
      {question.options.map((option) => (
        <button
          className="w-full px-4 py-3 text-left text-lg font-semibold bg-[#495057] text-white rounded-md shadow-md hover:bg-[#1098ad] focus:outline-none focus:ring-2 focus:ring-[#ffa94d] transition duration-300"
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default OptionScreen;
