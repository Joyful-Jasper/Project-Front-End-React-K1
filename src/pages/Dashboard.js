import React from "react";
import Carousel from "../components/Carousel";
import CardGenre from "../components/Card/CardGenre";
import NavBar from "../components/NavBar/NavBar";
import CardMenutab from "../components/Card/CardMenutab";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import { fetchBooks } from "../components/Books/BooksSlice";

const Dashboard = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.book)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  const cardList = () => {
    if(books.loading == false) {
      
      return ( <div className="container">
                  <CardMenutab data={books?.books?.items} />
              </div>
      )
      
    } else {
        return (<h1>Loading....</h1>)
    }
  }

  console.log(books)




  return (
    <>
      {/* carousel */}
      <div className="container-banner">
        <Carousel />
      </div>

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
