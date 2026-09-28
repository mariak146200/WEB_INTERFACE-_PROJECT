export const student = {
  name: 'MARIYAPPAN P',
  degree: 'B.E',
  department: 'Computer Science and Engineering',
  year: 'II Year',
  batch: 'Batch I',
  college: 'Prince Dr. K. Vasudevan College of Engineering and Technology',
  registerNumber: 'ADD YOUR REGISTER NUMBER',
  skills: ['Java Basics', 'Python Basics', 'Data Structures', 'UI/UX Designing'],
}

export const semesters = [
  {
    id: 1,
    title: 'Semester 1',
    status: 'Completed',
    subjects: [
      { code: 'HS3251', name: 'Technical English-II', credits: 3, grade: 'A+' },
      { code: 'GE3251', name: 'Tamil and Technology', credits: 3, grade: 'S' },
      { code: 'MA3251', name: 'Probability and Statistics', credits: 4, grade: 'B+' },
      { code: 'BE3251', name: 'Basics of Electrical and Electronics Engineering', credits: 3, grade: 'A' },
    ],
  },
  {
    id: 2,
    title: 'Semester 2',
    status: 'Completed',
    subjects: [
      { code: 'CS3251', name: 'Web Technology', credits: 4, grade: 'A' },
      { code: 'CS3252', name: 'Python Programming', credits: 4, grade: 'A' },
      { code: 'CS3253', name: 'Object Oriented Programming using Java', credits: 3, grade: 'A' },
      { code: 'TAM0562', name: 'Heritage of Tamils', grade: 'Pending' },
      { code: 'ENG251', name: 'Technical English 2', grade: 'Pending' },
    ],
  },
  {
    id: 3,
    title: 'Semester 3',
    status: 'Results Pending',
    subjects: [],
  },
]

export const completedSemesters = semesters.filter(
  (semester) => semester.status === 'Completed',
)