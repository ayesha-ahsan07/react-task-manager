import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    try {
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch {
      return [];
    }
  });

  const [currentFilter, setCurrentFilter] = useState("all");
  const [validationMessage, setValidationMessage] = useState("");

  /*== Save Tasks ==*/
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*== Add Task ==*/
  const addTask = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      setValidationMessage("Please enter a task.");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask
    ]);

    setTask("");
    setValidationMessage("");
  };

  /*== Complete / Undo ==*/
  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed
            }
          : item
      )
    );
  };

  /*== Delete Task ==*/
  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((item) => item.id !== id)
    );
  };

  /*== Edit Task ==*/
  const editTask = (id) => {
    const newText = prompt("Edit your task:");

    if (newText && newText.trim() !== "") {
      setTasks((previousTasks) =>
        previousTasks.map((item) =>
          item.id === id
            ? {
                ...item,
                text: newText.trim()
              }
            : item
        )
      );
    }
  };

  /*== Filter Tasks ==*/
  const filteredTasks = tasks.filter((item) => {
    if (currentFilter === "active") {
      return !item.completed;
    }

    if (currentFilter === "completed") {
      return item.completed;
    }

    return true;
  });

  /*== Task Statistics ==*/
  const activeTasks = tasks.filter(
    (item) => !item.completed
  ).length;

  const completedTasks = tasks.filter(
    (item) => item.completed
  ).length;

  return (
    <div className="app">

      <header className="app-header">
        <h1>React Task Manager</h1>
        <p>Manage your tasks daily</p>
      </header>

      <TaskForm
        task={task}
        setTask={setTask}
        addTask={addTask}
        validationMessage={validationMessage}
        setValidationMessage={setValidationMessage}
      />

      <FilterButtons
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />

      <div className="task-stats">
        <span>Total: {tasks.length}</span>
        <span>Active: {activeTasks}</span>
        <span>Completed: {completedTasks}</span>
      </div>

      {filteredTasks.length === 0 && (
        <p className="empty-message">
          No tasks found.
        </p>
      )}

      <TaskList
        filteredTasks={filteredTasks}
        toggleTask={toggleTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />

    </div>
  );
}

export default App;