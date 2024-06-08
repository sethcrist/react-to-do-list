import React, { useState } from 'react';

// create date created element
// create an array that shows completed tasks

const ToDoList = () => {

  const [tasks, setTasks] = useState(["Sweep", "Dust", "Vacuume"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    if (newTask.trim() !== "") { // prevents user from creating empty tasks
      setTasks(t => [...t, newTask]);
      setNewTask("")
    }
  }

  const deleteTask = (index) => {
    setTasks(t => t.filter((_, i) => i !== index));
    console.log("task deleted");
  }

  const moveTaskUp = (index) => {
    //swap 2 elements in an array
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks)
    }
  }

  const moveTaskDown = (index) => {
    if (index < tasks.length) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks)
    }
  }


  return (
    <div>
      <h1>TO-DO-List</h1>
      <input
        type='text'
        value={newTask}
        placeholder='Enter a task'
        onChange={handleInputChange}
      />

      <button
        onClick={addTask}>
        Add
      </button>
      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}>
              Done
            </button>
            <button
              onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button
              onClick={() => moveTaskDown(index)}>
              ⬇️
            </button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default ToDoList
