var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');

var Search = require('Search');

describe('Search', () => {

    it('should exists', () => {
        expect(Search).toExist();
    });
    it('should call onSearch with entered input text', () => {
        var spy = expect.createSpy();
        var searchText = "bobo";
        var search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);
        search.refs.searchText.value = searchText;
        TestUtils
            .Simulate
            .change(search.refs.searchText);
        expect(spy).toHaveBeenCalledWith(false, "bobo");
    });
    it('should have been called with proper checked value', () => {
        var spy = expect.createSpy();
        var search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);
        var checkedValue = true;
        search.refs.showCompleted.checked = checkedValue;
        TestUtils
            .Simulate
            .change(search.refs.searchText);
        expect(spy).toHaveBeenCalledWith(true, "");
    });
});
