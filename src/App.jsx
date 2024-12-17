import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [input, setInput] = useState(""); // State for input field

  // Add a task to the list
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input.trim()]);
      setInput(""); // Clear input field
    }
  };

  // Delete a task from the list
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
