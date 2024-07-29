/**
 * Updates grades of students in given city with new grades.
 * If student doesn’t have grade in newGrades, the final grade
 * should be N/A.
 * @param {Array} students - list of students to process
 * @param {string} city - city to filter students by
 * @param {Array} newGrades - list of new grades to use for updating
 * @return {Array} updated list of students
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students

      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,

        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
