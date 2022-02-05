import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completed, total, isLoading }) {
    return (
        !isLoading && (<h2 className="TodoCounter">Has completado {completed} de {total} tareas</h2>)
    );
}

// export default TodoCounter; evitar hacer esto para cometer errores al momento de importar componentes
export { TodoCounter };
