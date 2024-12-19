import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const initialState = {
  questions: [],

  //loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "failed",
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((e) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <Main>
        <div className="flex items-center justify-between text-lg font-semibold mb-4">
          <p>1/15</p>
          <p className="text-blue-600">Question</p>
        </div>
      </Main>
    </div>
  );
}

export default App;
