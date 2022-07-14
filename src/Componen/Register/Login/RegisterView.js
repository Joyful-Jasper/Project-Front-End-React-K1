import React, { useState } from "react";
// import { container, button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addRegister } from "./RegisterSlice";

const RegisterView = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSumbit = (event) => {
    console.log("test");
    const data = JSON.stringify(userData);
    localStorage.setItem("user", data);
    dispatch(addRegister(userData));
  };

  return (
    <div className="container ">
      <div className="container-fluid justify-content-center">
        <div className="row-12">
          <h1>RegisterView</h1>
          <div className="col-6">
            <img src="https://i0.hippopx.com/photos/612/395/593/library-books-education-literature-thumb.jpg" width="200" height="300" />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col">
                <label for="exampleFormControlInput1" class="form-label">
                  first name
                </label>
                <input type="text" class="form-control" id="first" name="firstName" value={userData.firstName} onChange={handleChange} />
              </div>
              <div className="col">
                <label for="exampleFormControlInput1" class="form-label">
                  last name
                </label>
                <input type="text" class="form-control" id="last" name="lastName" value={userData.lastName} onChange={handleChange} />
              </div>
            </div>
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="emailView" name="email" placeholder="name@example.com" value={userData.email} onChange={handleChange} />
            <label for="exampleFormControlInput1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password" name="password" value={userData.password} onChange={handleChange} />

            <button onClick={handleSumbit}>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
