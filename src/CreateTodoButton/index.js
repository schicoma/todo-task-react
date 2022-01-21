import React from "react";
import { useLocalStorage } from "../TodoContext/useLocalStorage";
import './CreateTodoButton.css';

function CreateTodoButton() {

    const {saveItem} = useLocalStorage('tasks');

    const onClickButton = (message) => {
        alert(message);

        let defaultTasks = [
            { text: 'Cortar cebollas', completed: true },
            { text: 'Tomar el curso de Introducción a React', completed: false },
            { text: 'Marcar la tarea', completed: false }
        ];

        saveItem(defaultTasks);

    };

    return (
        <div className="CreateTodoButton">
            <button
                // onClick={() => console.log('click')}
                // onClick={onClickButton}
                onClick={() => { onClickButton('mensaje') }}
            >
                +
            </button>
        </div>
    );
}

export { CreateTodoButton };