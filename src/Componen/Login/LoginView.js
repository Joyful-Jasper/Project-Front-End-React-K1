// import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { addRegister } from "../Register/RegisterSlice";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../Register/RegisterView";
import { Link, navigate, useNavigate } from "react-router-dom";
import { Alert, Form } from "react-bootstrap";
import jwt_decode from "jwt-decode";
// import DetailBook from "../DetailBook/DetailBook.JS";

const LoginView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // const [show, setShow] = useState(user.data.email === loginData.email && user.data.password === loginData.password(true));

  const handleInput = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };
  const handleLogIn = (event) => {
    // if (show) {
    //   return (
    //     <Alert variant="danger" onClose={() => setShow(false)} dismissible>
    //       <Alert.Heading>oh snap! you got an error!</Alert.Heading>
    //       <p>Change this and try again</p>
    //     </Alert>
    //   );
    // }

    const result = user.data.find((person) => person.email === loginData.email && person.password === loginData.password);
    if (!result) {
      alert("kamu belum register");
    } else {
      alert("selamat login berhasil");
    }
    // dispatch(addRegister(loginData));
    // event.preventDefault();
    // console.log(loginData);
    // loginData.filter((person) => person.email === email.userData, person.password === password.userData).map((filteredPerson) => console.log("berhasil"));
  };
  const handleCallbackResponse = (response) => {
    console.log("Encode JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setLoginData(userObject);
    dispatch(addRegister(userObject));
    console.log(user.data);
    navigate("/");
  };

  console.log(user);

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "310452483381-gb8cjmh5ti97985esf00r99bocp1kmke.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("buttonDiv"), { theme: "outline", size: "large" });
  }, []);

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container">
      <div className="container-fluid" style={{ backgroundColor: "#F7F1EA" }}>
        <div className="row">
          <div className="col">
            <img src={logo} width={150} className="mt-3 mx-5" />
          </div>
          <div className="col justify-content-end d-flex mx-auto mt-3 px-5">
            <button onClick={handleRegister} style={{ backgroundColor: "#FFA000", border: "none", padding: "10px" }}>
              Sign-up
            </button>
          </div>
        </div>
        <div className="row justify-content-center d-flex mx-auto">
          <div className="col-6 mt-5 my-5 py-3 px-5" style={{ backgroundColor: "white" }}>
            <h1 className="justify-content-center d-flex mx-auto">Login</h1>
            <p className="justify-content-center d-flex mx-auto">Hey, enter your details to sign in to your account</p>

            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" value={loginData.email} onChange={handleInput} />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" name="password" value={loginData.password} onChange={handleInput} />
            <br></br>
            <div className="col justify-content-end d-flex mx-auto">
              <button onClick={handleLogIn} style={{ backgroundColor: "#FFA000", border: "none", padding: "10px" }}>
                Sing In
              </button>
            </div>
            <br></br>
            <p className="pt-3">-Or Sign In With-</p>

            <div className="col-6 py-3">
              <div id="buttonDiv"></div>
              {/* <DetailBook /> */}
            </div>
          </div>
          {/* <div className="col"></div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginView;
