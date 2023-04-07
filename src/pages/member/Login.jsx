import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import SignUp from "./SignUp";
// import axios from "axios";

export default function Login({ isLogin }) {
  // const [inputId, setInputId] = useState("");
  // const [inputPw, setInputPw] = useState("");

  // // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  // const handleInputId = (e) => {
  //   setInputId(e.target.value);
  // };

  // const handleInputPw = (e) => {
  //   setInputPw(e.target.value);
  // };

  // // login 버튼 클릭 이벤트
  // const onSubmitLogin = () => {
  //   console.log("click login");
  //   isLogin(true);
  // };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  //   useEffect(
  //     () => {
  //       axios
  //         .get("/user_inform/login")
  //         .then((res) => console.log(res))
  //         .catch();
  //     },
  //     // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
  //     []
  //   );

  return (
    <></>
    // <div className="page_login">
    //   <div className="inner_wrap">
    //     <h2 className="form_tit">Login</h2>
    //     <form name="form_login" onSubmit={onSubmitLogin}>
    //       <div className="form_row">
    //         {/* <label htmlFor="input_id">ID : </label> */}
    //         <input
    //           type="text"
    //           name="input_id"
    //           value={inputId}
    //           onChange={handleInputId}
    //           placeholder="ID"
    //         />
    //       </div>
    //       <div className="form_row">
    //         {/* <label htmlFor="input_pw">PW : </label> */}
    //         <input
    //           type="password"
    //           name="input_pw"
    //           value={inputPw}
    //           onChange={handleInputPw}
    //         />
    //       </div>
    //       <div className="form_row">
    //         <button type="submit" className="common_btn btn_sm btn_submit">
    //           Login
    //         </button>
    //       </div>
    //     </form>
    //     <BrowserRouter>
    //       <Routes>
    //         <Route path="/signup" element={<SignUp></SignUp>} />
    //         {/* <Route path="/password" element={<SignUp></SignUp>} /> */}
    //       </Routes>
    //     </BrowserRouter>
    //   </div>
    // </div>
  );
}
