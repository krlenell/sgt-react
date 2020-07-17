import React from 'react';
import Grade from './grade.jsx';

export default class GradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.getDeleteId = this.getDeleteId.bind(this);
  }

  getDeleteId(deleteId) {
    this.props.onSubmit(deleteId);
  }

  render() {
    const grades = this.props.grades.map(grade => (
      <Grade onSubmit={this.getDeleteId} key={grade.id} grade={grade}/>
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
          {grades}
        </tbody>
      </table>
    );
  }
}
