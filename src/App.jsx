import { useEffect, useState } from "react";
import TodoInput from "./components/Input/Todoinput";
import TodoList from "./components/List/TodoList";
import Title from "./components/Title/Title";

function App() {
  const [toDos, setToDos] = useState([])
  const [activeFilter, setActivefilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState(toDos);
  
// Agregar Tarea
  const addTodo =  (title) => {
    const lastId =  toDos.length > 0 ? toDos[toDos.length - 1].id : 1;  

    const newTodo = {
      id: lastId + 1,
      title,
      complete: false,
    }

    const todoList = [...toDos]
    todoList.push(newTodo);
    setToDos(todoList);
    console.log(todoList)
  }
// Cambiar tarea de completada a no completada
  const handleSetComplete = (id) => {
    const updateList = toDos.map(todo => {
      if (todo.id === id) {
        return {...todo, complete: !todo.complete}
      }
      return todo
    })
    setToDos(updateList);
  }
// Eliminar tarea
  const handleDelete = (id) => {
    const updateList = toDos.filter(todo => todo.id !== id)
    setToDos(updateList);
  }


// Filtros --> Eliminar tareas completadas 
  const deleteCompleteTodos = () => {
    const updateList = toDos.filter(todo => todo.complete !== true)
    setToDos(updateList)
  }

// Filtros --> Mostrar todas las tareas 
  const showAllTodos = () => {
    setActivefilter('all')
  }
  
// Filtros --> Mostrar solo los activos
  const showActiveTodos = () => {
    setActivefilter('active')
  }

// Filtros --> Mostrar solo los completados
  const showCompletedTodos = () => {
    setActivefilter('completed')
  }

  useEffect(() => {
    if (activeFilter === 'all'){
      setFilteredTodos(toDos)
    } else if (activeFilter === 'active'){
      const activeTodos = toDos.filter(todo => todo.complete === false) 
      setFilteredTodos(activeTodos)
    } else if (activeFilter === 'completed'){
      const completedTodos = toDos.filter(todo => todo.complete === true)
      setFilteredTodos(completedTodos)
    }
  }, [activeFilter, toDos])

  return (
    <div className='bg-gray-900 font-inter min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5'>
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList 
          toDos={filteredTodos}
          activeFilter={activeFilter}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          deleteCompleteTodos={deleteCompleteTodos}
          />
      </div>
    </div>
  );
}

export default App;