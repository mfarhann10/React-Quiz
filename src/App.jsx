/* eslint-disable no-case-declarations */
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Error from "./components/Handling/Error";
import Loader from "./components/Handling/Loader";
import StartScreen from "./components/Screens/StartScreen";
import QuestionsScreen from "./components/Screens/QuestionsScreen";
import NextButton from "./components/NextButton";

const initialState = {
  questions: [],

  //loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
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
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        //update points or score
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((e) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#343a40] text-[#f1f3f5] p-8">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <Main>
          <div className="flex flex-col items-center gap-6 text-lg font-semibold">
            {status === "loading" && <Loader />}
            {status === "failed" && <Error />}
            {status === "ready" && (
              <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
            )}
            {status === "active" && (
              <>
                <QuestionsScreen
                  question={questions[index]}
                  dispatch={dispatch}
                  answer={answer}
                />
                <NextButton answer={answer} dispatch={dispatch} />
              </>
            )}
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
