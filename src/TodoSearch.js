import React from "react";
import './TodoSearch.css';

function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState(''); // React Hooks., Las actualizaciones de estado pueden ser asíncronas.

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