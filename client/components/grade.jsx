import React from 'react';

export default class Grade extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
        <td><button className="btn btn-danger">
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button></td>
      </tr>
    );
  }
}
