function Semester3() {
  return (
    <>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Academic record / 2026-27</p>
          <h1>Semester 3</h1>
          <p className="page-subtitle">Current semester status</p>
        </div>
        <span className="status-badge"><span className="status-dot" /> RESULTS PENDING</span>
      </div>
      <section className="panel pending-panel">
        <div className="pending-icon" aria-hidden="true">…</div>
        <span className="status-badge">RESULTS PENDING</span>
        <h2>Results are not available yet</h2>
        <p>Semester 3 results can be added here once they are released. No marks or grades have been entered for this semester.</p>
      </section>
    </>
  )
}

export default Semester3