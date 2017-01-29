var React = require("react");
import {connect} from "react-redux";
import * as actions from "actions";
export var AddTodo = React.createClass({
	onSubmit: function(e) {
		e.preventDefault();
		var {dispatch} = this.props;
		var todoText = this.refs.item.value;
		if (todoText.length > 0) {
			this.refs.item.value = "";
			dispatch(actions.addTodo(todoText));
		} else {
			this
                .refs
                .item
                .focus();
		}

	},
	render: function() {
		return ( 
            <div className='container__footer'> <form onSubmit={this.onSubmit}>
            <input type='text' ref='item' placeholder='What do you need to do?'/>
            <button className='button primary' type='submit'>Add Todo
            </button>
        </form> < /div>
		);
	}
});
export default connect()(AddTodo);
