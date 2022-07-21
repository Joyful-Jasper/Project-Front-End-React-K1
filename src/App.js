import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoutes from "./ProtectedRoutes";
import History from "./pages/History";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/sign-up" element={<Signup />} />
				<Route path="/log-in" element={<Login />} />
				<Route path="*" element={<Error />} />
				<Route element={<ProtectedRoutes />}>
					{" "}
					{/* // the child element can be access if the user login */}
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/history" element={<History />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
