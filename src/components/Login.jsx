import { useFormik } from "formik";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useCaptcha } from "../Reusable-Hooks/captchaCode";

const Login = () => {
  let navigate = useNavigate();

  const [userDetails] = useState({ UserID: "admin", Password: "12345" });
 

  //   // Initialize captcha using the custom hook.....

  const captchaCode=useCaptcha();   
  console.log(captchaCode)       //importing useCaptcha from reusable hook

  const[usableCaptcha,setUsableCaptcha] =useState(captchaCode); //assigning state to store value(initial value)

  // Handle captcha refresh

  function generateCaptcha(){              //onclick getting new captcha code
    const newCaptcha = useCaptcha(); // Re-generate a new captcha
    setUsableCaptcha(newCaptcha)
  }
 

  const [cookies, setCookie, removeCookie] = useCookies([
    "user-id",
    "user-pswd",
  ]);

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (user) => {
      if (
        user.userName === userDetails.UserID &&
        user.password === userDetails.Password
      ) {
        navigate("/home");
        setCookie("user-id", user.userName);
        setCookie("user-pswd", user.password);
      } else {
        navigate("/invalid");
      }
    },
  });
  return (
    <div className="login-style">
      <form className="p-4 " onSubmit={formik.handleSubmit}>
        <h2 className="  mb-4">
          <span className="bi bi-person-fill me-3 "></span>User Login
        </h2>
        <dl>
          <dd>
            <input
              type="text"
              placeholder="Enter User Name.."
              className="form-control p-2 mb-4"
              name="userName"
              onChange={formik.handleChange}
            />
          </dd>
          <dd>
            <input
              type="password"
              placeholder="Enter password.."
              className="form-control p-2"
              name="password"
              onChange={formik.handleChange}
            />
          </dd>
          <dd> 
          <span className="h3 text-danger  fw-bold">Captcha:</span>
          <span className="ms-3 fs-4 text-warning fw-bold fst-italic bg-info bg-opacity-25 p-2 rounded ">{usableCaptcha}</span>
          <span onClick={generateCaptcha} className="bi bi-arrow-clockwise   cursor-pointer"></span></dd>
        </dl>
        <button type="submit" className="btn btn-primary p-2   fw-bold w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
