import { useState } from "react";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    Axios.post("/api/user/login", body)
      .then((response) => {
        console.log("[login] response ===> ", response);
      })
      .catch((err) => {
        console.log(err);
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
