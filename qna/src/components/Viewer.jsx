const Viewer = ({ data, current, total }) => {
  console.log(data);

  return (
    <div className="viewer">
      <h3>Viewer 페이지</h3>
      {data.map((question, index) => {
        <div className="card question">
          <h2>
            Question
            <span>
              {index} / {total}
            </span>
          </h2>
          <p>{question.question}</p>
          <button type="button">Answer</button>
        </div>;

        <div className="card answer">
          <h3>Answer</h3>
          <p>{question.answer}</p>
        </div>;
      })}
    </div>
  );
};

export default Viewer;
