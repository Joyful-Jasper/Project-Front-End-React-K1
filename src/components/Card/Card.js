import React, { useState } from "react";
import Button from "../Button";
import "./Card.css";

const Card = (props) => {
  const [book, setBook] = useState({});
  console.log(book);

  return (
    <div className="card-view text-center">
      <div className="overflow">
        <img src={props.imgsrc} style={{ width: 100 }} className="card-img" />
      </div>
      <div className="card-body">
        <p className="card-title">{props.title}</p>

        {/* <Button /> */}
        {/* <button onClick={() => setBook(item)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Details Borrow
        </button> */}
      </div>
    </div>
  );
};

export default Card;
