function TaskItem({
  item,
  toggleTask,
  editTask,
  deleteTask
}) {
  return (
    <li className="task-item">
      <span
        className="task-text"
        style={{
          textDecoration: item.completed
            ? "line-through"
            : "none"
        }}
      >
        {item.text}
      </span>

      <div className="task-actions">
        <button
          className="complete-btn"
          onClick={() => toggleTask(item.id)}
        >
          {item.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="edit-btn"
          onClick={() => editTask(item.id)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(item.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;