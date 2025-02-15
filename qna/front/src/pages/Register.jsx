import { useState, useContext } from "react";
import Axios from "axios";
import { QuestionsContext } from "../App";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { registerUser } = useContext(QuestionsContext);
  const navigate = useNavigate();

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
    }

    let body = {
      email: email,
      password: password,
      name: name,
    };

    // Axios.post("/api/users/login", body)
    Axios.post("/api/users/register", body)
      // Axios.post("http://localhost:5000/api/users/login", body)
      .then((response) => {
        console.log("[register] response ===> ", response);
        if (response.data.registerSuccess) {
          registerUser({
            isLogin: true,
            message: "회원가입 성공",
          });
          navigate("/");
        } else {
          registerUser({
            isLogin: false,
            message: "회원가입 실패",
          });
          alert("회원가입 실패");
        }
      })
      .catch((err) => {
        console.log("register err ==> ", err);
        registerUser({
          isLogin: false,
          message: "회원가입 에러 발생",
        });
      });
  };

  return (
    <div className="register">
      <form onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <label>Name</label>
        <input type="text" value={name} onChange={onNameHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
