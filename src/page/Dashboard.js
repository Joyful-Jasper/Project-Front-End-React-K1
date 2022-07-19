import React from "react";
import CardGenre from "../Componen/Card/CardGenre";
import CardMenutab from "../Componen/Card/CardMenutab";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { fetchBooks } from "../Componen/Books/BooksSlice";
import Banner from "../Componen/Banner";

const Dashboard = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const cardList = () => {
    if (books.loading == false) {
      return (
        <div className="container">
          <CardMenutab data={books?.books?.items} />
        </div>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  };

  console.log(books);

  return (
    <>
      {/* carousel */}
      <Banner />

      {/* Card */}
      {cardList()}

      {/* card genre */}
      <div className="container">
        <h4 className="title">Genre</h4>
        <CardGenre />
      </div>
    </>
  );
};

export default Dashboard;
