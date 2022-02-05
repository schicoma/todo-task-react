import React from "react";
import './TodoSearch.css';

function TodoSearch({ isLoading, setSearchValue }) {

    const onSearchValueChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    }

    return (
        <div className="TodoSearch">
            <input
                disabled={isLoading}
                onChange={onSearchValueChange}
                placeholder="Filtro" />
        </div>
    );
}

export { TodoSearch };
