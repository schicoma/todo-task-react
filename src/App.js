import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoTitle } from './TodoTitle';

import './App.css';

const tasks = [
  { text: 'Cortar cebollas', completed: true },
  { text: 'Tomar el curso de Introducción a React', completed: false },
  { text: 'Marcar la tarea', completed: false }
];


function App() {
  // usar React.Fragment para envolver varios componentes, sin la 
  // necesidad de usar etiquetas div innecesarias
  return (
    <React.Fragment>
      <TodoTitle></TodoTitle>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {tasks.map(task => (
          <TodoItem key={task.text} text={task.text} completed={task.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
