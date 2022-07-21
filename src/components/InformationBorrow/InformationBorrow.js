import React from "react";
// import DropdownItem from "react-bootstrap/esm/DropdownItem";

const InformationBorrow = ({ book }) => {
	return (
		<div>
			{/* Button trigger modal */}

			{/* Modal  */}
			<div className="modal fade" id="informationBorrow" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="informationBorrowLabel">
								Details Borrow
							</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="row">
								<div className="col justify-content-center d-flex mx-auto">
									<img src={book?.volumeInfo?.imageLinks?.thumbnail} />
								</div>
								<div className="col">
									<p>Title Book : {book?.volumeInfo?.title}</p>
									<p> Category : {book?.volumeInfo?.categories}</p>
									<p> Authors : {book?.volumeInfo?.authors}</p>
									<p> Year : {book?.volumeInfo?.publishedDate} </p>
									<p> ID : {book?.id}</p>
									<p className="alert alert-success" role="alert">
										Please take the book at the reception by showing the loan id!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InformationBorrow;
