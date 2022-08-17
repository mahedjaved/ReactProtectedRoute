const { Link } = require("react-router-dom");

// example Navbar component
const Navbar = () => {
	// main render component
	return (
		<>
			<nav style={{ textAlign: "center", marginTop: "20px" }}>
				{/* add link to the home page*/}
				<Link to="/" style={{ padding: "10px" }}>
					Home Page
				</Link>

				{/* add liProfilenk to the profile page */}
				<Link to="/profile" style={{ padding: "10px" }}>
					Profile
				</Link>

				{/* Finally the about page */}
				<Link to="/about" style={{ padding: "10px" }}>
					About
				</Link>
			</nav>
		</>
	);
};

export default Navbar;
