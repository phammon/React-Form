var React = require('react');
var ReactDOM = require('react-dom');

import Form from "./components/Form";
import Button from "./components/Button";
import Title from "./components/Title";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {title: 'Welcome to the React Form!'};
		this.changeTitle = this.changeTitle.bind(this);
	}
	changeTitle () {
		this.setState({
			title: 'Thank you for submitting'
		})
	}
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-6 col-xs-offset-1">
						<Title firstTitle={this.state.title}/>
						<Form />
						<Button onChange={this.changeTitle} />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);
