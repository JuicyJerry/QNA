import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Home from "./components/Home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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

  return (
    <div className="App">
      <h1>Question And Answer</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route
          path="/viewer"
          element={<Viewer data={data} total={total} current={current} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/controller"
          element={
            <Controller onClickButton={onClickButton} updateData={updateData} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
