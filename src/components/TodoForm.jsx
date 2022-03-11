import React, { useState} from "react";
import "./TodoForm.css";
import TodoList from "./TodoList.jsx";


export default function TodoForm() {
    const [input, setInput] = useState();
    const [todos, setTodos] = useState([]);


    function handleSubmit(e){
        e.preventDefault();
        let newTodo = {
            id:Math.random()*3, 
            text: input
        }
        setTodos([...todos].concat(newTodo))
        setInput("")


    }

        return (
            <div className="ToDoForm " >
                <h2 className="mb-4">
                    What's the Plan for Today?
                </h2>
                <form className="input-group mb-3" 
                onSubmit={handleSubmit}
                 >
                    <input type="search"
                        className="text-box form-control"
                        value = {input}
                        placeholder="Add to list..."
                        title="Add to list..."
                        onChange={(e)=>setInput(e.target.value)} 
                        />
                    <input
                        className="btn btn-outline-secondary ms-1 button "
                        type="submit" 
                        value="Add"
                        title="Add"
                    />
                </form>
               <TodoList todos={todos}/>
            </div>

        )
        }
        