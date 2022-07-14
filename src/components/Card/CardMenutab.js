import React from "react";
import "./CardMenutab.css";
import Card from "./Card";
import image1 from "../../assets/the-martian.jpg";
import DetailBooks from "../DetailBooks-Modal/DetailBooks";

const CardMenutab = () => {
  return (
    <>
      {/* Card */}
      <div className="container">
        <h4 className="title">Science Fiction</h4>
        <div className="row">
          <div className="col-md-2">
            <Card className="image-card" imgsrc={image1} title="The martian" />
            <div className="middle">
              <div className="text">
                <DetailBooks />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
            <div className="middle">
              <div className="text">
                <DetailBooks />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
            <div className="middle">
              <div className="text">
                <DetailBooks />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
            <div className="middle">
              <div className="text">
                <DetailBooks />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
            <div className="middle">
              <div className="text">
                <DetailBooks />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
            <div className="middle">
              <div className="text">
                <DetailBooks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMenutab;
