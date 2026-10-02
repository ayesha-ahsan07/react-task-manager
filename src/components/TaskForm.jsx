function TaskForm({
  task,
  setTask,
  addTask,
  validationMessage,
  setValidationMessage
}) {
  return (
    <>
      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setValidationMessage("");
          }}
        />

        <button type="submit">Add Task</button>
      </form>

      {validationMessage && (
        <p className="validation-message">
          {validationMessage}
        </p>
      )}
    </>
  );
}

export default TaskForm;