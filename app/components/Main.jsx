var React = require('react');
var TodoList = require('TodoList');
var Todo = require('Todo');
var Main = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: "Walk the dog"
        },
        {
          id: 2,
          text: "clean the yard"
        },
        {
          id: 3,
          text: "kochac kotka"
        },
        {
          id: 4,
          text: "tulic kotka"
        }
      ]
    }
  },
render: function(){
  var {todos} = this.state;
  return(
    <div>
    <TodoList todos={todos}/>
    </div>
  );
}
});
module.exports = Main;
