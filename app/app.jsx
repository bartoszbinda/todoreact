var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
var {Provider} = require("react-redux");

import Login from "Login";
import Main from "Main";
import * as TodoAPI from "TodoAPI";
var actions = require('actions');
var store = require('configureStore').configure();

store.dispatch(actions.startAddTodos());

//Load foundation
$(document).foundation();

//load custom css
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/">
				<Route path="todos" component={Main} />
				<IndexRoute component={Login} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
