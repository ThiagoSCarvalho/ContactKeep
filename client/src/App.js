import React, { useEffect } from "react";

import HomeContent from "./components/Layout/HomeContent";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
	useEffect(() => {
		M.AutoInit();
	});

	return (
		<Provider store={store}>
			<div className="App">
				<div className="home-layout">
					<NavBar />
					<HomeContent />
				</div>
				<Footer />
			</div>
		</Provider>
	);
}

export default App;