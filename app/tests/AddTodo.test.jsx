var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exists', () => {
        expect(AddTodo).toExist();
    });
    it('shoudln\'t been called with 0 length', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onSubmitTodo={spy}/>);

        var $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.item.value = "";
        TestUtils
            .Simulate
            .submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();

    });
    it('should been called with valid arguments', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onSubmitTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.item.value = "bobo";
        TestUtils
            .Simulate
            .submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith('bobo');

    });
});
