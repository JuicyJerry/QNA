import "./App.css";
import Viewer from "./pages/Viewer";
import Controller from "./pages/Controller";
import Home from "./pages/Home";
import List from "./pages/List";
import Notfound from "./pages/Notfound";
import {
  useState,
  useCallback,
  useReducer,
  useRef,
  useEffect,
  createContext,
} from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import styled from "@emotion/styled";
// import { db } from "./data/db.json";

const ListWrapper = styled.div`
  box-sizing: border-box;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px;

  & .list {
    position: relative;
    width: 100%;
    height: 100%;
  }
  & .list .total {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  & .list ul li:first-child {
    // margin-top: 50px;
  }
  & .list ul {
    margin-top: 50px;
    max-height: 280px;
    padding: 10px;
    overflow-y: scroll;
  }
  & .list ul::-webkit-scrollbar {
    width: 10px;
    height: 20px;
    margin-left: 5px;
  }
  & .list ul::-webkit-scrollbar-thumb {
    background: rgb(144, 182, 21);
    border-radius: 12px 12px 12px 12px;
  }
  & .list ul li {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 20px;
    position: relative;
  }
  & .list ul li p:first-child::after {
    content: "|";
    display: inline-block;
    text-align: right;
    position: absolute;
    right: 50%;
    color: #fff;
  }
`;
const HomeWrapper = styled.div`
  & .home {
    box-sizing: border-box;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 10px;
  }
`;
const ControllerWrapper = styled.div`
  & .controller {
    box-sizing: border-box;
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 5px;
  }
  & .controller .question,
  & .controller .answer {
    display: flex;
    flex-direction: column;
  }
  & .controller .question input[type="text"] {
    display: flex;
    flex-direction: column;
  }
  & .controller .question input[type="text"] {
    min-height: 80px;
    border-radius: 5px;
    height: auto;
  }
  & .controller .answer {
    min-height: 80px;
    border-radius: 5px;
  }
  & .controller .answer textarea {
    resize: none;
    border-radius: 5px;
  }
  & .controller .save {
    display: flex;
    justify-content: flex-end;
  }
  & .controller .save button[type="button"] {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    font-weight: 500;
  }
  & .controller .warning {
    padding-top: 4px;
    color: #482c2c;
    font-size: 10px;
  }
`;
const ViewerWrapper = styled.div`
  & .viewer {
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const mockData = [
  {
    id: `q-2`,
    content: {
      question: "두번째 질문입니다",
      answer: "두번째 대답입니다",
    },
    isDone: true,
  },
  {
    id: `q-1`,
    content: {
      question: "첫번째 질문입니다",
      answer: "첫번째 대답입니다",
    },
    isDone: true,
  },
];

function reudcer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const QuestionsContext = createContext();

function App() {
  const idRef = useRef(3);
  const [state, dispatch] = useReducer(reudcer, mockData);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  // const [data, setData] = useState([]);

  const onClickButton = (value) => {
    setTotal(total + value);
  };

  useEffect(() => {
    onClickButton(mockData.length);
  }, [mockData]);

  const createDate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: `q-${idRef.current++}`,
        content: content,
        isDone: true,
      },
    });

    // setData((prev) => [...prev, content]);
  }, []);

  const updateData = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const deleteData = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const nav = useNavigate();
  const onNavigateButton = () => {
    nav("/viewer");
  };

  return (
    <QuestionsContext.Provider
      value={{
        state,
        total,
        current,
        setCurrent,
        createDate,
        updateData,
        deleteData,
        onClickButton,
      }}
    >
      <div className="App">
        <h1>Question And Answer</h1>
        <div className="links">
          <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to={"/list"}
            className={location.pathname === "/list" ? "active" : ""}
          >
            List
          </Link>
          <Link
            to={"/viewer"}
            className={location.pathname === "/viewer" ? "active" : ""}
          >
            Viewer
          </Link>
          <Link
            to={"/controller"}
            className={location.pathname === "/controller" ? "active" : ""}
          >
            Controller
          </Link>
        </div>

        {/* <button onClick={onNavigateButton}>Viewer 페이지 이동</button> */}

        <Routes>
          <Route
            path="/"
            element={
              <HomeWrapper>
                <Home />
              </HomeWrapper>
            }
          />
          <Route
            path="/list"
            element={
              <ListWrapper>
                <List />
              </ListWrapper>
            }
          ></Route>
          <Route
            path="/viewer"
            element={
              <ViewerWrapper>
                <Viewer />
              </ViewerWrapper>
            }
          />
          <Route
            path="/controller"
            element={
              <ControllerWrapper>
                <Controller />
              </ControllerWrapper>
            }
          />
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </div>
    </QuestionsContext.Provider>
  );
}

export default App;
