import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
	const [dataCheck, setDataCheck] = useState(null);

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	const handleChange = (event) => {
		setUserData({ ...userData, [event.target.name]: event.target.value });
	};

	const handleSumbit = (e) => {
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
		let temp = user.data.find((users) => users.userData[0].email === data.userData[0].email);
		console.log(temp, data.userData[0].email);
		if (temp?.userData[0]?.email === data.userData[0].email) {
			setDataCheck(true);
		} else if (data?.userData[0]?.email.includes("@") && temp === undefined) {
			dispatch(addUsersApi(data));
			setDataCheck(false);
			setTimeout(() => navigate("/log-in"), 3000);
		} else {
			setDataCheck(null);
		}
	};
	console.log(dataCheck);

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
								<div className="d-flex">
									<p>Already a member?</p>
									<Link to="/log-in">
										<span className="mx-2">Login</span>
									</Link>
								</div>
							</div>
							<form onSubmit={handleSumbit}>
								<div className="row">
									<div className="col">
										<label htmlFor="exampleFormControlInput1" className="form-label">
											first name
										</label>
										<input type="text" className="form-control" id="first" name="firstName" value={userData.firstName} onChange={handleChange} required />
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
									<input type="email" className="form-control" id="emailView" name="email" placeholder="name@example.com" value={userData.email} onChange={handleChange} required />
								</div>
								<label htmlFor="exampleFormControlInput1" className="form-label pt-3">
									Password
								</label>
								<div className="col-12">
									<input type="password" pattern=".{8,20}" className="form-control" id="password" name="password" value={userData.password} onChange={handleChange} required />
								</div>
								<div id="passwordHelpBlock" className="form-text">
									Your password must be 8-20 characters long.
								</div>
								<br></br>
								<button type="submit" style={{ backgroundColor: "#FFA000", border: "none", padding: "10px", color: "white", borderRadius: "5px" }}>
									Create Account
								</button>
							</form>
							{dataCheck === true ? (
								<div className="alert alert-danger alert-dismissible fade show mt-3" role="alert">
									Sorry but the email has been taken. Please log in to your account
									<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setDataCheck(null)}></button>
								</div>
							) : dataCheck === false ? (
								<div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
									Account successfully created.
									<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setDataCheck(null)}></button>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
