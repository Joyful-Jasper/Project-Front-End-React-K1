import React, { useState } from "react";
// import { container, button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addRegister } from "./RegisterSlice";
import gambar1 from "../../assets/buku.svg";

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
    <div className="container mt-5 py-5">
      {/* <div className="container-fluid justify-content-center d-flex mx-auto"> */}
      <div className="row" style={{ backgroundColor: "#F7F1EA  " }}>
        <div className="col-6 ">
          <img src={gambar1} width={480} />
        </div>
        <div className="col-6 mt-5 py-5">
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
          <label for="exampleFormControlInput1" class="form-label pt-3">
            Email
          </label>
          <input type="email" class="form-control" id="emailView" name="email" placeholder="name@example.com" value={userData.email} onChange={handleChange} />
          <label for="exampleFormControlInput1" class="form-label pt-3">
            Password
          </label>
          <input type="password" class="form-control" id="password" name="password" value={userData.password} onChange={handleChange} />
          <br></br>
          <button onClick={handleSumbit}>Create Account</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default RegisterView;
