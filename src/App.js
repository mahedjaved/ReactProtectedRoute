// import logo from "./logo.svg";
import "./App.css";
// react router imports
import {
	// BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import Protected from "./Components/Protected";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import { useState } from "react";
// ------------------------------------------------------------------- //

function App() {
	// state hooked variables
	const [isLoggedIn, setIsLoggedIn] = useState(null);

	// ------------------------------------------------------------------- //
	// state altering functions
	const logIn = () => {
		setIsLoggedIn(true); // once logged just set setIsLoggedIn as false
	};
	const logOut = () => {
		setIsLoggedIn(false);
	};

	// ------------------------------------------------------------------- //
	// main render component
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h1>Protected Routes Tutorial</h1>

					{/* set the first router */}
					<BrowserRouter>
						<Navbar />
						{/* create a logout button */}
						{isLoggedIn ? (
							<>
								<button onClick={logOut}>Logout</button>
								<h3>User Logged In</h3>
							</>
						) : (
							<>
								<button onClick={logIn}>LogIn </button>
								<h3>User Logged Out</h3>
							</>
						)}
						{/* wrap all the routing pages to a Routes tag */}
						<Routes>
							<Route path="/" element={<Home />} />
							<Route
								path="/profile"
								element={
									<Protected isLoggedIn={isLoggedIn}>
										<Profile />
									</Protected>
								}
							/>
							<Route path="/about" element={<About />} />
						</Routes>
					</BrowserRouter>
				</div>
			</header>
		</div>
	);
}

export default App;
