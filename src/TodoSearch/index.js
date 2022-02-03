import React from "react";
import './TodoSearch.css';

function TodoSearch({ setSearchValue }) {

    const onSearchValueChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    }

    return (
        <div className="TodoSearch">
            <input
                onChange={onSearchValueChange}
                placeholder="Filtro" />
        </div>
    );
}

export { TodoSearch };
