import React from 'react';
import './TodoCounter.css';

// const styles = {
//     color: 'navyblue',
//     backgroundColor: 'salmon'
// };

function TodoCounter() {
    return (
        // <h2 style={{color: 'red'}}>Has completado 2 de 3 tareas</h2>
        // <h2 style={styles}>Has completado 2 de 3 tareas</h2>
        <h2 className="TodoCounter">Has completado 2 de 3 tareas</h2>
    );
}

// export default TodoCounter; evitar hacer esto para cometer errores al momento de importar componentes
export { TodoCounter };