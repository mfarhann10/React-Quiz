import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Error from "./components/Handling/Error";
import Loader from "./components/Handling/Loader";
import StartScreen from "./components/Screens/StartScreen";

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
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  console.log(status);
  const numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((e) => dispatch({ type: "dataFailed" }));
  }, []);

  console.log(status);
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#343a40] text-[#f1f3f5] p-8">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <Main>
          <div className="flex flex-col items-center gap-6 text-lg font-semibold">
            {status === "loading" && <Loader />}
            {status === "failed" && <Error />}
            {status === "ready" && <StartScreen numQuestions={numQuestions} />}
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
