import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    return (
        <button className="buttonAdd" onClick={ onClickButton }><i className="fas fa-plus"></i></button>
    );
}

export { CreateTodoButton };