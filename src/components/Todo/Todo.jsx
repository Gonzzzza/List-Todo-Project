

const Todo = ({ todo, handleSetComplete, handleDelete }) => {

    const { title, complete, id } = todo;


    return (
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 rounded-md">
            <div className="flex items-center">
                {
                    // Condicional para activar y desactivar el check
                    complete ? (
                        // DIV de check
                        <div onClick={() => handleSetComplete(id)} className="bg-green-700 rounded-full p-1 cursor-pointer">
                            <img className="w-4 h-4" src="/check.svg" alt="Check Icon" />
                        </div>
                    ) : (
                        // SPAN de circulo cuando el check no esta activo
                        <span onClick={() => handleSetComplete(id)} className="border border-gray-500 border-solid p-3 rounded-full cursor-pointer"></span>
                    )
                }
                {/* Nombre de la tarea */}
                <p className={`pl-3 ${complete && 'line-through'}`}>
                    { title }
                </p>
            </div>
            {/* Imagen de la X para el delete de la tarea */}
            <img onClick={() => handleDelete(id)} src="/close.svg" alt="close icon" className="w-5 h-5 cursor-pointer transition-all duration-300 ease-in " />
        </div>
    )
}

export default Todo;