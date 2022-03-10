import React, { useState} from "react";
import "./Todo.css";
import TodoForm from "./TodoForm.jsx";


export default function Todo() {
    const [todo, setTodo] = useState();
    const [todos, setTodos] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        let newTodo = {
            id:Math.random()*3, 
            text: todo, 
            completed: false
        }
        setTodos([...todos].concat(newTodo))
        setTodo("")


    }

 
   
        return (
            <div className="ToDoList" >
                <form className="input-group mb-3" 
                onSubmit={handleSubmit}
                 >
                    <input type="search"
                        className="text-box form-control"
                        value = {todo}
                        placeholder="Add to list..."
                        onChange={(e)=>setTodo(e.target.value)} 
                        />
                    <input
                        className="btn btn-outline-secondary ms-1 button"
                        type="submit" 
                        value="Add"
                    />
                       
                </form>
               <div>
                    <ul >
                        {todos.map((todo)=> <TodoForm key={todo.id} todo = {todo.text}/>)}
                    </ul>
               </div>
            </div>

        )
        }
        