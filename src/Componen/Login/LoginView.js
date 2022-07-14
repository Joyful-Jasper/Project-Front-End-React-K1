// import { Button } from "bootstrap";
import React, { useState } from "react";

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h1>Login</h1>
            <p>Hey, enter your details to sign in to your account</p>
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="emailView" name="email" placeholder="name@example.com" value={loginData.email} onChange={handleInput} />
            <label for="exampleFormControlInput1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password" name="password" value={loginData.password} onChange={handleInput} />
            <button onClick={handleLogIn}>Sing In</button>
            <br></br>
            <p>-Or Sign In With-</p>
            <div className="raw">
              <div className="col">
                <img src="https://cdn.dribbble.com/users/2037940/screenshots/6228108/google-logo.png" width={50} height={30} onClick={console.log("tes")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
