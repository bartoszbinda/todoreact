var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');

var Todo = require('Todo');
var TodoList = require('TodoList');

describe('TodoList', () => {

    it('should exists', () => {
        expect(TodoList).toExist();
    });
    it('should render one Todo Component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'kotki'
            }, {
                id: 2,
                text: 'bobki'
            }

        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todosComponents.length).toBe(todos.length);
    });
});
