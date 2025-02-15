import { useParams } from "react-router-dom";
import Card from "./Card";
import { useState, useContext } from "react";
import { QuestionsContext } from "../App";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  & .card {
    box-sizing: border-box;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 10px;
    transition: all 1.3s ease-in-out;
    transform: rotateY(0deg);
    position: relative;
  }
  & .card h3 {
    font-size: 20px;
  }
  & .question {
    width: 100%;
    margin: 0 auto;
    // margin-bottom: auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
  }
  & .answer {
    width: 100%;
    display: flex;
    flex-direction: column;
    // margin-bottom: auto;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
  & .question button,
  & .answer button {
    width: 50px;
    height: 40px;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    border: 0;
    font-weight: 700;
  }
  & .question button[name="prev"],
  & .answer button[name="prev"] {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  & .question button[name="next"],
  & .answer button[name="next"] {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  & .flipButtons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  &.flipped {
    transform: rotateY(360deg);
    transition: all 1.3s ease-in-out;
  }
`;

const Viewer = () => {
  const { state, total } = useContext(QuestionsContext);
  console.log("Viewer[state]: ", state);

  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  console.log(params);

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextCard = () => {
    if (currentIndex < state.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="viewer">
      <CardWrapper>
        <Card
          question={state.questions[currentIndex].content.question}
          answer={state.questions[currentIndex].content.answer}
          index={currentIndex + 1}
          total={total}
          prevCard={prevCard}
          nextCard={nextCard}
          flipped={false}
        />
      </CardWrapper>
    </div>
  );
};

export default Viewer;
