import { useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import StatsDashboard from './components/StatsDashboard.jsx'
import Home from './pages/Home.jsx'
import { loadTasks, saveTasks } from './utils/storage.js'
import { createNotification, isValidTaskList } from './utils/notification.js'
import './App.css'

const filters = ['All', 'Pending', 'Completed', 'High Priority', 'Medium Priority', 'Low Priority']

function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [notification, setNotification] = useState(null)
  const restoreInput = useRef(null)

  useEffect(() => saveTasks(tasks), [tasks])

  useEffect(() => {
    if (!notification) return undefined
    const timer = window.setTimeout(() => setNotification(null), 3200)
    return () => window.clearTimeout(timer)
  }, [notification])

  const announce = (message, type = 'success') => setNotification(createNotification(message, type))

  const addTask = (task) => {
    setTasks((currentTasks) => [task, ...currentTasks])
    announce('Task added successfully')
  }

  const updateTask = (updatedTask) => {
    setTasks((currentTasks) => currentTasks.map((task) => task.id === updatedTask.id ? updatedTask : task))
    announce('Task updated successfully')
  }

  const deleteTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
    announce('Task deleted')
  }

  const toggleComplete = (taskId) => {
    const task = tasks.find((item) => item.id === taskId)
    if (!task) return
    const completed = task.status !== 'Completed'
    setTasks((currentTasks) => currentTasks.map((item) => item.id === taskId
      ? { ...item, status: completed ? 'Completed' : 'Pending' }
      : item))
    announce(completed ? 'Task completed' : 'Task restored to pending')
  }

  const togglePin = (taskId) => {
    setTasks((currentTasks) => currentTasks.map((task) => task.id === taskId
      ? { ...task, isPinned: !task.isPinned }
      : task))
  }

  const visibleTasks = useMemo(() => {
    const query = search.trim().toLowerCase()
    return tasks
      .filter((task) => {
        const matchesSearch = !query || task.title.toLowerCase().includes(query) || task.description.toLowerCase().includes(query)
        const matchesFilter = activeFilter === 'All'
          || task.status === activeFilter
          || task.priority === activeFilter.replace(' Priority', '')
        return matchesSearch && matchesFilter
      })
      .sort((first, second) => Number(second.isPinned) - Number(first.isPinned)
        || new Date(first.dueDate || '9999-12-31') - new Date(second.dueDate || '9999-12-31'))
  }, [tasks, search, activeFilter])

  const downloadBackup = () => {
    const blob = new Blob([JSON.stringify(tasks, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'mariyappan-tasks-backup.json'
    link.click()
    URL.revokeObjectURL(url)
    announce('Task backup downloaded')
  }

  const restoreBackup = async (event) => {
    const [file] = event.target.files || []
    if (!file) return
    try {
      const importedTasks = JSON.parse(await file.text())
      if (!isValidTaskList(importedTasks)) throw new Error('Invalid task data')
      setTasks(importedTasks)
      announce('Tasks restored successfully')
    } catch {
      announce('Could not restore this file. Choose a valid task backup.', 'error')
    } finally {
      event.target.value = ''
    }
  }

  return (
    <Home notification={notification}>
      <Header onBackup={downloadBackup} onRestore={() => restoreInput.current?.click()} />
      <input ref={restoreInput} className="visually-hidden" type="file" accept="application/json,.json" onChange={restoreBackup} aria-label="Restore task backup" />
      <section className="intro">
        <div className="intro-copy">
          <span className="eyebrow">A CLEARER VIEW OF WHAT MATTERS</span>
          <h1>Make room for focus.</h1>
          <p>Gather today's priorities, mark your progress, and let the rest find its place.</p>
        </div>
        <time className="date-stamp" dateTime={new Date().toISOString().slice(0, 10)}>{new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</time>
      </section>
      <StatsDashboard tasks={tasks} />
      <section className="workspace" aria-label="Task workspace">
        <div className="form-column">
          <div className="section-heading"><div><span className="eyebrow">MAKE IT HAPPEN</span><h2>Capture a task</h2></div></div>
          <TaskForm onAddTask={addTask} />
        </div>
        <div className="list-column">
          <div className="section-heading list-heading">
            <div><span className="eyebrow">YOUR DAILY CONSTELLATION</span><h2>Tasks <span className="task-count">{tasks.length}</span></h2></div>
            <label className="search-box"><span aria-hidden="true">⌕</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search tasks" aria-label="Search task title or description" /></label>
          </div>
          <div className="filter-row" role="group" aria-label="Filter tasks">
            {filters.map((filter) => <button key={filter} type="button" className={`filter-button${activeFilter === filter ? ' active' : ''}`} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>)}
          </div>
          <TaskList tasks={visibleTasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} onToggleComplete={toggleComplete} onTogglePin={togglePin} />
        </div>
      </section>
    </Home>
  )
}

export default App
