import "./Controller.css";
import { useState, useRef, useContext } from "react";
import { QuestionsContext } from "../App";

const Controller = () => {
  const { createDate, onClickButton } = useContext(QuestionsContext);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="controller">
      {/* <h3>controller 페이지</h3> */}
      <div className="question">
        <label htmlFor="question">Question: </label>
        <input
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          name="question"
          id="question"
        />
        {question.length < 5 && (
          <span className="warning">5글자 이상 입력해주세요</span>
        )}
      </div>

      <div className="answer">
        <label htmlFor="answer">Answer: </label>
        <textarea
          onChange={(e) => setAnswer(e.target.value)}
          id="answer"
          name="answer"
          rows={5}
          cols={33}
        ></textarea>
        {answer.length < 5 && (
          <span className="warning">5글자 이상 입력해주세요</span>
        )}
      </div>

      <div className="save">
        <button
          onClick={() => {
            console.log(question);
            console.log(answer);
            if (question.length >= 5 && answer.length >= 5) {
              onClickButton(1);
              createDate({
                question: question,
                answer: answer,
              });
            } else {
              alert("먼저, Question과 Answer를 입력해주세요.");
            }
          }}
          type="button"
        >
          추가
        </button>
      </div>
    </div>
  );
};

export default Controller;
