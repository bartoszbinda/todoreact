var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');
import {Search} from "Search";

describe('Search', () => {

    it('should exists', () => {
        expect(Search).toExist();
    });
    it('should call dispatch setSearchText', () => {
        var spy = expect.createSpy();
        var searchText = "bobo";
        var action = {
            type: "SET_SEARCH_TEXT",
            searchText
        };
        var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);
        search.refs.searchText.value = searchText;
        TestUtils
            .Simulate
            .change(search.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });
});
