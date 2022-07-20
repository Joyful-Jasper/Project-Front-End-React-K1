import React, { useState } from "react";
// import { container, button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addRegister } from "./RegisterSlice";
import gambar1 from "../../assets/buku.svg";
import logo from "../../assets/logo.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";

// import { useEffect } from "react";

const RegisterView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSumbit = () => {
    dispatch(addRegister(userData));
    console.log(user.data);
    navigate("/login");
  };

  return (
    <div className="container">
      {/* <div className="container-fluid justify-content-center d-flex mx-auto"> */}
      <div className="row" style={{ backgroundColor: "#F7F1EA" }}>
        <div className="col-6 mt-3">
          <img src={logo} width={150} />
          <br></br>
          <p style={{ sizeText: "30px" }} className="my-3">
            Create a new account
          </p>
          <div className="row">
            <div className="col">
              <p>Already a member?</p>
            </div>
            <div className="col">
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                first name
              </label>
              <input type="text" className="form-control" id="first" name="firstName" value={userData.firstName} onChange={handleChange} />
            </div>
            <div className="col">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                last name
              </label>
              <input type="text" className="form-control" id="last" name="lastName" value={userData.lastName} onChange={handleChange} />
            </div>
          </div>
          <label htmlFor="exampleFormControlInput1" className="form-label pt-3">
            Email
          </label>
          <input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" value={userData.email} onChange={handleChange} />
          <label htmlFor="exampleFormControlInput1" className="form-label pt-3">
            Password
          </label>
          <input type="password" className="form-control" id="password" name="password" value={userData.password} onChange={handleChange} />
          <br></br>
          <button onClick={handleSumbit} style={{ backgroundColor: "#FFA000", border: "none", padding: "10px", borderRadius: "5px", color: "white" }}>
            Create Account
          </button>
        </div>
        <div className="col-6 justify-content-end d-flex mx-auto">
          <img src={gambar1} height={550} />
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
