import { QuestionProvider } from "./_context/index";
import Home from "./pages/Home";
import List from "./pages/List";
import Viewer from "./pages/Viewer";
import Controller from "./pages/Controller";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
import { useState } from "react";
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

function App() {
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onClickButton = (value) => {
    setTotal(total + value);
  };

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

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/list", label: "List" },
    { path: "/viewer", label: "Viewer" },
    { path: "/controller", label: "Controller" },
  ];

  return (
    <QuestionProvider
      value={{
        total,
        current,
        setCurrent,
        onClickButton,
        setIsLogin,
      }}
    >
      <div className="App">
        <h1>Question And Answer</h1>
        <nav className="links">
          {navLinks.map((link) => {
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </Link>;
          })}

          {!isLogin && (
            <Link
              to={"/register"}
              className={location.pathname === "/register" ? "active" : ""}
            >
              Register
            </Link>
          )}
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
        </nav>

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
        </Routes>
      </div>
    </QuestionProvider>
  );
}

export default App;
