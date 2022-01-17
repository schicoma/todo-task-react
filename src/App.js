// import './App.css';
import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const todos = [
  { text: 'Cortar cebollas', completed: false },
  { text: 'Tomar el curso de Introducción a React', completed: false },
  { text: 'Marcar la tarea', completed: false },
];


function App() {
  // usar React.Fragment para envolver varios componentes, sin la 
  // necesidad de usar etiquetas div innecesarias
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
