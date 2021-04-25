import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeContent from "./components/Layout/HomeContent";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

import Register from "./components/user/Register";
import Login from "./components/user/Login";

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
			<BrowserRouter>
				<div className="App">
					<div className="home-layout">
						<NavBar />
						<Switch>
							<Route exact path="/">
								<HomeContent />
							</Route>
							<Route exact path="/register">
								<Register />
							</Route>
							<Route exact path="/login">
								<Login />
							</Route>
						</Switch>
						<Footer />
					</div>
				</div>
				</BrowserRouter>
		</Provider>
	);
}

export default App;