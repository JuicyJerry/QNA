import { useReducer, useRef, createContext } from "react";
import mockData from "../public/data/mock.json";
import reducer from "../_reducers/index";

export const QuestionsContext = createContext();

export const QuestionProvider = ({ children }) => {
  const idRef = useRef(3);
  const initialState = {
    questions: mockData,
    isLogin: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuestionProvider.Provider
      value={{
        state,
        dispatch,
        idRef,
      }}
    >
      {children}
    </QuestionProvider.Provider>
  );
};
