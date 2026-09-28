function SubjectTable({ subjects }) {
  return (
    <div className="table-scroll">
      <table className="subject-table">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Subject</th>
            <th scope="col">Credits</th>
            <th scope="col">Grade</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.code || subject.name}>
              <td className="subject-code">{subject.code || '-'}</td>
              <td className="subject-name">{subject.name}</td>
              <td>{subject.credits ?? '-'}</td>
              <td><span className="grade-pill">{subject.grade}</span></td>
              <td><span className="result-label">{subject.grade === 'Pending' ? 'PENDING' : 'PASS'}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SubjectTable