var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory} = require('react-router');
var {Provider} = require("react-redux");
import firebase from "app/firebase";
import router from "app/router";
var actions = require('actions');
var store = require('configureStore').configure();


firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		store.dispatch(actions.login(user.uid));
		store.dispatch(actions.startAddTodos());
		hashHistory.push("/todos");
	}
	else {
		store.dispatch(actions.logout());
		hashHistory.push("/");
	}
});




//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
//load custom css

require('style!css!sass!applicationStyles');


ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);
