import React from 'react';

export default function Grade({ grade, onSubmit }) {
  function handleClick(event) {
    const deleteId = grade.id;
    onSubmit(deleteId);
  }

  return (
    <tr>
      <td>{grade.name}</td>
      <td>{grade.course}</td>
      <td>{grade.grade}</td>
      <td><button onClick={handleClick} className="btn btn-danger">
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button></td>
    </tr>
  );
}
