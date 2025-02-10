import "./App.css";
import Viewer from "./pages/Viewer";
import Controller from "./pages/Controller";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import { db } from "./data/db.json";

function App() {
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState([]);
  const onClickButton = (value) => {
    setTotal(total + value);
  };
  const updateData = (updateData) => {
    console.log("[updateData]1", updateData);
    data.push(updateData);
    setData(data);
    console.log("[updateData]2", data);
  };
  const nav = useNavigate();
  const onNavigateButton = () => {
    nav("/viewer");
  };

  return (
    <div className="App">
      <h1>Question And Answer</h1>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/viewer"}>Viewer</Link>
        <Link to={"/controller"}>Controller</Link>
      </div>

      <button onClick={onNavigateButton}>Viewer 페이지 이동</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/viewer"
          element={<Viewer data={data} total={total} current={current} />}
        />
        <Route
          path="/controller"
          element={
            <Controller onClickButton={onClickButton} updateData={updateData} />
          }
        />
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
