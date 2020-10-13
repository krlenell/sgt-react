import React, { useState, useEffect, SyntheticEvent, FormEvent, ChangeEventHandler, ChangeEvent } from 'react'; // add useffect

interface GradeFormProps{
  addGrade: (newGrade: Grade) => void,
  formEdit: boolean,
  setFormEdit: (value: boolean | ((prevVar: boolean) => boolean)) => void,
  gradeToEdit: Grade | undefined,
  updateGrade: (updatedGrade: Grade) => void
}

export default function GradeForm(props: GradeFormProps): React.ReactElement {

  const [formGrade, setFormGrade] = useState({
    name: '',
    course: '',
    grade: ''
  });

  useEffect(() => {
    if (props.formEdit && props.gradeToEdit) {
      setFormGrade({
        name: props.gradeToEdit.name,
        course: props.gradeToEdit.course,
        grade: props.gradeToEdit.grade.toString()
      });
    }
  }, [props.gradeToEdit]);

  function handleReset(event: SyntheticEvent) {
    event.preventDefault();
    if (props.formEdit) {
      props.setFormEdit(false);
    }
    setFormGrade({
      name: '',
      course: '',
      grade: ''
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const target = event.target.id;
    setFormGrade({ ...formGrade, [target]: event.target.value });
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (props.formEdit && props.gradeToEdit) {
      const updatedGrade: Grade = { ...props.gradeToEdit };
      updatedGrade.name = formGrade.name;
      updatedGrade.course = formGrade.course;
      updatedGrade.grade = parseInt(formGrade.grade, 10);
      props.updateGrade(updatedGrade);
      props.setFormEdit(false);
    } else {
      const newGrade = {
        name: formGrade.name,
        course: formGrade.course,
        grade: parseInt(formGrade.grade, 10)
      };
      props.addGrade(newGrade);
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
          {props.formEdit ? 'Update' : 'Add'}
        </button>
        <button type="reset" className="btn ml-1 mr-1 btn-secondary">
          {props.formEdit ? 'Cancel' : 'Reset'}
        </button>
      </div>
    </form>
  );
}
