import { useParams } from "react-router-dom";
import Card from "./Card";
import "./Viewer.css";
import { useState, useContext } from "react";
import { QuestionsContext } from "../App";

// const Viewer = ({ data, total }) => {
const Viewer = () => {
  const { state, total } = useContext(QuestionsContext);
  console.log(state);

  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  console.log(params);

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextCard = () => {
    if (currentIndex < state.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="viewer">
      <Card
        question={state[currentIndex].content.question}
        answer={state[currentIndex].content.answer}
        index={currentIndex + 1}
        total={total}
        prevCard={prevCard}
        nextCard={nextCard}
        flipped={false}
      />
    </div>
  );
};

export default Viewer;
