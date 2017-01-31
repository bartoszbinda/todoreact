var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe("TodoAPI", () => {
    // beforeEach(() => {
    //     localStorage.removeItem("todos");
    // });
    // it("it should exists", () => {
    //     expect(TodoAPI).toExist();
    // });
    // describe("setTodos", () => {
    //     it("should set valid todos array", () => {
    //         var todos = [
    //             {
    //                 id: 1234,
    //                 text: "kocham kotka",
    //                 completed: true

    //             }
    //         ];
    //         TodoAPI.setTodos(todos);
    //         var actualTodos = JSON.parse(localStorage.getItem("todos"));
    //         expect(actualTodos).toEqual(todos);
    //     });
    //     it("shouldnt set invalid todos array", () => {
    //         var badTodos = {
    //             a: 'b'
    //         };
    //         TodoAPI.setTodos(badTodos);
    //         expect(localStorage.getItem('todos')).toBe(null);
    //     });
    // });
    // describe("getTodos", () => {
    //     it('should return empty array for bad localstorage data', () => {
    //         var actualtodos = TodoAPI.getTodos();
    //         expect(actualtodos).toEqual([]);
    //     });
    //     it('should return todos if valid data ', () => {
    //         var todos = [
    //             {
    //                 id: 1234,
    //                 text: "kocham kotka",
    //                 completed: true

    //             }
    //         ];
    //         TodoAPI.setTodos(todos);
    //         var actualTodos = JSON.parse(localStorage.getItem("todos"));
    //         expect(actualTodos).toEqual(todos);
    //     });

    // });
    describe("filter todos", () => {
        var todos = [
            {
                id: 1,
                text: "sthsth",
                completed: true
            }, {
                id: 2,
                text: "randomtext3456",
                completed: false
            }, {
                id: 3,
                text: "bllalblbla",
                completed: true

            }
        ];
        it("should return all items if showCompleted is true", () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toEqual(3);
        });
        it("should return noncompleted items if showcompleted is false", () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toEqual(1);
        });
        it("should sort by completed status", () =>
        {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });
        it("should sort by searchText with given text", () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'random');
            expect(filteredTodos[0].text).toEqual("randomtext3456");
        });
        it("should sort by searchText with empty given searchText", () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

    });
});
