import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
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