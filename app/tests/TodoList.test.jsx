var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');
import {Provider} from "react-redux";
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from "TodoList";
import ConnectedTodo, {Todo} from 'Todo';
describe('TodoList', () => {

    it('should exists', () => {
        expect(TodoList).toExist();
    });
    it("should render empty message if no todos", () =>{
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container__message').length).toBe(1);
    });
});
