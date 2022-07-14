import React from "react";
import Carousel from "../components/Carousel";
import CardGenre from "../components/Card/CardGenre";
import NavBar from "../components/NavBar/NavBar";
import CardMenutab from "../components/Card/CardMenutab";

const Dashboard = () => {
  return (
    <>
      {/* carousel */}
      <div className="container-banner">
        <Carousel />
      </div>

      {/* Card */}
      <div className="container">
        <CardMenutab />
      </div>

      {/* card genre */}
      <div className="container">
        <h4 className="title">Genre</h4>
        <CardGenre />
      </div>
    </>
  );
};

export default Dashboard;
