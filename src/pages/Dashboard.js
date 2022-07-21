import React from "react";
import CardGenre from "../components/Card/CardGenre";
import CardMenutab from "../components/Card/CardMenutab";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { fetchBooks } from "../components/Books/BooksSlice";
import Banner from "../components/Banner";

const Dashboard = () => {
	const dispatch = useDispatch();
	const books = useSelector((state) => state.book);

	useEffect(() => {
		dispatch(fetchBooks());
	}, []);

	const cardList = () => {
		if (books.loading == false) {
			return (
				<div className="container">
					<CardMenutab data={books?.books?.items} />
				</div>
			);
		} else {
			return <h1 className="text-center mt-5">Loading....</h1>;
		}
	};

	console.log(books);

	return (
		<>
			{/* carousel */}
			<Banner />

			{/* Card */}
			{cardList()}

			{/* card genre */}
			<div className="container">
				<h4 className="title">Genre</h4>
				<CardGenre />
			</div>
		</>
	);
};

export default Dashboard;
