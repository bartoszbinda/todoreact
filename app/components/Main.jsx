import React from "react";
import * as actions from "actions";
import {connect} from "react-redux";
import TodoList from "TodoList";
import AddTodo from "AddTodo";
import Search from "Search";

export const Main = React.createClass({
	logout() {
        const {dispatch} = this.props;
        dispatch(actions.startLogout());
    },
    render: function() {
		return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.logout}>Logout</a> 
                </div>
                <h1 className='page-title'> TodoApp </h1>
                <div className='row'>
                    <div className='column small-centered small-11 medium-6 large-5'>
                        <div className='container'>
                            <Search/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>  

		);
	}
});
export default connect()(Main);