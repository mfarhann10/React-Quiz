import { useEffect } from "react";

/* eslint-disable react/prop-types */
function Timer({ dispatch, secondsRemaining }) {
  const min = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="flex items-center justify-center w-20 h-12 rounded-full bg-gray-400 text-[#ced4da] font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600 active:scale-95">
      <p>
        {min < 10 && "0"}
        {min}: {seconds < 10 && "0"}
        {seconds}
      </p>
    </div>
  );
}

export default Timer;
