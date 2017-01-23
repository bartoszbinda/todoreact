var React = require('react');
var TodoList = require('TodoList');
var Todo = require('Todo');
var AddTodo = require('AddTodo');
var Search = require('Search');
var uuid = require('node-uuid');

var Main = React.createClass({
    getInitialState: function() {
        return {

            showCompleted: false,
            searchText: "",
            todos: [
                {
                    id: uuid(),
                    text: "Walk the dog",
                    completed: false
                }, {
                    id: uuid(),
                    text: "clean the yard",
                    completed: true
                }, {
                    id: uuid(),
                    text: "kochac kotka",
                    completed: true
                }, {
                    id: uuid(),
                    text: "tulic kotka",
                    completed: false
                }
            ]
        }
    },
    handleToggle: function(id) {
        var updatedTodos = this
            .state
            .todos
            .map(function(todo) {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        this.setState({todos: updatedTodos});
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos, {

                    id: uuid(),
                    text: text,
                    completed: false

                }
            ]
        });
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        var {todos, showCompleted, searchText} = this.state;
        return (
            <div>
                <Search onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onSubmitTodo={this.handleAddTodo}/>
            </div>
        );
    }
});
module.exports = Main;
