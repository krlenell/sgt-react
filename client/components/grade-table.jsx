import React from 'react';
import Grade from './grade.jsx';

export default function GradeTable({ grades, deleteGrade, setFormEdit }) {

  const gradeList = grades.map(grade => (
    <Grade
      deleteGrade={deleteGrade}
      key={grade.id}
      grade={grade}
      setFormEdit={setFormEdit}
    />
  ));

  return (
    <table className="table table-striped grade-table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
        {gradeList}
      </tbody>
    </table>
  );
}
