import { useState } from 'react'

function TaskCard({ task, onUpdateTask, onDeleteTask, onToggleComplete, onTogglePin }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({ title: task.title, description: task.description, dueDate: task.dueDate, priority: task.priority })
  const priorityClass = task.priority.toLowerCase()

  const updateField = (event) => {
    const { name, value } = event.target
    setEditForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  const saveEdit = (event) => {
    event.preventDefault()
    onUpdateTask({ ...task, ...editForm })
    setIsEditing(false)
  }

  const displayDate = task.dueDate
    ? new Date(`${task.dueDate}T00:00:00`).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
    : 'No due date'

  return (
    <article className={`task-card priority-${priorityClass}${task.status === 'Completed' ? ' completed' : ''}`}>
      <div className="task-main">
        <div className="task-title-wrap">
          <button className="completion-dot" type="button" onClick={() => onToggleComplete(task.id)} aria-label={task.status === 'Completed' ? 'Mark as pending' : 'Mark as complete'} title={task.status === 'Completed' ? 'Mark as pending' : 'Mark as complete'}>{task.status === 'Completed' ? '✓' : ''}</button>
          <h3 className="task-title">{task.title}</h3>
        </div>
        <div className="card-actions">
          <button className={`icon-button${task.isPinned ? ' is-pinned' : ''}`} type="button" onClick={() => onTogglePin(task.id)} aria-label={task.isPinned ? 'Unpin task' : 'Pin task'} title={task.isPinned ? 'Unpin' : 'Pin'}>{task.isPinned ? '◆' : '◇'}</button>
          <button className="icon-button" type="button" onClick={() => setIsEditing((editing) => !editing)} aria-label={isEditing ? 'Cancel edit' : 'Edit task'} title="Edit">✎</button>
          <button className="icon-button danger" type="button" onClick={() => onDeleteTask(task.id)} aria-label="Delete task" title="Delete">×</button>
        </div>
      </div>
      {task.description && <p className="task-description">{task.description}</p>}
      {isEditing && (
        <form className="edit-form" onSubmit={saveEdit}>
          <label className="field"><span>Task title</span><input name="title" value={editForm.title} onChange={updateField} maxLength="100" required /></label>
          <label className="field"><span>Description</span><textarea name="description" value={editForm.description} onChange={updateField} maxLength="500" /></label>
          <div className="form-row">
            <label className="field"><span>Due date</span><input name="dueDate" type="date" value={editForm.dueDate} onChange={updateField} /></label>
            <label className="field"><span>Priority</span><select name="priority" value={editForm.priority} onChange={updateField}><option>Low</option><option>Medium</option><option>High</option></select></label>
          </div>
          <div className="edit-actions"><button className="primary-button" type="submit">Save changes</button><button className="status-button" type="button" onClick={() => setIsEditing(false)}>Cancel</button></div>
        </form>
      )}
      <div className="task-meta">
        <span className={`meta-chip priority-chip ${priorityClass}`}>{task.priority} priority</span>
        <span className="meta-chip">◷ {displayDate}</span>
        <span className="meta-chip status-chip">{task.status}</span>
        <button className="status-button" type="button" onClick={() => onToggleComplete(task.id)}>{task.status === 'Completed' ? 'Mark as Pending' : 'Complete'}</button>
      </div>
    </article>
  )
}

export default TaskCard