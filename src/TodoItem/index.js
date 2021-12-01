import React from "react";
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className="item">
        <span className={`icon icon-check ${props.completed && 'icon-check--active'}`} onClick={ props.onComplete}>
          <i className="far fa-check-square"></i>
      </span>
      <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>
        {props.text}
      </p>
        <span className="icon icon-delete" onClick={ props.onDelete }>
        <i className="far fa-trash-alt"></i>
      </span>
    </li>
    );
}

export { TodoItem };