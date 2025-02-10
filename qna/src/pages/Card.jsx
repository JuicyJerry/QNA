const Card = ({ question, index, total }) => {
  console.log(`Card: ${question}`);
  console.log(`Card: ${index}`);
  console.log(`Card: ${total}`);

  return (
    <div>
      <h3>Card</h3>
      <div className="card question">
        <h2>
          Question
          <span>
            {index} / {total}
          </span>
        </h2>
        <p>{question.question}</p>
        <button type="button">Answer</button>
      </div>
      <div className="card answer">
        <h3>Answer</h3>
        <p>{question.answer}</p>
      </div>
    </div>
  );
};

export default Card;
