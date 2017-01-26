var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var text = this.refs.item.value;
        if (text.length > 0) {
            this.refs.item.value = "";
            this
                .props
                .onSubmitTodo(text);
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
module.exports = AddTodo;
