var $ = require('jquery');
module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
        return;
    },
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            alert(e);
        }
        return $.isArray(todos)
            ? todos
            : [];
    },
    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        //Filter by show completed

        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        //Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            if(todo.text.toString().toLowerCase().includes(searchText.toLowerCase())) 
            {
                return true;
            }
            else {
                return false;
            }
        });

        // sort todos with non-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return filteredTodos;
    }
};
