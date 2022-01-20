import React from 'react';
import './App.css';
import { AppUI } from './AppUI';


// let defaultTasks = [
//   { text: 'Cortar cebollas', completed: true },
//   { text: 'Tomar el curso de Introducción a React', completed: false },
//   { text: 'Marcar la tarea', completed: false }
// ];

function useLocalStorage(itemName, initialValue = []) {

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {

        // throw Error('my custom error');
        const data = localStorage.getItem(itemName);

        if (data) {
          const itemFromStorage = JSON.parse(localStorage.getItem(itemName));
          setItem(itemFromStorage);
        }

      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }

    }, 5000);
  }, [itemName]);

  const saveItem = (item) => {
    localStorage.setItem(itemName, JSON.stringify(item));
    setItem(item);
  }

  return { // por convención, si se devuelve más de un estado, se usará un objeto como valor de retorno
    item,
    saveItem,
    loading,
    error
  };

}

function App() {

  // usando custom hook
  const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage('tasks', []);

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

  console.log('render (antes de use effect)');

  /**
   * Permite ejecutar una función dependiendo si el valor pasado como segundo parámetro ha cambiado.
   */
  React.useEffect(() => {
    console.log('use effect');
  }, [totalTasks]);

  console.log('render (después de use effect)');

  // usar React.Fragment para envolver varios componentes, sin la 
  // necesidad de usar etiquetas div innecesarias
  return (
    <AppUI
      loading={loading}
      error={error}
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
