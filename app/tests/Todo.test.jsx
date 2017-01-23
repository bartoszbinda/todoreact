var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {

    it('should exists', () => {
        expect(Todo).toExist();
    });
    it('should call onToggle prop with it onClick', () => {
        var todoData = {
            id: 199,
            text: "write todo.test.jsx test",
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils
            .Simulate
            .click($el[0]);
        expect(spy).toHaveBeenCalledWith(199);
    });
});
