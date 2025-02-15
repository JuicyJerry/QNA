import "./App.css";
import Viewer from "./pages/Viewer";
import Controller from "./pages/Controller";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
import {
  ListWrapper,
  HomeWrapper,
  ControllerWrapper,
  ViewerWrapper,
  LoginWrapper,
  RegisterWrapper,
  NotfoundWrapper,
} from "./styles/Wrappers";
import axios from "axios";
import Auth from "./features/auth";
// import { db } from "./data/db.json";

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

function reducer(state, action) {
  console.log("[reducer] state ===> ", state);
  console.log("[reducer] action ===> ", action);
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    case "LOGIN":
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case "REGISTER":
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case "AUTH":
      return {
        ...state,
        isLogin: action.isLogin,
        isAuth: action.isAuth,
        userData: action.data,
      };
    default:
      return state;
  }
}

export const QuestionsContext = createContext();

function App() {
  const initialState = {
    questions: mockData,
    isLogin: false,
  };
  const idRef = useRef(3);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  // const [data, setData] = useState([]);
  const navigate = useNavigate();

  const onClickButton = (value) => {
    setTotal(total + value);
  };

  useEffect(() => {
    onClickButton(mockData.length);
  }, [mockData]);

  useEffect(() => {
    console.log("[App]isLogin ===> ", state.isLogin);
  }, [state.isLogin]);

  const createDate = useCallback((content) => {
    console.log("[App/createDate] content ===> ", content);

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

  const loginUser = useCallback((userInfo) => {
    dispatch({
      type: "LOGIN",
      isLogin: userInfo.isLogin,
    });
  }, []);

  const registerUser = useCallback((userInfo) => {
    dispatch({
      type: "REGISTER",
      isLogin: userInfo.isLogin,
    });
  }, []);

  const authUser = useCallback((userInfo) => {
    console.log("[authUser] userInfo ===> ", userInfo);
    dispatch({
      type: "AUTH",
      isAuth: userInfo.isAuth,
      isLogin: userInfo.isLogin,
    });
  }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      console.log(response.data);
      if (response.data.logoutSuccess) {
        navigate("/login");
      } else {
        alert("로그아웃 실패!");
      }
    });
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
        loginUser,
        registerUser,
        authUser,
        onClickButton,
        setIsLogin,
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
          <Link
            to={"/register"}
            className={location.pathname === "/register" ? "active" : ""}
          >
            Register
          </Link>
          {!isLogin ? (
            <Link
              to={"/login"}
              className={location.pathname === "/login" ? "active" : ""}
            >
              Login
            </Link>
          ) : (
            <button onClick={onClickHandler}>로그아웃</button>
          )}
        </div>

        {/* <button onClick={onNavigateButton}>Viewer 페이지 이동</button> */}

        <Routes>
          <Route
            path="/"
            element={
              <Auth option={null}>
                <HomeWrapper>
                  <Home />
                </HomeWrapper>
              </Auth>
            }
          />
          <Route
            path="/list"
            element={
              <Auth option={true}>
                <ListWrapper>
                  <List />
                </ListWrapper>
              </Auth>
            }
          />
          <Route
            path="/viewer"
            element={
              <Auth option={true}>
                <ViewerWrapper>
                  <Viewer />
                </ViewerWrapper>
              </Auth>
            }
          />
          <Route
            path="/controller"
            element={
              <Auth option={true}>
                <ControllerWrapper>
                  <Controller />
                </ControllerWrapper>
              </Auth>
            }
          />
          <Route
            path="/login"
            element={
              <Auth option={false}>
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
              </Auth>
            }
          />
          <Route
            path="/register"
            element={
              <Auth option={false}>
                <RegisterWrapper>
                  <Register />
                </RegisterWrapper>
              </Auth>
            }
          />
          <Route
            path="*"
            element={
              <Auth option={null}>
                <NotfoundWrapper>
                  <Notfound />
                </NotfoundWrapper>
              </Auth>
            }
          />
          {/* <Route
            path="/"
            element={Auth(
              <HomeWrapper>
                <Home />
              </HomeWrapper>,
              null
            )}
          />
          <Route
            path="/list"
            element={Auth(
              <ListWrapper>
                <List />
              </ListWrapper>,
              true
            )}
          ></Route>
          <Route
            path="/viewer"
            element={Auth(
              <ViewerWrapper>
                <Viewer />
              </ViewerWrapper>,
              true
            )}
          />
          <Route
            path="/controller"
            element={Auth(
              <ControllerWrapper>
                <Controller />
              </ControllerWrapper>,
              true
            )}
          />
          <Route
            path="/login"
            element={Auth(
              <LoginWrapper>
                <Login />
              </LoginWrapper>,
              false
            )}
          />
          <Route
            path="/register"
            element={Auth(
              <RegisterWrapper>
                <Register />
              </RegisterWrapper>,
              false
            )}
          />
          <Route
            path="*"
            element={Auth(
              <NotfoundWrapper>
                <Notfound />
              </NotfoundWrapper>,
              null
            )}
          /> */}
        </Routes>
      </div>
    </QuestionsContext.Provider>
  );
}

export default App;
