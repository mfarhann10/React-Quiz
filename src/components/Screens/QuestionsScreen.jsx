import OptionScreen from "./OptionScreen";

/* eslint-disable react/prop-types */
function QuestionsScreen({ question, dispatch, answer }) {
  return (
    <div className="flex flex-col ">
      <h4 className="text-2xl font-bold text-[#ffa94d]">{question.question}</h4>
      <OptionScreen question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default QuestionsScreen;
