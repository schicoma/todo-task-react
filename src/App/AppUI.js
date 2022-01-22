import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoTitle } from "../TodoTitle";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

function AppUI() {

    const {
        error,
        loading,
        total,
        filteredTasks,
        onCompleteTask,
        onDeleteTask,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        // usar React.Fragment para envolver varios componentes, sin la 
        // necesidad de usar etiquetas div innecesarias
        <React.Fragment>

            <TodoTitle />

            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Hubo un error.</p>}
                {loading && <p>Cargando ...</p>}
                {(!error && !loading && !total) && <p>Ingresa tu primera tarea :)</p>}

                {filteredTasks.map(task => (
                    <TodoItem
                        key={task.text}
                        text={task.text}
                        completed={task.completed}
                        onComplete={() => onCompleteTask(task.text)}
                        onDelete={() => onDeleteTask(task.text)}
                    />
                ))}
            </TodoList>

            {
                openModal && (
                    <Modal>
                        <p>Este es un modal: {loading.toString()}</p>
                    </Modal>
                )
            }

            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}

export { AppUI };
