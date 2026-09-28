import TaskCard from './TaskCard.jsx'

function TaskList({ tasks, onUpdateTask, onDeleteTask, onToggleComplete, onTogglePin }) {
  if (tasks.length === 0) {
    return <div className="empty-state"><div className="empty-symbol" aria-hidden="true">✧</div><h3>No tasks found</h3><p>Try adding a new task.</p></div>
  }

  return (
    <div className="task-list">
      {tasks.map((task) => <TaskCard key={task.id} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} onToggleComplete={onToggleComplete} onTogglePin={onTogglePin} />)}
    </div>
  )
}

export default TaskList