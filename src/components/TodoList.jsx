
import React, { useState } from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import {VscEdit} from "react-icons/vsc";
import {IoIosDoneAll} from "react-icons/io"

import "./TodoList.css";

export default function TodoList({text}){
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
      <div className="TodoList">
          <ul className="list-box row">
              <li className={clicked  ? "col-9 done list" :" col-9 list"}
              onClick={click}>
            {text}
            </li>
           
             <IoIosDoneAll  className={clicked  ? "col-1 icon  " :"icon col-1"}
               onClick={()=>alert("Done?")}/>
               <VscEdit  className={clicked  ? "col-1 icon  " :"col-1 icon "}
               onClick={()=>alert("Edit?")} />
               <RiDeleteBin6Line  className={clicked  ? "col-1 icon delete " :"icon col-1"}
              onClick={()=>alert("Delete?")} />
          </ul>
      



      </div>
    ) 
}