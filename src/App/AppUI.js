import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoLoading } from "../TodoLoading";
import { TodoSearch } from "../TodoSearch";
import { TodoTitle } from "../TodoTitle";
import { TodoHeader } from "./TodoHeader";

function AppUI() {

    const {
        completed,
        total,
        error,
        loading,
        filteredTasks,
        onCompleteTask,
        onDeleteTask,
        openModal,
        setOpenModal,
        setSearchValue
    } = React.useContext(TodoContext);

    return (
        // usar React.Fragment para envolver varios componentes, sin la 
        // necesidad de usar etiquetas div innecesarias
        <React.Fragment>

            <TodoHeader>
                <TodoTitle />
                <TodoCounter
                    completed={completed}
                    total={total}
                />
                <TodoSearch
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList>
                {error && <p>Hubo un error.</p>}
                {loading && <TodoLoading />}
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
                        <TodoForm />
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
