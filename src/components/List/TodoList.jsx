import Todo from "../Todo/Todo";
import TodoFilters from "../TodoFilters/TodoFilters";


const TodoList = ({ toDos, 
                    handleSetComplete, 
                    handleDelete, 
                    activeFilter, 
                    showActiveTodos, 
                    showAllTodos,
                    showCompletedTodos,
                    deleteCompleteTodos
                }) => {
    return (
        <div className="flex flex-col mt-7 overflow-hidden shadow-2xl">
            { toDos.map(todo => {
                return (
                    <Todo 
                        key={todo.id} 
                        todo={ todo } 
                        handleDelete={handleDelete}
                        handleSetComplete={handleSetComplete} />
                )
            }) }
            <TodoFilters
                activeFilter={activeFilter}
                total={toDos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                deleteCompleteTodos={deleteCompleteTodos}
                />
        </div>
    )
}


export default TodoList;