import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoTitle } from "../TodoTitle";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

function AppUI() {

    const {
        error,
        loading,
        total,
        filteredTasks,
        onCompleteTask,
        onDeleteTask
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

            <CreateTodoButton />

        </React.Fragment>
    );
}

export { AppUI };
