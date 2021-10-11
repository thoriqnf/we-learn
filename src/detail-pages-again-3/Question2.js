import Answer from "../detail-pages-again-3/Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question2 = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion2 = quizState.questions[quizState.currentQuestion2Index];
  return (
    <div>
      <div className="question">{currentQuestion2.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion2.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question2;