import React from "react"
import ReactDOM from "react-dom";
import Main from "Main";
import Login from "Login";
import firebase from "firebase";
import {Route, Router, IndexRoute, hashHistory} from  "react-router";



var requireLogin = (nextState, replace, next) => {
	if(!firebase.auth().currentUser) {
		replace("/");
	}
	next();
};
var isLoggedIn = (nextState, replace, next) => {
	if(firebase.auth().currentUser) {
		replace("/todos");
	}
	next();
};
export default (<Router history={hashHistory}>
			<Route path="/">
				<Route path="todos" component={Main} onEnter={requireLogin}/> //without () o error lol
				<IndexRoute component={Login} onEnter={isLoggedIn} />
			</Route>
		</Router>
		);