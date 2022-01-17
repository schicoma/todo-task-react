import React from "react";

function TodoItem(props) {
    return (
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <p>X</p>
        </li>
    );
}

export { TodoItem };
