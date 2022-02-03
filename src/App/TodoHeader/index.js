import React from 'react';
import './TodoHeader.css';

function TodoHeader(props) {
    return (
        <header className="TodoHeader">
            {props.children}
        </header>
    );
}

export { TodoHeader };
