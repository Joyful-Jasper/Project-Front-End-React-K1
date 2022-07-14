import React from "react";
import Button from "../Button";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-view text-center">
      <div className="overflow">
        <img src={props.imgsrc} style={{ width: 100 }} className="card-img" />
      </div>
      <div className="card-body">
        <h6 className="card-title">{props.title}</h6>
        <a href="#" className="btn-borrow">
          <Button />
        </a>
      </div>
    </div>
  );
};

export default Card;
