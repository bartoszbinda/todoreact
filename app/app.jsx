var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require("react-redux");


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
  	<Main />
  </Provider>,
  document.getElementById('app')
);
