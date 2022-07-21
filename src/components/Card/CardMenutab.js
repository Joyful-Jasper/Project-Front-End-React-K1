import React, { useState } from "react";
import "./CardMenutab.css";
import Card from "./Card";
import DetailBooks from "../DetailBooks-Modal/DetailBooks";
import DetailBorrow from "../DetailBorrow/DetailBorrow";
import InformationBorrow from "../InformationBorrow/InformationBorrow";
import { useSelector } from "react-redux";

const CardMenutab = (props) => {
	const [book, setBook] = useState({});
	const title = useSelector((state) => state.book.keyword);
	console.log(title);

	return (
		<>
			{/* Card */}
			<div className="container">
				<h4 className="title">{title}</h4>
				<div className="row">
					{props?.data?.map((item, index) => (
						<div className="col-md-3 my-2" key={index}>
							<Card test={setBook} buku={item} className="image-card" imgsrc={item?.volumeInfo?.imageLinks?.thumbnail} title={item?.volumeInfo?.title} />
							{/* Button trigger modal */}

							<button
								onClick={() => setBook(item)}
								type="button"
								className="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#modalBorrow"
								style={{ display: "flex", alignItems: "center", margin: "auto", marginBottom: "5px", marginTop: "5px" }}
							>
								Borrow
							</button>
						</div>
					))}
				</div>
				<div className="middle">
					<div className="text">
						<DetailBooks book={book.volumeInfo} />
						<DetailBorrow book={book} />
						<InformationBorrow book={book} />
					</div>
				</div>
			</div>
		</>
	);
};

export default CardMenutab;
