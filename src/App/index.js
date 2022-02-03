import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import { TodoTitle } from '../TodoTitle';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoLoading } from '../TodoLoading';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';

function App() {

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
            <TodoForm />
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
