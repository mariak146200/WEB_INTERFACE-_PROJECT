const statistics = [
  { label: 'Total Tasks', symbol: '◷', value: (tasks) => tasks.length },
  { label: 'Completed', symbol: '✓', value: (tasks) => tasks.filter((task) => task.status === 'Completed').length },
  { label: 'Pending', symbol: '◌', value: (tasks) => tasks.filter((task) => task.status === 'Pending').length },
  { label: 'High Priority', symbol: '↟', value: (tasks) => tasks.filter((task) => task.priority === 'High').length },
]

function StatsDashboard({ tasks }) {
  return (
    <section className="stats-grid" aria-label="Task statistics">
      {statistics.map((statistic) => <article className="stat-card" key={statistic.label}><span className="stat-symbol" aria-hidden="true">{statistic.symbol}</span><div><strong className="stat-value">{statistic.value(tasks)}</strong><span className="stat-label">{statistic.label}</span></div></article>)}
    </section>
  )
}

export default StatsDashboard