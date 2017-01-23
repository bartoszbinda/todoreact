var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');

var Main = require('Main');

describe('Main', () => {
    it('should exists', () => {
        expect(Main).toExist();
    });
    it('should app todo to the todos state on handleAddTodo()', () => {
        var todoText = 'kooooooootki';
        var main = TestUtils.renderIntoDocument(<Main/>);
        main.setState({todos: []});
        main.handleAddTodo(todoText);
        expect(main.state.todos[0].text).toBe(todoText);
    });
    it('should toggle completed value when handleToggle is called', () => {
        var todoData = {
            id: 11,
            text: "kocham kotka",
            completed: false
        };
        var main = TestUtils.renderIntoDocument(<Main/>);
        main.setState({todos: [todoData]});
        expect(main.state.todos[0].completed).toBe(false);
        main.handleToggle(11);
        expect(main.state.todos[0].completed).toBe(true);

    });
});
