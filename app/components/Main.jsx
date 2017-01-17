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
                    text: "Walk the dog"
                }, {
                    id: uuid(),
                    text: "clean the yard"
                }, {
                    id: uuid(),
                    text: "kochac kotka"
                }, {
                    id: uuid(),
                    text: "tulic kotka"
                }
            ]
        }
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos, {

                    id: uuid(),
                    text: text

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
                <TodoList todos={todos}/>
                <AddTodo onSubmitTodo={this.handleAddTodo}/>
            </div>
        );
    }
});
module.exports = Main;
