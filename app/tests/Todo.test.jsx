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
});
