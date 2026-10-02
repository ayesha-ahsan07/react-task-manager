import TaskItem from "./TaskItem";

function TaskList({
  filteredTasks,
  toggleTask,
  editTask,
  deleteTask
}) {
  return (
    <ul className="task-list">
      {filteredTasks.map((item) => (
        <TaskItem
          key={item.id}
          item={item}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;