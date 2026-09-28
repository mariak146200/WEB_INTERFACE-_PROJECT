export const gradePoints = {
  S: 10,
  'A+': 9,
  A: 8,
  'B+': 7,
  B: 6,
  'C+': 6,
  C: 5,
  F: 0,
}

export function calculateSemester(subjects = []) {
  const creditedSubjects = subjects.filter((subject) => subject.credits > 0)
  const totalCredits = creditedSubjects.reduce(
    (total, subject) => total + subject.credits,
    0,
  )
  const totalGradePoints = creditedSubjects.reduce(
    (total, subject) => total + (gradePoints[subject.grade] ?? 0) * subject.credits,
    0,
  )

  return {
    subjectCount: subjects.length,
    totalCredits,
    totalGradePoints,
    sgpa: totalCredits === 0 ? 0 : totalGradePoints / totalCredits,
  }
}

export function calculateCgpa(semesterList = []) {
  const totals = semesterList.reduce(
    (result, semester) => {
      const summary = calculateSemester(semester.subjects)
      result.totalCredits += summary.totalCredits
      result.totalGradePoints += summary.totalGradePoints
      return result
    },
    { totalCredits: 0, totalGradePoints: 0 },
  )

  return totals.totalCredits === 0
    ? 0
    : totals.totalGradePoints / totals.totalCredits
}

export function formatGpa(value) {
  return value.toFixed(2)
}