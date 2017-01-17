var React = require('react');
var TodoList = require('TodoList');
var Todo = require('Todo');
var AddTodo = require('AddTodo');

var Main = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: "Walk the dog"
                }, {
                    id: 2,
                    text: "clean the yard"
                }, {
                    id: 3,
                    text: "kochac kotka"
                }, {
                    id: 4,
                    text: "tulic kotka"
                }
            ]
        }
    },
    handleAddTodo: function(text) {
        alert('new todo:' + text);
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onSubmitTodo={this.handleAddTodo}/>
            </div>
        );
    }
});
module.exports = Main;
