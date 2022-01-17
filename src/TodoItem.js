import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <i aria-hidden="true">C</i>
            <span>{props.text}</span>
            <i aria-hidden="true">X</i>
        </li>
    );
}

export { TodoItem };
