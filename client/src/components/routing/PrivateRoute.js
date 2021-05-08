import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import M from "materialize-css/dist/js/materialize.min.js";

const PrivateRoute = ({
	component: Component,
	auth: { isAuthenticated, loading },
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				!isAuthenticated && !loading ? (
					<Redirect to="/" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, null)(PrivateRoute);