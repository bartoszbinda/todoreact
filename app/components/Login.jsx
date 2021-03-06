import React from "react";
import {connect} from "react-redux";
import * as Redux from "redux";
import * as actions from "actions";
export const Login = React.createClass({
	onLogin() {
		var {dispatch} = this.props;
		dispatch(actions.startLogin());
	},
	render() {
		return (

			<div>
				<h1 className="page-title">Todo App </h1>
				<div className="row">
					<div className="columns small-centered small-10 medium-6 large-4">
						<div className="callout callout-auth" onClick={this.onLogin}>
							<h3>Login</h3>
							<p>
								Login with Github account below.
							</p>
							<button className="button">Login with Github</button>
						</div>
					</div>
				</div>
			</div>

			);
	}
});
export default connect()(Login);