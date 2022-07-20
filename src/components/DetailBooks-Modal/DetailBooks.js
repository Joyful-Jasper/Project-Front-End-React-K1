import React from "react";
import "./DetailBooks.css";

const DetailBooks = ( {book} ) => {
  // console.log(book);
  return (
    <div>
      {/* Modal  */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Details Books
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="shelf-book">Page Count : {book?.pageCount}</button>
              <img src={book?.imageLinks.thumbnail} className="cover-book" />
              <h3 className="title-book">{book?.title}</h3>
              <p className="release-book">{book?.publishedDate}</p>
              <h6 className="preview-book">{book?.description}</h6>
              <h6 className="categories-book">Categories : {book?.categories}</h6>
              <h6 className="author-book">Author : {book?.authors}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBooks;
