import React from "react";
import "./CardMenutab.css";
import Card from "./Card";
// import DetailBooks from "../DetailBooks-Modal/DetailBooks";

const CardMenutab = (props) => {
  return (
    <>
      {/* Card */}
      <div className="container">
        <h4 className="title">Romance</h4>
        <div className="row">
          {props?.data?.map((item) => (
            <div className="col-md-3 my-2">
              <Card className="image-card" imgsrc={item?.volumeInfo?.imageLinks?.thumbnail} title={item?.volumeInfo?.title} />
              <div className="middle">
                <div className="text">{/* <DetailBooks /> */}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardMenutab;
