import { useParams } from "react-router-dom";
import Card from "./Card";

const Viewer = ({ data, total }) => {
  const params = useParams();
  console.log(...data);
  console.log(`Viewer: ${params}`);
  console.log(`Viewer: ${data}`);

  return (
    <div className="viewer">
      <h3>Viewer 페이지</h3>
      {data.map((element, index) => {
        return (
          <div key={`card-${index}`}>
            <h5>{element.question}</h5>
            <Card question={element.question} index={index + 1} total={total} />
            ;
          </div>
        );
      })}
    </div>
  );
};

export default Viewer;
