import logo from "./logo.svg";
import "./App.css";
import RegisterView from "./Componen/Register/RegisterView";
import LoginView from "./Componen/Login/LoginView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailBorow from "./Componen/DetailBorow/DetailBorow";
import Dashboard from "./page/Dashboard.js";

function App() {
  return (
    <BrowserRouter>
      {/* <RegisterView />
      <LoginView /> */}
      {/* <DetailBorow /> */}

      <Routes>
        <Route path="/" element={<DetailBorow />} />

        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
