import React from "react";
import genre1 from "../../assets/genre1.png";
import butttonNext from "../../assets/next.png";
import "./CardGenre.css";
import { Genre } from "./Genre";
import { useDispatch } from "react-redux";
import { addKeyword, bookGenre, searchBooks } from "../Books/BooksSlice";

const CardGenre = () => {
	const dispatch = useDispatch();
	const handleClick = (item) => {
		dispatch(bookGenre(item));
		dispatch(addKeyword(item));
	};
	return (
		<div className="container-genre">
			<div className="row row-cols-lg-5 ">
				{Genre.map((item, index) => (
					<div className="col" key={index}>
						<div className="p-2 border" id="card-genre">
							<img src={genre1} width={60} />
							<p className="genre-title">{item.genre}</p>
							<a onClick={() => handleClick(item.genre)} className="genre-button">
								<img src={butttonNext} width={20} height={20} />
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CardGenre;
