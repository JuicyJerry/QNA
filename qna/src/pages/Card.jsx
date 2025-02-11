import { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ question, answer, index, total, prevCard, nextCard }) => {
  console.log(`Card: ${question}`);
  console.log(`Card: ${index}`);
  console.log(`Card: ${total}`);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => setIsFlipped((prev) => !prev);

  useEffect(() => {
    setIsFlipped(false);
  }, [index]);

  return (
    <div
      onKeyDown={(e) => e.key === "Enter" && handleFlip()}
      tabIndex={0}
      className={`card ${isFlipped ? "flipped" : ""}`}
    >
      <h3>Card</h3>
      {isFlipped ? (
        <div className="answer">
          <p>[Answer]</p>
          <p>{answer}</p>
          <div className="flipButtons">
            <button onClick={prevCard} type="button">
              Prev
            </button>
            <button onClick={nextCard} type="button">
              Next
            </button>
          </div>
        </div>
      ) : (
        <div onClick={handleFlip} className="question">
          <p>
            [Question]
            <span>
              {index} / {total}
            </span>
          </p>
          <p>{question}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
