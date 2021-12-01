import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="item">
      <span className={`icon icon-check ${props.completed && 'icon-check--active'}`}>
        <i class="far fa-check-square"></i>
      </span>
      <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="icon icon-delete">
        <i class="far fa-trash-alt"></i>
      </span>
    </li>
    );
}

export { TodoItem };