import React from "react";

const students = [
  { name: "Alice Johnson", major: "Computer Science", year: "Sophomore" },
  { name: "Bob Smith", major: "Mechanical Engineering", year: "Senior" },
  { name: "Charlie Brown", major: "Biology", year: "Junior" }
];

const StudentCard = ({ student }) => (
  <div className="student-card">
    <h2>{student.name}</h2>
    <p><strong>Major:</strong> {student.major}</p>
    <p><strong>Year:</strong> {student.year}</p>
  </div>
);

const StudentList = () => {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
