import React from 'react';


export default class Title extends React.Component {
	
	changeTitle () {
		this.setState({
			title: 'Thank you for submitting'
		})
	}
	render() {
		return(
				<h1>{this.props.firstTitle}</h1>
		);
	}
}


