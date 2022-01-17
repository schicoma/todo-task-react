import React from "react";
import './TodoSearch.css';

function TodoSearch() {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div className="TodoSearch">
            <input
                onChange={onSearchValueChange}
                placeholder="Escriba su tarea" />
        </div>
    );
}

export { TodoSearch }