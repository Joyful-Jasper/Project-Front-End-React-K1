import { useState, useEffect } from "react";

const Table = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://62ccd8fea080052930b09ff3.mockapi.io/users`);
    const data = await response.json();
    setBooks(data);

    console.log(data);
  };

  const renderDate = () => {
    const dates = new Date();
    const date = dates.getDate();
    const year = dates.getFullYear();
    const month = dates.getMonth();

    return (
      <div>
        {date}/{month}/{year}
      </div>
    );
  };

  return (
    <div>
      <table className="table table-striped table-bordered" style={{borderColor:'#FFA000',textAlign:'center'}} >
        <thead style={{backgroundColor:'#FFA000', color:'white', }}>
          <tr >
            <th>N0</th>
            <th>LOAN ID</th>
            <th>BOOK TITLE</th>
            <th>BORROW DATE</th>
            <th>DATE OF RETURN</th>
          </tr>
        </thead>
        <tbody >
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.id + Math.floor((Math.random()*999999999))}</td>
              <td>{"sementara"}</td>
              <td>{renderDate()}</td>
              <td>{"sementara"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
