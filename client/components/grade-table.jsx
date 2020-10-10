import React from 'react';
import Grade from './grade.jsx';

export default function GradeTable({ grades, onSubmit }) {

  function getDeleteId(deleteId) {
    onSubmit(deleteId);
  }

  const gradeList = grades.map(grade => (
    <Grade onSubmit={getDeleteId} key={grade.id} grade={grade}/>
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
