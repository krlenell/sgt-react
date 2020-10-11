import React, { useState } from 'react';

export default function GradeForm({
  addGrade,
  formEdit,
  setFormEdit,
  gradeToEdit
}) {

  const [formGrade, setFormGrade] = useState({
    name: '',
    course: '',
    grade: ''
  });

  function handleReset(event) {
    event.preventDefault();
    if(formEdit){
      setFormEdit(false)
    }
    setFormGrade({
      name: '',
      course: '',
      grade: ''
    });
  }


  function handleChange(event) {
    const target = event.target.id;
    setFormGrade({ ...formGrade, [target]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: formGrade.name,
      course: formGrade.course,
      grade: parseInt(formGrade.grade, 10)
    };
    addGrade(newGrade);
    setFormGrade({
      name: '',
      course: '',
      grade: ''
    });
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="grade-form">
      <div className="input-group mb-1">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-user"></i></span>
        </div>
        <input id="name" onChange={handleChange} value={formGrade.name}
          type="text" className="form-control" placeholder="Name" />
      </div>
      <div className="input-group mb-1">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-list-alt"></i></span>
        </div>
        <input id="course" onChange={handleChange} value={formGrade.course}
          type="text" className="form-control" placeholder="Course" />
      </div>
      <div className="input-group mb-1">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
        </div>
        <input id="grade" onChange={handleChange} value={formGrade.grade}
          type="text" className="form-control" placeholder="Grade" />
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          {formEdit ? "Update" : "Add"}
        </button>
        <button type="reset" className="btn ml-1 mr-1 btn-secondary">
          {formEdit ? "Cancel" : "Reset"}
        </button>
      </div>
    </form>
  );
}
