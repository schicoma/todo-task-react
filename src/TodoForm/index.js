import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
    
    const [text, setText] = React.useState('');
    const { addTask, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        // @TODO
        setOpenModal(false);
    };

    const onAccept = (event) => {
        event.preventDefault(); // evita recargar la página
        addTask(text);
        setOpenModal(false);
    };

    const onTaskChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="TodoForm">
            <form onSubmit={onAccept}>
                <label>
                    <span>Ingrese su tarea:</span>
                    <textarea rows="4" placeholder="Revisar mis anotaciones" onChange={onTaskChange}></textarea>
                </label>
                <div className="buttons">
                    <button className="button--cancel" type="button" onClick={onCancel}>Cancelar</button>
                    <button className="button--submit" type="submit">Aceptar</button>
                </div>
            </form>
        </div>
    );
};

export { TodoForm };