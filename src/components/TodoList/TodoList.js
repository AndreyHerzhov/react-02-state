import React from "react";
import './TodoList.css'

const TodoList = ({todos, onDeleteTodo}) => {
    return (
    <ul className="TodoList">
        { todos.map(({id, text}) => 
        <li key={id} className="TodoList__item">
            <p>{text}</p>
            <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
        )}
         
    </ul>
)}

export default TodoList;

// {todos.map(({id, text}) => (
//     <li key={id}>
//        <p>{text}</p>
//     </li>
//     ))}