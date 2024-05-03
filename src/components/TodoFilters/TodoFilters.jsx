import {FilterButton, FilterButtonContainer, FiltersContainer, ItemLeft} from "./TodoFilters.components";


const TodoFilters = ({
    total, 
    activeFilter,
    showActiveTodos, 
    showAllTodos,
    showCompletedTodos,
    deleteCompleteTodos
}) => {

    return (
        <FiltersContainer>
            <ItemLeft total={total}/>
            <FilterButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter='All'/>
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Active'/>
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completed'/>
            </FilterButtonContainer>
            <button onClick={() => deleteCompleteTodos()} className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                Clear Complete
            </button>
        </FiltersContainer>
    )   
}

export default TodoFilters;