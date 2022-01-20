import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


// let defaultTasks = [
//   { text: 'Cortar cebollas', completed: true },
//   { text: 'Tomar el curso de Introducción a React', completed: false },
//   { text: 'Marcar la tarea', completed: false }
// ];

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
