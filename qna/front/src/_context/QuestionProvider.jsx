import { useReducer, useRef, createContext, useEffect, useState } from "react";
import reducer from "../_reducers/index";
import axios from "axios";

export const QuestionsContext = createContext();
export const QuestionProvider = ({ children }) => {
  const [mockData, setMockdata] = useState([]);
  const initialState = {
    questions: mockData,
    // questions: mockData,
    isLogin: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/mock.json");
        console.log("[QuestionProvider]fetchData ---> ", response);
        if (response.data) {
          setMockdata(response.data);
        } else {
          alert("mock data 없음");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <QuestionsContext.Provider
      value={{
        state,
        dispatch,
        idRef,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
