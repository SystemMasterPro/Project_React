import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";


function TodoForm() {

    const [newTodoValue, setnewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setnewTodoValue(event.target.value)
    };

    const onSubmit= (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }
    
    return (
        <form className="formContainer" onSubmit={ onSubmit}>
            <label htmlFor="">TAREAS EN REACT</label>
            <textarea
                value={newTodoValue}
                onChange={onChange }
                placeholder="INGRESE SU TAREA"
            />
            <div className="container">
                <button
                    className="cancel"
                    type="button"
                    onClick={ onCancel}
                >Cancelar</button>
                <button
                    className="add"
                    type="submit"
                >Guardar</button>
            </div>
        </form>
    )
}

export { TodoForm };