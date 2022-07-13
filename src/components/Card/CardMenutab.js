import React from "react";
import "./CardMenutab.css";
import Card from "./Card";
import image1 from "../../assets/the-martian.jpg";
import buttonNext from "../../assets/next.png";
import Carousel from "../Carousel";
import CardGenre from "./CardGenre";

const CardMenutab = () => {
  return (
    <>
      {/* carousel */}
      <div className="container-banner">
        <Carousel />
      </div>

      {/* Card */}
      <div className="container">
        <h4 className="title">Science Fiction</h4>
        <div className="row">
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
          </div>
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
          </div>
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
          </div>
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
          </div>
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
          </div>
          <div className="col-md-2">
            <Card imgsrc={image1} title="The martian" />
          </div>
        </div>
      </div>

      {/* card genre */}
      <div className="container">
        <h4 className="title">Genre</h4>
        <CardGenre />
      </div>
    </>
  );
};

export default CardMenutab;
