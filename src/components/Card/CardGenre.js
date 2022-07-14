import React from "react";
import genre1 from "../../assets/genre1.png";
import butttonNext from "../../assets/next.png";
import "./CardGenre.css";

const CardGenre = () => {
  return (
    <div className="container-genre">
      <div className="row row-cols-lg-5 ">
        <div className="col">
          <div className="p-2 border" id="card-genre">
            <img src={genre1} width={60} />
            <p className="genre-title">Romance</p>
            <a href="#" className="genre-button">
              <img src={butttonNext} width={20} height={20} />
            </a>
          </div>
        </div>
        <div className="col">
          <div className="p-2 border" id="card-genre">
            <img src={genre1} width={60} />
            <p className="genre-title">Romance</p>
            <a href="#" className="genre-button">
              <img src={butttonNext} width={20} height={20} />
            </a>
          </div>
        </div>
        <div className="col">
          <div className="p-2 border" id="card-genre">
            <img src={genre1} width={60} />
            <p className="genre-title">Romance</p>
            <a href="#" className="genre-button">
              <img src={butttonNext} width={20} height={20} />
            </a>
          </div>
        </div>
        <div className="col">
          <div className="p-2 border" id="card-genre">
            <img src={genre1} width={60} />
            <p className="genre-title">Romance</p>
            <a href="#" className="genre-button">
              <img src={butttonNext} width={20} height={20} />
            </a>
          </div>
        </div>
        <div className="col">
          <div className="p-2 border" id="card-genre">
            <img src={genre1} width={60} />
            <p className="genre-title">Romance</p>
            <a href="#" className="genre-button">
              <img src={butttonNext} width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGenre;
