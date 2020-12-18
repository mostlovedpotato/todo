import React, { useState,useEffect,useRef } from "react";
import "./so.css";

function Todo() {
  const [work,setWork]=useState("");
  const [list,setList]=useState([]);
  // const [keydown,setKeydown]=useState(false);
  const yeahRef = useRef(null);
  const buttRef= useRef(null);
// xd there is no second input no need for focus just one time focus is enough
  function firstKeyDown(e) {
    if(e.key==="Enter"){
      buttRef.current.focus();
    }
  }
  useEffect(() => {      
    yeahRef.current.focus();
  }, [])

  // useEffect(()=>{

  // })
  
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
        <input type="text" ref={yeahRef} onKeyDown={firstKeyDown} value={work} name="text" id="text" onChange={(e)=>handleChange(e)} placeholder="Add Task here ...."></input>
        <button className="add-btn" onClick={AddTask} ref={buttRef}>
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
