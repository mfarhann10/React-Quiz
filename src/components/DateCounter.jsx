import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function DateCounter() {
  function reducer(state, action) {
    console.log(state, action);

    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + state.step };
      case "dec":
        return { ...state, count: state.count - state.step };
      case "setCount":
        return { ...state, count: action.payload };
      case "setState":
        return { ...state, step: action.payload };
      case "reset":
        return initialState;
      default:
        throw new Error("Unknown Action");
    }
  }

  const [state, dispacth] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    dispacth({ type: "dec" });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispacth({ type: "inc" });
  };

  const defineCount = function (e) {
    //setCount(Number(e.target.value));
    dispacth({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispacth({ type: "setState", payload: Number(e.target.value) });
  };

  const reset = function () {
    //setCount(0);
    // setStep(1);
    dispacth({ type: "reset" });
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6">
      {/* Step Range Input */}
      <div className="flex items-center gap-4">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
          className="w-full cursor-pointer accent-blue-600"
        />
        <span className="text-lg font-medium text-gray-700">{step}</span>
      </div>

      {/* Count Controls */}
      <div className="flex justify-between items-center">
        <button
          onClick={dec}
          className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600"
        >
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={defineCount}
          className="w-20 text-center border border-gray-300 rounded-lg p-2"
        />
        <button
          onClick={inc}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
        >
          +
        </button>
      </div>

      {/* Date Display */}
      <p className="text-center text-lg font-semibold text-gray-800">
        {date.toDateString()}
      </p>

      {/* Reset Button */}
      <div className="flex justify-center">
        <button
          onClick={reset}
          className="px-6 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default DateCounter;
