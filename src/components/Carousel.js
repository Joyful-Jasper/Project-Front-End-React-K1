import React from "react";
import background1 from "../assets/img-banner1.png";
import background2 from "../assets/img-banner2.svg";
import background3 from "../assets/img-banner3.svg";

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" style={{ borderRadius: 20, height: 250 }}>
          <div className="carousel-item active" data-bs-interval="7000">
            <img src={background1} alt="..." style={{ opacity: 0.9 }} />
            <div className="carousel-caption" style={{ position: "absolute", top: "20%", left: "15%", margin: "auto" }}>
              <h3>Find some of your favorite books easily</h3>
              <h5>keep track of your favorite book and organize books using list of reading log.</h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <img src={background2} alt="..." />
            <div className="carousel-caption" style={{ position: "absolute", top: "20%", left: "15%", margin: "auto" }}>
              <h3>Try the virtual library explorer.</h3>
              <h5>Digital shelves organized like a physical library.</h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="7000">
            <img src={background3} alt="..." />
            <div className="carousel-caption" style={{ position: "absolute", top: "20%", left: "15%", margin: "auto" }}>
              <h3>Try fulltext search</h3>
              <h5>Find matching results within the text of millions of books.</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
