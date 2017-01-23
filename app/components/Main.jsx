var React = require('react');
var uuid = require('node-uuid');

var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');
var Todo = require('Todo');
var AddTodo = require('AddTodo');
var Search = require('Search');

var Main = React.createClass({
    getInitialState: function() {
        return {

            showCompleted: false,
            searchText: "",
            todos: TodoAPI.getTodos()

        }
    },
    componentDidUpdate: function() {
        TodoAPI.setTodos(this.state.todos);
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
