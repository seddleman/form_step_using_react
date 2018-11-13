import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
	restart = e => {
		e.preventDefault();
		this.props.restart();
	};

	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Success!!!" />
					<h1>Thank you for your submission</h1>
					<p>This has been a frontend exercise...</p>
					<br />
					<RaisedButton
						label="Restart"
						primary={false}
						style={styles.button}
						onClick={this.restart}
					/>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15
	}
};

export default FormPersonalDetails;
