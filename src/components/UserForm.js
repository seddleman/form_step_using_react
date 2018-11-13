import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
	state = {
		step: 1,
		firstName: "",
		lastName: "",
		email: "",
		occupation: "",
		city: "",
		bio: ""
	};

  // Proceed to next step
  // Nobody would really restart like this...
	restart = () => {
		this.setState({
			step: 1,
			firstName: "",
			lastName: "",
			email: "",
			occupation: "",
			city: "",
			bio: ""
		});
	};

	// nextStep = () => {
	// 	const { step } = this.state;
	// 	this.setState({
	// 		step: step + 1
	// 	});
	// };

	// Better way to do it...
	nextStep = () => {
		this.setState((prevState, props) => ({
			step: prevState.step + 1
		}));
	};

	// // Go back to prev step
	// prevStep = () => {
	// 	const { step } = this.state;
	// 	this.setState({
	// 		step: step - 1
	// 	});
	// };

	// Better Way to do it...
	prevStep = () => {
		this.setState((prevState, props) => ({
			step: prevState.step - 1
		}));
	};

	// Handle fields change
	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;
		const { firstName, lastName, email, occupation, city, bio } = this.state;
		const values = { firstName, lastName, email, occupation, city, bio };

		switch (step) {
			case 1:
				return (
					<FormUserDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 2:
				return (
					<FormPersonalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return (
					<Confirm
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values={values}
					/>
				);
			case 4:
			default:
				return <Success restart={this.restart} />;
		}
	}
}

export default UserForm;
