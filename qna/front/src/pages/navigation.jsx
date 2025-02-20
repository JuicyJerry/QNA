import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const navigation = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/list", label: "List" },
    { path: "/viewer", label: "Viewer" },
    { path: "/controller", label: "Controller" },
  ];

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
    <>
      <nav className="links">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={location.pathname === link.path ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}

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
    </>
  );
};

export default navigation;
