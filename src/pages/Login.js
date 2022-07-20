// import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { addUser, fetchUsers, addUsersApi } from "../components/User/UserSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = (props) => {
	const [loginData, setLoginData] = useState({});
  const [isLogin, setIsLogin] = useState(false)
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();

	const handleInput = (event) => {setLoginData({...loginData,[event.target.name]: event.target.value,});};

	const handleLogIn = (event) => {
		event.preventDefault();
	};

  // function for checking if the user is exist in the api
  const checkUser = () => {
    let temp = user?.data?.find(users => users?.userData[0]?.email == loginData.userData[0].email);
    console.log(temp, user);
    return temp !== undefined ? (dispatch(addUser(temp)), navigate('/dashboard')) : (dispatch(addUsersApi(loginData)), dispatch(addUser(loginData), navigate('/dashboard')));
  }

  // a handle call back function from google library 
	const handleCallbackResponse = (response) => {
    // console.log('Encode JWT ID token: ' + response.credential)
		const userObject = jwt_decode(response.credential);
		let newUser = {
			userBooks: [],
			userData: [
        { name: userObject.name,
					avatar: userObject.picture,
					email: userObject.email,
				},
      ],
		};
    setLoginData(newUser)
    setIsLogin(true)
	};

  if(isLogin){
    checkUser()
    setIsLogin(false)
  }
  
  // load library from google
	useEffect(() => {
    dispatch(fetchUsers())
		/* global google */
		google.accounts.id.initialize({
			client_id: "310452483381-gb8cjmh5ti97985esf00r99bocp1kmke.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});
		google.accounts.id.renderButton(document.getElementById("buttonDiv"), { theme: "outline", size: "large" });
  }, []);


	return (
		<div classNameName="container">
			<div classNameName="container-fluid mx-auto">
				<div classNameName="row">
					<div classNameName="col-6">
						<h1>Login</h1>
						<p>Hey, enter your details to sign in to your account</p>
						<label for="exampleFormControlInput1" className="form-label">
							Email
						</label>
						<input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" onChange={handleInput} />
						<label for="exampleFormControlInput1" className="form-label">
							Password
						</label>
						<input type="password" className="form-control" id="password" name="password" value={loginData.password} onChange={handleInput} />
						<button onClick={handleLogIn}>Sign In</button>
						<br></br>
						<p>-Or Sign In With-</p>
						<div classNameName="raw">
							<div classNameName="col">
								<div id="buttonDiv"></div>
							</div>
							<Link to="/">Home</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
