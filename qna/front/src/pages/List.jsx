import { QuestionsContext } from "../App";
import { useContext } from "react";

const List = () => {
  const { state, total } = useContext(QuestionsContext);
  console.log("List[state]: ", state);
  console.log("List[total]: ", total);

  return (
    <div className="list">
      <p className="total">
        총 개수 <span>{total}</span>
      </p>
      <ul>
        {total > 0 ? (
          state.map((element, index) => {
            return (
              <li className={`list-${index}`} key={`list-${index}`}>
                {/* <p>{element.id}</p> */}
                <p className={`list-${index}`}>{element.content.question}</p>
                <p>{element.content.answer}</p>
              </li>
            );
          })
        ) : (
          <p>등록된 Question이 없습니다.</p>
        )}
      </ul>
    </div>
  );
};

export default List;
