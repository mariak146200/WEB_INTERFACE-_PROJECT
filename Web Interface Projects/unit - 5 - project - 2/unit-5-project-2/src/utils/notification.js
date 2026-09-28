export function createNotification(message, type = 'success') {
  return { id: Date.now(), message, type }
}

export function isValidTaskList(value) {
  if (!Array.isArray(value)) return false
  return value.every((task) => task
    && typeof task.id === 'string'
    && typeof task.title === 'string'
    && typeof task.description === 'string'
    && typeof task.dueDate === 'string'
    && ['Low', 'Medium', 'High'].includes(task.priority)
    && ['Pending', 'Completed'].includes(task.status)
    && typeof task.isPinned === 'boolean')
}