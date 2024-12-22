import { useEffect } from "react";

/* eslint-disable react/prop-types */
function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
    },
    [dispatch]
  );
  return (
    <div className=" px-6 py-3 rounded-full bg-gray-400 text-[#ced4da] font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600 active:scale-95">
      <p>{secondsRemaining}</p>
    </div>
  );
}

export default Timer;
