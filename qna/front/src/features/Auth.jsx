import { useEffect, useContext } from "react";
import { QuestionsContext } from "../_context/QuestionProvider.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = ({ children, option, adminRoute = null }) => {
  // option => null, 아무나 출입 가능 페이지
  // option => true, 로그인한 유저만 출입 가능 페이지
  // option => false, 로그인한 유저는 출입 불가능 페이지
  // adminRoute => true, 어드민 유저가 출입 가능 페이지

  const { authUser, setIsLogin } = useContext(QuestionsContext);
  const navigate = useNavigate();
  console.log("[auth] check===> ", "check");

  // 아무나 진입 가능한 페이지 : Home, About
  // 로그인 회원만 집입 가능 페이지 : Viewer, List
  // 로그인 한 회원은 진입 못 하는 페이지: Login, Register
  // 관리자만 진입 가능 페이지 : Admin
  useEffect(() => {
    axios.get("/api/users/auth").then((response) => {
      console.log("[auth] response ===> ", response);
      console.log("[auth] response ===> ", response.data.isAuth);

      // 로그인한 상태
      if (response.data.isAuth) {
        setIsLogin(true);
        authUser({ isLogin: true, isAuth: true, message: "인증 성공" });

        if (adminRoute && !response.data.isAdmin) {
          navigate("/login");
        } else {
          if (!option) {
            navigate("/");
          }
        }
      } else {
        setIsLogin(false);

        if (option) {
          authUser({ isLogin: false, message: "인증 실패" });
          navigate("/login");
        }
      }
    });
    // }, [adminRoute, authUser, navigate, option, setIsLogin]); // 이 네 개가 구독되어야 밑줄이 없어짐
  }, [adminRoute, navigate, option]);
  /**
   * setIsLogin, authUser는 useContext로 가져온 상태 업데이트 함수이므로 변경 안 됨
   * adminRoute, navigate, option 값에 따라, 리다이렉트 해야함
   */

  return <>{children}</>;
};

export default Auth;
