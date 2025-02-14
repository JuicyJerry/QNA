import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => {
        console.log("Home 화면입니다.", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home">
      {/* <h3>Home 페이지</h3> */}
      <div className="">
        <p>1. 질문과 답을 입력하세요.</p>
        <p>2. 뷰어(Viewer) 모드에서 질문과 답을 확인하세요.</p>
      </div>
    </div>
  );
};

export default Home;
