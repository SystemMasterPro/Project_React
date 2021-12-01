import React from 'react';
import { TodoCounter } from "../TodoCouter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from '../TodoContext';

function AppUI() {
    return (
        <React.Fragment>
          <TodoCounter/>
          <TodoSearch/>
            <TodoContext.Consumer>
          {({
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
          }) => (
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
          )}
            </TodoContext.Consumer>
          <CreateTodoButton/>
        </React.Fragment>
    )
}

export { AppUI }