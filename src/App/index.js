import React from 'react';
import './App.css';
import { AppUI } from './AppUI';


const defaultTasks = [
  { text: 'Cortar cebollas', completed: true },
  { text: 'Tomar el curso de Introducción a React', completed: false },
  { text: 'Marcar la tarea', completed: false }
];


function App() {
  const [tasks, setTasks] = React.useState(defaultTasks);
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
    }
  };

  const deleteTask = (text) => {
    const index = tasks.findIndex(task => task.text === text);

    if (index !== -1) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
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
