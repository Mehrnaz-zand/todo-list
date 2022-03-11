
import React, { useState } from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import {VscEdit} from "react-icons/vsc";
import {IoIosDoneAll} from "react-icons/io"

import "./TodoList.css";

export default function TodoList(todos){
    const [clicked, setClicked] = useState(false);
    //const [edit, setEdit] = useState({
      //  id:null, 
       // value:''
    //}) 

    function click(){
        setClicked(!clicked)
        //if (!clicked){
           // alert ("Well done!🎉")
        //}
     
    }
    return(
      /*<div className="TodoList">
            
            <ul className={clicked ? "list done":"list"} onClick={click}>
                 {todos.map((todo, index)=>{
                    
                         <li key={index}>
                             {todo.text}
                        </li>
                     
                 })}
                
              
            </ul>
            
        </div>*/
        <div className="TodoList list-box list">  
        <div className="row "> 
          <div className={clicked ? " col-9 done":"col-9"} onClick={click}>
              Todo
        </div>
          <IoIosDoneAll className="icon col-1" onClick={()=>alert("YAAAY!")} />
          <VscEdit className="icon col-1" onClick={()=>alert("edit?")}/>
          <RiDeleteBin6Line className="col-1 icon" onClick={()=>alert("delete?")} />     
         
          </div >
          </div> 
    ) 
}