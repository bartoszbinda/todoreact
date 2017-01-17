var React = require('react');
var TodoList = require('TodoList');
var Todo = require('Todo');
var AddTodo = require('AddTodo');
var Search = require('Search');

var Main = React.createClass({
    getInitialState: function() {
        return {

            showCompleted: false,
            searchText: "",
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
                <TodoList todos={todos}/>
                <AddTodo onSubmitTodo={this.handleAddTodo}/>
            </div>
        );
    }
});
module.exports = Main;
