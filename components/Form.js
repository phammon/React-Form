import React from 'react';

export default class Form extends React.Component {
		render() {
			return(
				<form>
  					<div className="form-group">
    					<label for="formGroupExampleInput">Please enter your name</label>
    					<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your name here"/>
  					</div>
  					<div className="form-group">
    					<label for="formGroupExampleInput2">Please Enter some info</label>
    					<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="something about yourself"/>
  					</div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Please Enter your phone number</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="phone"/>
            </div>
				</form>
		);
	}
}