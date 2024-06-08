import React, { useState } from 'react';

const ToDoList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("")

  const addedTask = () => {
    // setTasks(t => [...t, newTask]);
    setTasks(tasks)
    console.log(newTask);
    // setNewTask("")
  }

  return (
    <div>
      <h1>TO-DO-List</h1>
      <input type='text' value={newTask} placeholder='Enter a task'></input>
      <button onClick={addedTask}>Add</button>
      <ul>
        {tasks.map((task, index) =>
          <li key={index}>{task}</li>
        )}
      </ul>
    </div>
  )
}

export default ToDoList
