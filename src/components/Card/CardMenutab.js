import React, { useState } from "react";
import "./CardMenutab.css";
import Card from "./Card";
import DetailBooks from "../DetailBooks-Modal/DetailBooks";

const CardMenutab = (props) => {
  const [book, setBook] = useState({});

  return (
    <>
      {/* Card */}
      <div className="container">
        <h4 className="title">Romance</h4>
        <div className="row">
          {props?.data?.map((item, index) => (
            <div className="col-md-3 my-2" key={index}>
              <Card className="image-card" imgsrc={item?.volumeInfo?.imageLinks?.thumbnail} title={item?.volumeInfo?.title} />
              {/* Button trigger modal */}
              <button onClick={() => setBook(item.volumeInfo)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ display: "flex", alignItems: "center", margin: "auto" }}>
                Details Book
              </button>
            </div>
          ))}
        </div>
        <div className="middle">
          <div className="text">
            <DetailBooks book={book} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMenutab;
