var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');
import {Provider} from "react-redux";
var configureStore = require("configureStore");
import TodoList from "TodoList";
var Main = require('Main');

describe('Main', () => {
    it('should exists', () => {
        expect(Main).toExist();
    });
    it("should render todoList", () => {
        var store = configureStore.configure();
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}> 
                <Main/>
            </Provider>
            );
        var main = TestUtils.scryRenderedComponentsWithType(provider, Main)[0];
        var todoList = TestUtils.scryRenderedComponentsWithType(main, TodoList);

        expect(todoList.length).toEqual(1);
    });
});
