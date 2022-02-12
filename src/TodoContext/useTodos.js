import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {

    // usando custom hook
    const { 
        item: tasks, 
        saveItem: saveTasks, 
        loading, 
        error,
        synchronize
    } = useLocalStorage('tasks', []);

    const [openModal, setOpenModal] = React.useState();
    const [searchValue, setSearchValue] = React.useState('');

    const completedTasks = tasks.filter(task => !!task.completed).length;
    const totalTasks = tasks.length;

    let filteredTasks = undefined;

    // filtrando
    if (!!searchValue.length) {
        filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));
    } else {
        filteredTasks = tasks;
    }

    const toggleCompleteTask = (text) => {
        const index = tasks.findIndex(task => task.text === text);

        if (index !== -1) {
            const newTasks = [...tasks];
            newTasks[index].completed = !newTasks[index].completed;

            saveTasks(newTasks);
        }
    };

    const deleteTask = (text) => {
        const index = tasks.findIndex(task => task.text === text);

        if (index !== -1) {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);

            saveTasks(newTasks);
        }
    };

    const addTask = (text) => {
        const newTask = [...tasks];
        newTask.push({
            text, completed: false
        });

        saveTasks(newTask);
    };

    const synchronizeTasks  = () => {
        synchronize();
    } 

    return {
        loading,
        error,
        completed: completedTasks,
        total: totalTasks,
        searchValue,
        setSearchValue,
        filteredTasks,
        onCompleteTask: toggleCompleteTask,
        onDeleteTask: deleteTask,
        addTask,
        openModal,
        setOpenModal,
        synchronizeTasks
    };
}

export { useTodos };
