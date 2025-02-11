import "./App.css";
import Viewer from "./pages/Viewer";
import Controller from "./pages/Controller";
import Home from "./pages/Home";
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
// import { db } from "./data/db.json";

const mockData = [
  {
    id: `q-1`,
    content: {
      question: "첫번째 질문입니다",
      answer: "첫번째 대답입니다",
    },
    isDone: true,
  },
  {
    id: `q-2`,
    content: {
      question: "두번째 질문입니다",
      answer: "두번째 대답입니다",
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
          <Route path="/" element={<Home />} />
          <Route path="/viewer" element={<Viewer />} />
          <Route path="/controller" element={<Controller />} />
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </div>
    </QuestionsContext.Provider>
  );
}

export default App;
