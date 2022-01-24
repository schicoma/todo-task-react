import { faCheckCircle, faCircle, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className={`TodoItem ${props.completed && 'TodoItem--marked'}`}>
            {/* <FontAwesomeIcon icon={['fas', 'fa-adjust']} /> no fuincionará hasta importar los iconos al proyecto */}
            <div className="TodoItem-icon">
                <FontAwesomeIcon icon={props.completed ? faCheckCircle : faCircle} onClick={props.onComplete} />
            </div>
            <div className={`TodoItem-text ${props.completed && 'TodoItem-text--marked'}`}>
                <span>{props.text}</span>
            </div>
            <div className="TodoItem-icon">
                <FontAwesomeIcon icon={faTrashAlt} onClick={props.onDelete} />
            </div>
        </li>
    );
}

export { TodoItem };
