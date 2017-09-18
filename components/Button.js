import React from 'react';

export default class Button extends React.Component {
		constructor(props) {
			super(props);
			this.handleClick = this.handleClick.bind(this);
		}		

		handleClick() {
           this.props.onChange();

		}
		render() {
			return(
				<button onClick={this.handleClick} className="btn">Submit</button>
		);
	}
}