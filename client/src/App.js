import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {


	return (
		<>
			<Container maxWidth="lg">
				<Router>
					<Navbar />
					<Routes >
						<Route path="/" element={<Home />} />
						<Route path="/auth" element={<Auth />} />

					</Routes>

				</Router>


			</Container>
		</>
	);
};

export default App;
