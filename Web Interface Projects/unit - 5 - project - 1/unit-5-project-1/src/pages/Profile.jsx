import { Link } from 'react-router-dom'
import { student } from '../utils/reportData.js'
import mariyappanPhoto from '../assets/MARIYAPPAN PHOTO.jpeg'

function Profile() {
  return (
    <>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Student profile</p>
          <h1>Academic profile</h1>
          <p className="page-subtitle">Student information and academic journey</p>
        </div>
        <span className="term-badge"><span className="status-dot" /> CURRENT STUDENT</span>
      </div>

      <section className="panel profile-hero">
        <div className="profile-copy">
          <p className="eyebrow">Welcome to your report card</p>
          <h1>{student.name}</h1>
          <p className="degree-line">{student.degree} {student.department}</p>
          <div className="register-box">
            <small>Register number</small>
            <strong>{student.registerNumber}</strong>
          </div>
        </div>
        <aside className="profile-aside">
          <img className="avatar" src={mariyappanPhoto} alt="Mariyappan" />
          <div>
            <strong>{student.year} · {student.batch}</strong>
            <p>Computer Science and Engineering</p>
          </div>
        </aside>
      </section>

      <section className="panel profile-details" aria-label="Student details">
        <div className="detail-item"><span className="detail-label">Degree</span><strong>{student.degree}</strong></div>
        <div className="detail-item"><span className="detail-label">Year and batch</span><strong>{student.year} · {student.batch}</strong></div>
        <div className="detail-item"><span className="detail-label">College</span><strong>{student.college}</strong></div>
      </section>

      <div className="content-grid">
        <section className="panel content-panel">
          <h2 className="section-title">About Me</h2>
          <p className="section-copy">I am a second-year Computer Science and Engineering student with an interest in software development and thoughtful user experiences. I enjoy strengthening my programming fundamentals through practical projects.</p>
          <Link className="primary-link" to="/overall">View academic record <span aria-hidden="true">→</span></Link>
        </section>
        <section className="panel content-panel">
          <h2 className="section-title">Skills</h2>
          <p className="section-copy">Areas I am currently learning and practicing.</p>
          <div className="skill-list">
            {student.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
          </div>
        </section>
      </div>
    </>
  )
}

export default Profile