import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addUser, addUsersApi, fetchUsers } from "../components/User/UserSlice";

const Signup = () => {
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

  const handleSumbit = (e) => {
    // dispatch(fetchUsers())
    e.preventDefault();
    let data = {
      userBooks: [],
      userData: [
        {
          name: userData.firstName + " " + userData.lastName,
          avatar: "https://bombyxplm.com/wp-content/uploads/2021/01/website-faculty-man-300x300.jpg",
          email: userData.email,
          password: userData.password,
        },
      ],
    };
    dispatch(addUsersApi(data));
    dispatch(fetchUsers());
  };
  console.log(user);

  const sandi = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (
    <div className="container">
      <div className="container mx-auto " style={{ backgroundColor: "#F7F1EA" }}>
        <div className="row">
          <div className="row justify-content-center d-flex mx-auto">
            <div className="shadow col-8 mt-1 px-3 py-3" style={{ backgroundColor: "white", borderRadius: "10px" }}>
              <p style={{ sizeText: "30px" }} className="my-3">
                Create a new account
              </p>
              <div className="row">
                <p>Already a member?</p>
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
              <div className="col-12">
                <input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" value={userData.email} onChange={handleChange} />
              </div>
              <label htmlFor="exampleFormControlInput1" className="form-label pt-3">
                Password
              </label>
              <div className="col-12">
                <input type="password" className="form-control" id="password" name="password" value={userData.password} onChange={handleChange} />
              </div>
              <br></br>
              <button onClick={handleSumbit} style={{ backgroundColor: "#FFA000", border: "none", padding: "10px", color: "white", borderRadius: "5px" }}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
