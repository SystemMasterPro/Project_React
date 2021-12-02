import React from 'react';
import { TodoCounter } from "../TodoCouter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from '../TodoContext';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {

  const {
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
  } = React.useContext(TodoContext);
    return (
        <React.Fragment>
          <TodoCounter/>
          <TodoSearch/>
          <TodoList>
            {error && <p>Ups.. Error</p>}
            {loading && <p>Estamos cargando</p>}
            {!loading && !searchedTodos.length && <p>CREA TU PRIMER TAREA</p>}
            {searchedTodos.map(todo => (
              <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={ ()=> deleteTodo(todo.text)}
            />
        ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm></TodoForm>
          </Modal>
        )}
          <CreateTodoButton
          setOpenModal={ setOpenModal}
          />
        </React.Fragment>
    )
}

export { AppUI }