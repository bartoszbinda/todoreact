var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require("react-redux");

var Main = require('Main');

var actions = require('actions');
var store = require('configureStore').configure();
store.subscribe(() => {
	console.log('new state: ', store.getState());
});

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
