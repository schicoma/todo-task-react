import { faCheckCircle, faCircle, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import './TodoItem.css';

function TodoItem(props) {

    const onComplete = () => {
        alert('Ya completé el todo ' + props.text);
    };

    const onDelete = () => {
        alert('Tarea eliminada: ' + props.text);
    };

    return (
        <li className={"TodoItem"}>
            {/* <FontAwesomeIcon icon={['fas', 'fa-adjust']} /> no fuincionará hasta importar los iconos al proyecto */}
            <div className="TodoItem-icon">
                {/* {props.completed ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />} */}
                <FontAwesomeIcon icon={props.completed ? faCheckCircle : faCircle} onClick={onComplete} />
            </div>
            <span className={`TodoItem-text ${props.completed && 'TodoItem-text--marked'}`}>{props.text}</span>
            <div className="TodoItem-icon">
                <FontAwesomeIcon icon={faTrashAlt} onClick={onDelete} />
            </div>
        </li>
    );
}

export { TodoItem };
