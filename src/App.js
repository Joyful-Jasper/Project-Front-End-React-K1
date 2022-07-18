import logo from "./logo.svg";
import "./App.css";
import RegisterView from "./Componen/Register/RegisterView";
import LoginView from "./Componen/Login/LoginView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailBook from "./Componen/DetailBook/DetailBook.JS";

function App() {
  return (
    <BrowserRouter>
      {/* <RegisterView />
      <LoginView /> */}

      <Routes>
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/detail" element={<DetailBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
