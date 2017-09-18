var React = require('react');

export default class Form extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
			<h1>Please Enter the password to continue</h1>
				<input type="password"></input>
			</div>
		);
	}