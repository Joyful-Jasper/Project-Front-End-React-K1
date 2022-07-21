// import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { addUser, fetchUsers, addUsersApi } from "../components/User/UserSlice";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosEye } from "react-icons/io";

const Login = (props) => {
	const [loginData, setLoginData] = useState({});
	const [isLogin, setIsLogin] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [loginCheck, setLoginCheck] = useState(null);

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	const handleInput = (event) => {
		setLoginData({ ...loginData, [event.target.name]: event.target.value });
	};

	const handleLogIn = (event) => {
		event.preventDefault();
		let data = {
			userBooks: [],
			userData: [
				{
					email: loginData.email,
					password: loginData.password,
				},
			],
		};
		let temp = user.data.find((users) => users.userData[0].email === data.userData[0].email);
		console.log(temp?.userData[0]?.password, data.userData[0].email);
		if (temp?.userData[0]?.email === data.userData[0].email && temp?.userData[0]?.password === data.userData[0].password) {
			dispatch(addUser(temp));
			setLoginCheck(true);
			setTimeout(() => navigate("/dashboard"), 2000);
		} else {
			setShow(true);
		}
	};

	// function for checking if the user is exist in the api
	const checkUser = () => {
		let temp = user?.data?.find((users) => users?.userData[0]?.email == loginData.userData[0].email);
		console.log(temp, user);
		return temp !== undefined
			? (dispatch(addUser(temp)), setTimeout(() => navigate("/dashboard"), 3000), setLoginCheck(true))
			: (dispatch(addUsersApi(loginData)), dispatch(addUser(loginData)), setTimeout(() => navigate("/dashboard"), 3000), setLoginCheck(true));
	};

	// a handle call back function from google library
	const handleCallbackResponse = (response) => {
		// console.log('Encode JWT ID token: ' + response.credential)
		const userObject = jwt_decode(response.credential);
		let newUser = {
			userBooks: [],
			userData: [{ name: userObject.name, avatar: userObject.picture, email: userObject.email }],
		};
		setLoginData(newUser);
		setIsLogin(true);
	};

	if (isLogin) {
		checkUser();
		setIsLogin(false);
	}

	// load library from google
	useEffect(() => {
		/* global google */
		google.accounts.id.initialize({
			client_id: "310452483381-gb8cjmh5ti97985esf00r99bocp1kmke.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});
		google.accounts.id.renderButton(document.getElementById("buttonDiv"), { theme: "outline", shape: "pill", width: "400px" });
	}, []);

	const sandi = () => {
		let x = document.getElementById("password");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	};

	return (
		<div className="container">
			<div className="container-fluid mx-auto">
				<div className="row justify-content-center d-flex mx-auto">
					<div className="shadow col-8 mt-1 py-3 px-3" style={{ backgroundColor: "white", borderRadius: "10px" }}>
						<h1 className="justify-content-center d-flex mx-auto">Login</h1>
						<p className="justify-content-center d-flex mx-auto">Hey, enter your details to sign in to your account</p>
						{show && (
							<Alert variant="danger" onClose={() => setShow(false)} dismissible>
								<Alert.Heading>sorry there was an error!</Alert.Heading>
								<p>Please enter the correct email and password or register first</p>
							</Alert>
						)}
						{loginCheck && (
							<Alert variant="success" onClose={() => setLoginCheck(false)} dismissible>
								<Alert.Heading>Login Success!</Alert.Heading>
							</Alert>
						)}
						<form onSubmit={handleLogIn}>
							<div className="row mt-1">
								<label htmlFor="exampleFormControlInput1" className="form-label">
									Email
								</label>
								<div className="col-12">
									<input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" onChange={handleInput} required />
									<HiOutlineMailOpen style={{ position: "relative", top: "-55%", left: "90%" }} />
								</div>
							</div>
							<div className="row mt-1">
								<label htmlFor="exampleFormControlInput1" className="form-label">
									Password
								</label>
								<div className="col-12">
									<input type="password" className="form-control" id="password" name="password" value={loginData.password} onChange={handleInput} required />
									<IoIosEye onClick={sandi} style={{ position: "relative", top: "-50%", left: "90%" }} />
								</div>
							</div>
							<br></br>
							<button type="submit" style={{ backgroundColor: "#FFA000", border: "none", padding: "10px", borderRadius: "5px", color: "white" }}>
								Sign In
							</button>
						</form>

						<p className="text-center">-Or Sign In With-</p>
						<div className="raw">
							<div className="col">
								<div id="buttonDiv"></div>
							</div>
						</div>
					</div>
					{/* <div className="col-6 justify-content-end d-flex mx-auto my-auto">
            <img src={buku} width={500} height={500} /> */}
					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export default Login;
