import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }) {

    // const { saveItem } = useLocalStorage('tasks');

    const onClickButton = (message) => {
        // alert(message);
        // let defaultTasks = [
        //     { text: 'Cortar cebollas', completed: true },
        //     { text: 'Tomar el curso de Introducción a React', completed: false },
        //     { text: 'Marcar la tarea', completed: false }
        // ];
        // saveItem(defaultTasks);

        setOpenModal(prevState => !prevState);
    };

    return (
        <div className="CreateTodoButton">
            <button
                // onClick={() => console.log('click')}
                // onClick={onClickButton}
                onClick={() => { onClickButton('mensaje') }}
            >
                {!openModal ? '+' : '-'}
            </button>
        </div>
    );
}

export { CreateTodoButton };
