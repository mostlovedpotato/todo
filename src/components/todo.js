import React, { useState } from "react";
import "./so.css";
function Todo() {
  const [work,setWork]=useState("");
  const [list,setList]=useState([]);
  
  const handleChange=(e)=>{
    setWork(e.target.value);
  }

  const AddTask=()=>{
    if(work !==""){
      const workDetails = {
        id: new Date().getTime().toString(),
        value:work,
        isCompleted:false,
      }

      setList([...list,workDetails]);
    }
    setWork("");

  }
  const taskCompleted =(e,id)=>{
    e.preventDefault();
    const element= list.findIndex((elem)=>elem.id==id);
    const newList = [...list];
    newList[element]={...newList[element],
      isCompleted:true,
    }
    setList(newList);
    
  }
  const deleteTask=(e,id)=>{
    e.preventDefault();
    setList(list.filter((task)=>task.id!=id));

  }

  return (
    <div>
      <div className="todo">
        <input type="text" value={work} name="text" id="text" onChange={(e)=>handleChange(e)} placeholder="Add Task here ...."></input>
        <button className="add-btn" onClick={AddTask}>
          Add
        </button>
        <br></br>
        {(list!==[])?
          <ul>
            {list.map((task)=>{
              return <div key={work.id}>
              <li className={task.isCompleted?"crossText":"listitem"}>
                {task.value}
                <button className="completed" onClick={(e)=>taskCompleted(e,task.id)}>Completed</button>
                <button className="delete" onClick={(e)=>deleteTask(e,task.id)}>Delete</button>
              </li>
              </div>
            })}
          </ul>
        :null}
      </div>
    </div>
  );
}

export default Todo;
