import React, {Dispatch, SetStateAction} from 'react';
import Grade from './grade';

interface GradeTableProps {
  grades: Grade[],
  deleteGrade: (deleteId: number) => void,
  setFormEdit: (value: boolean | ((prevVar: boolean) => boolean)) => void,
  setGradeToEdit: Dispatch<SetStateAction<Grade | undefined>>
}

export default function GradeTable(props: GradeTableProps): React.ReactElement{

  const gradeList = props.grades.map(grade => (
    <Grade
      setGradeToEdit={props.setGradeToEdit}
      deleteGrade={props.deleteGrade}
      key={grade.id}
      grade={grade}
      setFormEdit={props.setFormEdit}
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
