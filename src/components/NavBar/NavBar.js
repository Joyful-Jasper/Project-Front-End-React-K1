import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Logo from "./Logo.svg";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { searchBooks } from "../Books/BooksSlice";

const NavBar = () => {
	const user = useSelector((state) => state.user);
	const books = useSelector((state) => state.book);
	const [keyword, setKeyword] = useState("");
	const dispatch = useDispatch();
	console.log(keyword);

	const handleClick = (event) => {
		event.preventDefault();
		dispatch(searchBooks(keyword));
	};

	const navUpdate = () => {
		if (user.logged === false) {
			return (
				<Nav className="">
					<Nav.Item className="py-2 px-1">
						<Link to="/log-in">
							<Button variant="first" className="w-100 py-2 px-3 fw-bold">
								Login
							</Button>{" "}
						</Link>
					</Nav.Item>
					<Nav.Item className="py-2 px-1">
						<Link to="/sign-up">
							<Button variant="second" className="w-100 py-2 px-3 fw-bold">
								Sign up
							</Button>{" "}
						</Link>
					</Nav.Item>
				</Nav>
			);
		} else {
			return (
				<Nav className="">
					<Nav.Item className="py-2 px-1"></Nav.Item>
					<Nav.Item className="py-2 px-1">
						<Link to="/dashboard">
							<img className="avatar" src={user?.data[0]?.userData[0]?.avatar} />
						</Link>
					</Nav.Item>
				</Nav>
			);
		}
	};

	return (
		<Navbar variant="first" expand="lg" sticky="top">
			<Container className="d-flex justify-content-between">
				<Navbar.Brand>
					<Link to="/">
						<img src={Logo} alt="" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="">
					<HiMenuAlt3 size={28} color={"black"} />
				</Navbar.Toggle>
				<Navbar.Collapse className="flex-grow-0 w-25" id="basic-navbar-nav">
					<Form className="d-flex w-100 py-2 px-1">
						<InputGroup>
							<Form.Control type="search" placeholder="Search" className="shadow-sm border rounded-pill" aria-label="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
							{/* <Button variant="outline-primary" onClick={handleClick} type='submit'>Button</Button> */}
							<IoSearchCircleSharp onClick={handleClick} size={40} color={"#FFA000"} />
						</InputGroup>
					</Form>
				</Navbar.Collapse>
				<Navbar.Collapse className="flex-grow-0" id="basic-navbar-nav">
					{navUpdate()}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
