const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]
  
  function getAttendanceRate(student) {
    const numDaysAttended = student.attendance.filter((day) => day.length)
    const attendanceRate = (numDaysAttended/student.attendance.length) * 100
    return attendanceRate
  }
  function getAvgScore(student) {
    const sumTestScores = student.testScores.reduce((sum, score) => sum + score, 0)
    const avgScore = sumTestScores / student.testScores.length
    return avgScore
  }
  function underPerformStudents(students) {
    const underPerformStudents = []
    for (const student of students) {
      const attendanceRate = getAttendanceRate(student)
      const avgScore = getAvgScore(student)
      if(attendanceRate < 80 && avgScore < 70) {
        underPerformStudents.push(student)
      }
    }
    return underPerformStudents
  }
console.log(getAttendanceRate(students[1]));
console.log(getAvgScore(students[1]));
console.log(underPerformStudents(students));