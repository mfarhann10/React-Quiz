/* eslint-disable react/prop-types */
function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div className="bg-[#1098ad] rounded-3xl py-6 px-9 mb-6">
      <p>
        <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
    </div>
  );
}

export default FinishScreen;
