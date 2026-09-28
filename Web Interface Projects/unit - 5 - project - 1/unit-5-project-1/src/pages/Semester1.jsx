import SubjectTable from '../components/SubjectTable.jsx'
import { calculateSemester, formatGpa } from '../utils/calculations.js'
import { semesters } from '../utils/reportData.js'

const semester = semesters.find((item) => item.id === 1)

function Semester1() {
  const summary = calculateSemester(semester.subjects)
  const performance = (summary.sgpa / 10) * 100

  return (
    <>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Academic record / 2025-26</p>
          <h1>Semester 1</h1>
          <p className="page-subtitle">Course results and grade point summary</p>
        </div>
        <span className="term-badge"><span className="status-dot" /> COMPLETED</span>
      </div>
      <section className="stats-grid" aria-label="Semester 1 summary">
        <article className="panel stat-card"><span className="stat-label">Total subjects</span><strong className="stat-value">{summary.subjectCount}</strong><span className="stat-note">Subjects with results</span></article>
        <article className="panel stat-card"><span className="stat-label">Total credits</span><strong className="stat-value">{summary.totalCredits}</strong><span className="stat-note">Credits completed</span></article>
        <article className="panel stat-card"><span className="stat-label">Semester GPA</span><strong className="stat-value">{formatGpa(summary.sgpa)}</strong><span className="stat-note">Out of 10.00</span></article>
      </section>
      <section className="panel table-panel">
        <div className="panel-heading"><h2>Subject results</h2><span>{summary.subjectCount} subjects</span></div>
        <SubjectTable subjects={semester.subjects} />
      </section>
      <section className="panel semester-performance" aria-label="SGPA performance">
        <div className="performance-top"><strong>SGPA performance</strong><span>{formatGpa(summary.sgpa)} / 10.00</span></div>
        <div className="progress-track"><div className="progress-fill" style={{ width: `${performance}%` }} /></div>
      </section>
    </>
  )
}

export default Semester1