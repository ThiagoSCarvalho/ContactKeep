import React, { useState } from "react";

import { connect } from "react-redux";

import {
	filterContacts,
	setLoading,
	clearFilter
} from "./../../actions/contactActions";

const SearchBar = ({ filterContacts, setLoading, clearFilter }) => {
	const [text, setText] = useState("");

	const onSearch = () => {
		if (text === "") return clearFilter();

		setLoading();
		filterContacts(text);
	};

	return (
		<div className="row">
			<form className="col s12">
				<div className="row">
					<div className="input-field col s12">
						<i className="material-icons prefix">search</i>
						<input
							id="icon_prefix"
							type="text"
							className="validate"
							value={text}
							onChange={ev => setText(ev.target.value)}
							onKeyUp={onSearch}
						/>
						<label htmlFor="icon_prefix">Filtre por nome ou telefone</label>
					</div>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	contact: state.contact
});

export default connect(mapStateToProps, {
	filterContacts,
	setLoading,
	clearFilter
})(SearchBar);