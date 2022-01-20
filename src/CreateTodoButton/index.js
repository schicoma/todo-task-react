import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {

    const onClickButton = (message) => {
        alert(message);
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