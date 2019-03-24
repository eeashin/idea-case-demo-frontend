import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigator extends Component {

	render() {

		return (
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						ariacontrols="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<Link className="navbar-brand" to="/">
						Home
					</Link>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="./categories">
									List of Categories
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/add">
									Add Category
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="./expensive">
									Expensive Categories
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="./random">
									Random Category
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
export default Navigator;