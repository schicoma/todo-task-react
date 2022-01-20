import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoTitle } from "../TodoTitle";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    completed,
    total,
    searchValue,
    setSearchValue,
    filteredTasks,
    onCompleteTask,
    onDeleteTask,
}) {
    return (
        <React.Fragment>
            <TodoTitle></TodoTitle>
            <TodoCounter
                completed={completed}
                total={total}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
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
