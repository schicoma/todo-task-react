import React from 'react';
import './App.css';
import { AppUI } from './AppUI';


// let defaultTasks = [
//   { text: 'Cortar cebollas', completed: true },
//   { text: 'Tomar el curso de Introducción a React', completed: false },
//   { text: 'Marcar la tarea', completed: false }
// ];

function useLocalStorage(itemName, initialValue = []) {
  let itemFromStorage = initialValue;

  const data = localStorage.getItem(itemName);
  if (data) {
    itemFromStorage = JSON.parse(localStorage.getItem(itemName));
  }

  const [item, setItem] = React.useState(itemFromStorage);

  const saveItem = (item) => {
    localStorage.setItem(itemName, JSON.stringify(item));
    setItem(item);
  }

  return [
    item,
    saveItem
  ];

}

function App() {

  // usando custom hook
  const [tasks, saveTasks] = useLocalStorage('tasks', []);

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
