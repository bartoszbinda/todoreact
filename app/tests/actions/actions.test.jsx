import configureMockStore from "redux-mock-store";
import ReduxThunk from "redux-thunk";
import * as expect from "expect";
import * as actions from "actions";

var createMockStore = configureMockStore((ReduxThunk));


desribe("Actions", () =>
{
	it("should create todo and dispatch ADD_TODO", (done) =>
	{
		const store = createMockStore({});
		const todoText = "My todo item";

		store.dispatch(actions.startAddTodo(todoText)).then(
			() => {
				const actions = store.getActions();
				expect(actions[0]).toInclude({
					type: "ADD_TODO"
				});
				expect(actions[0].todo).toInclude({
					text: todoText
				});
				done();
			}).catch(done);
	});
});