import React from "react";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const DetailBorrow = ({ book }) => {
  return (
    <div>
      {/* Button trigger modal */}

      {/* Modal  */}
      <div className="modal fade" id="modalBorrow" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalBorrowLabel">
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
                  <button className="justify-content-end d-flex mx-auto" style={{ backgroundColor: "#FFA000", borderRadius: "10px", padding: "10px", color: "white", borderColor: "#FFA000" }}>
                    BORROW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBorrow;
