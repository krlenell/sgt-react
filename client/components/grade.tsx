import React, {Dispatch, SetStateAction} from 'react';

interface GradeProps{
  grade: Grade,
  deleteGrade: (deleteId: number) => void,
  setFormEdit: (value: boolean | ((prevVar: boolean) => boolean)) => void,
  setGradeToEdit: Dispatch<SetStateAction<Grade | undefined>>
}

export default function Grade(props: GradeProps): React.ReactElement{

  function handleClick(event: React.MouseEvent<HTMLButtonElement>):void {
    let clicked = event.currentTarget.id;
    clicked = clicked.split('-')[0];
    if (clicked === 'delete') {
      const deleteId = props.grade.id;
      if(deleteId){
        props.deleteGrade(deleteId);
      }
    }
    if (clicked === 'edit') {
      props.setFormEdit(true);
      props.setGradeToEdit(props.grade);
    }
  }

  return (
    <tr>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
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
