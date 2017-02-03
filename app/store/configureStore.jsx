import * as redux from "redux";
import ReduxThunk from "redux-thunk";
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from "reducers";



export var configure = (initialState = {} ) => {
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer,
		auth: authReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		redux.applyMiddleware(ReduxThunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
	return store;	
};