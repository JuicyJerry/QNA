import { useState, useContext } from "react";
import Axios from "axios";
import { QuestionsContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(QuestionsContext);
  const navigate = useNavigate();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    console.log("check");
    event.preventDefault();
    console.log(email);
    console.log(password);

    let body = {
      email: email,
      password: password,
    };

    // Axios.post("/api/users/login", body)
    Axios.post("/api/users/login", body)
      // Axios.post("http://localhost:5000/api/users/login", body)
      .then((response) => {
        if (response.data.loginSuccess) {
          loginUser({
            isLogin: true,
            message: "로그인 성공",
          });
          navigate("/");
        } else {
          loginUser({
            isLogin: false,
            message: "로그인 실패",
          });
          alert("Error");
        }
      })
      .catch((err) => {
        console.log("login err ==> ", err);
        loginUser({
          isLogin: false,
          message: "로그인 에러 발생",
        });
      });
  };

  return (
    <div className="login">
      <form onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
