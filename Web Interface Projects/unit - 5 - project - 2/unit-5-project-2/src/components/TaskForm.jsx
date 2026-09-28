import { useState } from 'react'

const emptyForm = { title: '', description: '', dueDate: '', priority: 'Medium' }

function TaskForm({ onAddTask }) {
  const [form, setForm] = useState(emptyForm)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddTask({
      id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      ...form,
      status: 'Pending',
      isPinned: false,
      createdAt: new Date().toISOString(),
    })
    setForm(emptyForm)
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="field"><span>Task title</span><input name="title" value={form.title} onChange={updateField} placeholder="What needs your attention?" maxLength="100" required /></label>
      <label className="field"><span>Description</span><textarea name="description" value={form.description} onChange={updateField} placeholder="Add a few useful details..." maxLength="500" /></label>
      <div className="form-row">
        <label className="field"><span>Due date</span><input name="dueDate" type="date" value={form.dueDate} onChange={updateField} /></label>
        <label className="field"><span>Priority</span><select name="priority" value={form.priority} onChange={updateField}><option>Low</option><option>Medium</option><option>High</option></select></label>
      </div>
      <button className="primary-button" type="submit"><span aria-hidden="true">＋</span> Add Task</button>
    </form>
  )
}

export default TaskForm