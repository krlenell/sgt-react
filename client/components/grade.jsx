import React from 'react';

export default function Grade({
  grade,
  deleteGrade,
  setFormEdit,
  setGradeToEdit
}) {

  function handleClick(event) {
    let clicked = event.currentTarget.id;
    clicked = clicked.split('-')[0];
    if (clicked === 'delete') {
      const deleteId = grade.id;
      deleteGrade(deleteId);
    }
    if (clicked === 'edit') {
      setFormEdit(true);
      setGradeToEdit(grade);
      console.log('edit clicked');
    }
  }

  return (
    <tr>
      <td>{grade.name}</td>
      <td>{grade.course}</td>
      <td>{grade.grade}</td>
      <td>
        <button
          onClick={handleClick}
          id="edit-button"
          className="btn btn-primary mr-2"
        >
          <i className="fas fa-pen-alt"></i>
        </button>
        <button
          onClick={handleClick}
          id="delete-button"
          className="btn btn-danger"
        >
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
      </td>

    </tr>
  );
}
