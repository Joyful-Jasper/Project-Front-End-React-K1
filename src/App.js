import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Error from './pages/Error'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar } from "react-bootstrap";

import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/sign-up' element={<Signup />}/>
        <Route path='/log-in' element={<Login />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </>
  );
}

export default App;
