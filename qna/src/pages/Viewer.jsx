import { useParams } from "react-router-dom";
import Card from "./Card";
import "./Viewer.css";
import { useState } from "react";

const Viewer = ({ data, total }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  console.log(`Viewer: ${JSON.parse(JSON.stringify(params))}`);
  console.log(params);
  console.log(`Viewer: ${JSON.parse(JSON.stringify(data))}`);
  console.log(total);
  console.log(data);

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextCard = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="viewer">
      <Card
        question={data[currentIndex].content.question}
        answer={data[currentIndex].content.answer}
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
