import { QuestionProvider } from "./_context/QuestionProvider";
import Home from "./pages/Home";
import List from "./pages/List";
import Viewer from "./pages/Viewer";
import Controller from "./pages/Controller";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
import navigation from "./pages/navigation";
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
import Auth from "./features/Auth";

function App() {
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const location = useLocation();

  const onClickButton = (value) => {
    setTotal(total + value);
  };

  return (
    <QuestionProvider
      value={{
        total,
        current,
        setCurrent,
        onClickButton,
        // setIsLogin,
      }}
    >
      <div className="App">
        <h1>Question And Answer</h1>
        <navigation />
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
