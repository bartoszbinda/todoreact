var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');

var {Todo} = require('Todo');

describe('Todo', () => {

    it('should exists', () => {
        expect(Todo).toExist();
    });
    it('should dispatch TOGGLE_TODO action onClick', () => {
        var todoData = {
            id: 199,
            text: "write todo.test.jsx test",
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils
            .Simulate
            .click($el[0]);
        expect(spy).toHaveBeenCalledWith(
            type: "TOGGLE_TODO",
            id: todoData.id
            );
    });
});
