// import { Button } from "bootstrap";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";

const LoginView = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };
  const handleLogIn = (event) => {
    event.preventDefault();
    console.log(loginData);
  };
  return (
    <div className="container">
      <div className="container-fluid" style={{ backgroundColor: "#F7F1EA" }}>
        <img src={logo} width={150} className="mt-3 mx-5" />
        <div className="row justify-content-center d-flex mx-auto">
          <div className="col-6 mt-5 my-5 py-3 px-5" style={{ backgroundColor: "white" }}>
            <h1 className="justify-content-center d-flex mx-auto">Login</h1>
            <p className="justify-content-center d-flex mx-auto">Hey, enter your details to sign in to your account</p>

            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="emailView" name="email" placeholder="name@example.com" value={loginData.email} onChange={handleInput} />
            <label for="exampleFormControlInput1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password" name="password" value={loginData.password} onChange={handleInput} />
            <br></br>
            <button onClick={handleLogIn}>Sing In</button>
            <br></br>
            <p className="pt-3">-Or Sign In With-</p>

            <div className="col-6">
              <img src="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
