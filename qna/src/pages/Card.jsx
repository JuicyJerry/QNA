import { useState, useEffect } from "react";
// import "./Card.css";

const Card = ({ question, answer, index, total, prevCard, nextCard }) => {
  console.log(`Card: ${question}`);
  console.log(`Card: ${index}`);
  console.log(`Card: ${total}`);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => setIsFlipped((flip) => !flip);

  useEffect(() => {
    setIsFlipped(false);
  }, [index]);

  return (
    <div
      onKeyDown={(e) => e.key === "Enter" && handleFlip()}
      onClick={() => handleFlip()}
      tabIndex={0}
      className={`card ${isFlipped ? "flipped" : ""}`}
    >
      {/* <h3>Card</h3> */}
      {total <= 0 ? (
        <p>등록된 콘텐츠가 없습니다. 먼저 Controller에서 등록해주세요.</p>
      ) : isFlipped ? (
        <div className="answer">
          <h3>[Answer]</h3>
          <p>{answer}</p>
          <div className="flipButtons">
            {index > 1 && (
              <button onClick={prevCard} type="button" name="prev">
                Prev
              </button>
            )}
            {index < total && (
              <button onClick={nextCard} type="button" name="next">
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="question">
          <h3>
            [Question]
            <span>
              {index} / {total}
            </span>
          </h3>
          <p>{question}</p>
          <div className="flipButtons">
            {index > 1 && (
              <button onClick={prevCard} type="button" name="prev">
                Prev
              </button>
            )}
            {index < total && (
              <button onClick={nextCard} type="button" name="next">
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
