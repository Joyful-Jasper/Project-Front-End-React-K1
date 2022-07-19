import React from "react";
import buku from "../../assets/buku tereliye.jpg";
// import "./DetailBooks.css";

const DetailBorow = (props) => {
  return (
    <div>
      {/* Button trigger modal */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Details Borrow
      </button>

      {/* Modal  */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Details Borrow
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <img src={buku} />
                </div>
                <div className="col">
                  <p>judul Buku : </p>
                  <p> Category : </p>
                  <p> Authors : </p>
                  <p> Year : </p>
                  <p> Amount : </p>
                  <p> Availble : </p>
                  <p> Bookshelf : </p>
                </div>
              </div>
              {/* <button className="shelf-book">No. shelf : {props.shelf}</button>
              <img src={props.cover} className="cover-book" />
              <h3 className="title-book">{props.title}</h3>
              <p className="release-book">{props.release}</p>
              <h6 className="preview-book">{props.preview}</h6> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBorow;
