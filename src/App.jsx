import Header from "./components/Header";
import Main from "./components/Main";
import Error from "./components/Handling/Error";
import Loader from "./components/Handling/Loader";
import StartScreen from "./components/Screens/StartScreen";
import QuestionsScreen from "./components/Screens/QuestionsScreen";
import NextButton from "./components/NextButton";
import ProgressScreen from "./components/Screens/ProgressScreen";
import FinishScreen from "./components/Screens/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { status, index } = useQuiz();
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#343a40] text-[#f1f3f5] p-8">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <Main>
          <div className="flex flex-col items-center gap-6 text-lg font-semibold">
            {status === "loading" && <Loader />}
            {status === "failed" && <Error />}
            {status === "ready" && <StartScreen />}
            {status === "active" && (
              <>
                <ProgressScreen />
                {/* need question[index] */}
                <QuestionsScreen />
                <Footer>
                  <Timer />
                  <NextButton />
                </Footer>
              </>
            )}
            {status === "finished" && <FinishScreen />}
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
