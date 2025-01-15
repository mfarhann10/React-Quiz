import { useQuiz } from "../../context/QuizContext";
import OptionScreen from "./OptionScreen";

function QuestionsScreen() {
  const { questions, index } = useQuiz();
  const question = questions[index];

  return (
    <div className="flex flex-col ">
      <h4 className="text-2xl font-bold text-[#ffa94d] mb-4">
        {question.question}
      </h4>
      <OptionScreen />
    </div>
  );
}

export default QuestionsScreen;
