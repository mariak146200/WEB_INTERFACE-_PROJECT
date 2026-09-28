import { calculateCgpa, calculateSemester, formatGpa } from '../utils/calculations.js'
import { completedSemesters, semesters } from '../utils/reportData.js'

function Overall() {
  const cgpa = calculateCgpa(completedSemesters)
  const completedCredits = completedSemesters.reduce(
    (total, semester) => total + calculateSemester(semester.subjects).totalCredits,
    0,
  )

  return (
    <>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Academic summary</p>
          <h1>Overall performance</h1>
          <p className="page-subtitle">A summary of completed semesters</p>
        </div>
        <span className="term-badge"><span className="status-dot" /> {completedSemesters.length} COMPLETED</span>
      </div>
      <section className="panel overall-intro">
        <div className="cgpa-circle"><strong>{formatGpa(cgpa)}</strong><span>CGPA / 10</span></div>
        <div className="overall-copy">
          <h2>Cumulative grade point average</h2>
          <p>Calculated from the credit-weighted grade points of all completed semesters. Semester 3 is excluded while results are pending.</p>
        </div>
      </section>
      <section className="stats-grid" aria-label="Overall summary">
        <article className="panel stat-card"><span className="stat-label">Completed semesters</span><strong className="stat-value">{completedSemesters.length}</strong><span className="stat-note">Semester 1 and Semester 2</span></article>
        <article className="panel stat-card"><span className="stat-label">Credits earned</span><strong className="stat-value">{completedCredits}</strong><span className="stat-note">Across completed semesters</span></article>
        <article className="panel stat-card"><span className="stat-label">Current status</span><strong className="stat-value">2 / 3</strong><span className="stat-note">Semester 3 results pending</span></article>
      </section>
      <section className="semester-list" aria-label="Semester GPA breakdown">
        {semesters.map((semester) => {
          const summary = calculateSemester(semester.subjects)
          const completed = semester.status === 'Completed'

          return (
            <article className="panel semester-row" key={semester.id}>
              <div>
                <h3>{semester.title}</h3>
                <p>{completed ? `${summary.subjectCount} subjects · ${summary.totalCredits} credits` : 'Results pending'}</p>
              </div>
              <div className="semester-score">
                <strong>{completed ? formatGpa(summary.sgpa) : '—'}</strong>
                <span>{completed ? 'SGPA' : semester.status}</span>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Overall