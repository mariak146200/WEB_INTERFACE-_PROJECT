const STORAGE_KEY = 'mariyappan_tasks'

export function loadTasks() {
  try {
    const storedTasks = localStorage.getItem(STORAGE_KEY)
    if (!storedTasks) return []
    const parsedTasks = JSON.parse(storedTasks)
    return Array.isArray(parsedTasks) ? parsedTasks : []
  } catch {
    return []
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  } catch {
    // Storage may be unavailable or full; in-memory task use still works.
  }
}