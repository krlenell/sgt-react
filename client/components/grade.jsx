import React from 'react';

export default class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === 'delete') {
      const deleteId = this.props.grade.id;
      this.props.onSubmit(deleteId);
    }
    if (e.currentTarget.id === 'edit') {
      console.log("I'm gonna edit bro");
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
        <td>
          <button
            id="edit"
            onClick={this.handleClick}
            className="btn btn-primary mr-1"
          >
            Edit
          </button>
          <button
            id="delete"
            onClick={this.handleClick}
            className="btn btn-danger"
          >
            <i className="fa fa-trash " aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  }
}
