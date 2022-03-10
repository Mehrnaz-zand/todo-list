import React from "react";
import "./TodoForm.css";

export default function TodoForm(props){
    return(
        <div className="TodoForm">
            <li className="list">
                {props.todo}
            </li>
        </div>
    ) 
}