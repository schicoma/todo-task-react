import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoTitle } from './TodoTitle';

import './App.css';

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

  // const completeTask = (text) => {
  //   const index = tasks.findIndex(task => task.text === text);

  //   if (index !== -1) {
  //     const newTasks = [...tasks];
  //     newTasks[index].completed = true;
  //     setTasks(newTasks);
  //   }
  // };

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
    <React.Fragment>
      <TodoTitle></TodoTitle>
      <TodoCounter
        completed={completedTasks}
        total={totalTasks}
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
            onComplete={() => toggleCompleteTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
