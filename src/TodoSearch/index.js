import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

    const { setSearchValue } = React.useContext(TodoContext);

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

export { TodoSearch };
