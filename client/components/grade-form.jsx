import React, { useState, useEffect } from 'react'; //add useffect

export default function GradeForm({
  addGrade,
  formEdit,
  setFormEdit,
  gradeToEdit,
  updateGrade
}) {

  const [formGrade, setFormGrade] = useState({
    name: '',
    course: '',
    grade: ''
  });

  //useEffect ()=>
  // if formEdit
  //  setFormGrade  (grade to edit)
  //else: nothing?
  //useEffect callback to look for gradeToEdit

  useEffect(() => {
    if(formEdit){
      setFormGrade({
        name: gradeToEdit.name,
        course: gradeToEdit.course,
        grade: gradeToEdit.grade
      })
    }
  }, [gradeToEdit])

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
    if(formEdit){
      console.log("grade will be updated")
      const updatedGrade = {...gradeToEdit}
      updatedGrade.name= formGrade.name
      updatedGrade.course = formGrade.course
      updatedGrade.grade = parseInt(formGrade.grade,10)
      console.log("updatedGrade", updatedGrade)
      updateGrade(updatedGrade)
      setFormEdit(false)
    }
    else{
      const newGrade = {
        name: formGrade.name,
        course: formGrade.course,
        grade: parseInt(formGrade.grade, 10)
      };
      addGrade(newGrade);
    }
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
