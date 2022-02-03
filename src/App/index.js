import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { useTodos } from '../TodoContext/useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from './TodoHeader';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoLoading } from '../TodoLoading';
import { TodoSearch } from '../TodoSearch';
import { TodoTitle } from '../TodoTitle';
import './App.css';

function App() {

  const {
    completed,
    total,
    error,
    loading,
    filteredTasks,
    onCompleteTask,
    addTask,
    onDeleteTask,
    openModal,
    setOpenModal,
    setSearchValue
  } = useTodos();

  return (
    <React.Fragment>

      <TodoHeader>
        <TodoTitle />
        <TodoCounter
          completed={completed}
          total={total}
        />
        <TodoSearch
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {error && <p>Hubo un error.</p>}
        {loading && <TodoLoading />}
        {(!error && !loading && !total) && <p>Ingresa tu primera tarea :)</p>}

        {filteredTasks.map(task => (
          <TodoItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => onCompleteTask(task.text)}
            onDelete={() => onDeleteTask(task.text)}
          />
        ))}
      </TodoList>

      {
        openModal && (
          <Modal>
            <TodoForm
              addTask={addTask}
              setOpenModal={setOpenModal} />
          </Modal>
        )
      }

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

    </React.Fragment>
  );
}

export default App;
