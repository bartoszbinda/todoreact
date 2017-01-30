var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');
import * as actions from "actions";
import {AddTodo} from "AddTodo";

describe('AddTodo', () => {
    it('should exists', () => {
        expect(AddTodo).toExist();
    });
    it('shoudln\'t dispatch ADD_TODO when invalid todoText', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.item.value = "";
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();

    });
    it("should dispatch ADD_TODO when valid  todo text", () => {
        var todoText = "check email";
        var action = actions.startAddTodo(todoText);
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.item.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    }) ;
});
