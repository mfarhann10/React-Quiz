/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

//1 create context
const QuizContext = createContext();

const SECS_TIME = 30;

const initialState = {
  questions: [],

  //loading, error, ready, active, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
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
        secondsRemaining: state.questions.length * SECS_TIME,
      };
    case "newAnswer": {
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
    }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action");
  }
}

//2 create provider
function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        dispatch,
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

//4 create custome hooks
function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error("Unknown Context");

  return context;
}

export { QuizProvider, useQuiz };
