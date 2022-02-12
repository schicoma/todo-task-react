import React from "react";
import './TodoList.css';

function TodoList(props) {
    const {
        totalTasks,
        tasks,
        error,
        loading,
        onEmptyTasks,
        onEmptySearchTasks,
        onLoading,
        onError,
    } = props;

    const renderFunction = props.render || props.children;

    return (
        <section className="TodoList">
            {error && onError(error)}
            <ul>
                {loading && onLoading()}
                {(!loading && !totalTasks) && onEmptyTasks()}
                {(!loading && !!totalTasks && !tasks.length) && onEmptySearchTasks()}

                {/* {props.tasks.map(task => props.render(task))} */}
                {(!loading && !error) && !!renderFunction && tasks.map(renderFunction)}

            </ul>
        </section>
    );
}

export { TodoList };