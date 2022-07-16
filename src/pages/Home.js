import React from "react";
import "./Home.css";
import bannerBook1 from "../assets/banner-book1.svg";
import bannerBook2 from "../assets/banner-book2.svg";
import rightArrow from "../assets/right-arrow.svg";
import Carousel from "../components/Carousel";
import image1 from "../assets/most-book3.svg";
import image2 from "../assets/most-book4.svg";
import image3 from "../assets/most-book5.svg";
import image4 from "../assets/most-book6.svg";
import mostBook1 from "../assets/most-book1.svg";
import mostBook2 from "../assets/most-book2.svg";
import titleMostBorrowing from "../assets/most-borrowing-book.svg";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Home = () => {
  const handleClick = () => {
    confirmAlert({
      message: "Want to browse the library and borrow books? please login first:)",
      buttons: [
        {
          label: "OK",
        },
      ],
    });
  };

  return (
    <>
      {/* Banner book */}
      <div className="banner-book">
        <img src={bannerBook1} className="banner-book-1" />
        <div className="banner-book-2">
          <img src={bannerBook2} className="banner-book-2" />
          <button onClick={handleClick} className="btn-banner-book">
            Get a book loan
            <img src={rightArrow} />
          </button>
        </div>
      </div>

      {/* Banner carousel  */}
      <div className="container-banner-carousel">
        <div className="banner-carousel">
          <Carousel />
        </div>
      </div>

      {/* Most borrowing book */}
      <div className="most-borrowing-book">
        <img src={titleMostBorrowing} className="title-most" />
        <div className="row align-items-center">
          <div className="col-md-3">
            <img src={mostBook1} className="most-book-1" />
          </div>
          <div className="col-md-6">
            <div className="carousel-home">
              <ul className="slides">
                <input type="radio" name="radio-button" id="img-1" checked />
                <li className="slide-container">
                  <div className="slide-image">
                    <img src={image1} />
                  </div>
                </li>
                <input type="radio" name="radio-button" id="img-2" />
                <li className="slide-container">
                  <div className="slide-image">
                    <img src={image2} />
                  </div>
                </li>
                <input type="radio" name="radio-button" id="img-3" />
                <li className="slide-container">
                  <div className="slide-image">
                    <img src={image3} />
                  </div>
                </li>
                <input type="radio" name="radio-button" id="img-4" />
                <li className="slide-container">
                  <div className="slide-image">
                    <img src={image4} />
                  </div>
                </li>
                <div className="carousel-dots">
                  <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
                  <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
                  <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
                  <label for="img-4" className="carousel-dot" id="img-dot-4"></label>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <img src={mostBook2} className="most-book-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
