import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const [books, setBooks] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetchData();
    const filterData = () => {
      books.filter((book) => (book.id = user.data[0].id)).map((filteredBook) => setBooks(filteredBook));
    };
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://62ccd8fea080052930b09ff3.mockapi.io/borrow`);
    const data = await response.json();
    setBooks(data);

    console.log(data);
  };
  console.log(books);
  return (
    <div>
      <table className="table table-striped table-bordered" style={{ borderColor: "#FFA000", textAlign: "center" }}>
        <thead style={{ backgroundColor: "#FFA000", color: "white" }}>
          <tr>
            <th>N0</th>
            <th>LOAN ID</th>
            <th>BOOK TITLE</th>
            <th>BORROW DATE</th>
            <th>DATE OF RETURN</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td></td>
              <td>{"sementara"}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
