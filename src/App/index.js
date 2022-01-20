import React from 'react';
import './App.css';
import { AppUI } from './AppUI';


// let defaultTasks = [
//   { text: 'Cortar cebollas', completed: true },
//   { text: 'Tomar el curso de Introducción a React', completed: false },
//   { text: 'Marcar la tarea', completed: false }
// ];


function App() {
  let tasksFromStorage = undefined;

  const data = localStorage.getItem('tasks');
  if (data) {
    tasksFromStorage = JSON.parse(localStorage.getItem('tasks'));
  }

  const [tasks, setTasks] = React.useState(tasksFromStorage);
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
      setTasks(newTasks);

      saveTasks(newTasks);
    }
  };

  const deleteTask = (text) => {
    const index = tasks.findIndex(task => task.text === text);

    if (index !== -1) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);

      saveTasks(newTasks);
    }

  };

  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // usar React.Fragment para envolver varios componentes, sin la 
  // necesidad de usar etiquetas div innecesarias
  return (
    <AppUI

      completed={completedTasks}
      total={totalTasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTasks={filteredTasks}
      onCompleteTask={toggleCompleteTask}
      onDeleteTask={deleteTask}

    />
  );
}

export default App;
