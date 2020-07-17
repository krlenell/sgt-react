import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: {
        name: '',
        course: '',
        grade: ''
      }
    };
  }

  handleSubmit(event) {
    console.log('Form Submitted', event);
    event.preventDefault();
  }

  handleReset(event) {
    console.log('Form Reset', event);
    event.preventDefault();
  }

  handleChange(event) {
    console.log('Change', event);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.onReset} className="grade-form">
        <div className="input-group mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
          </div>
          <input id="name" onChange={this.handleChange} type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="input-group mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-list-alt"></i></span>
          </div>
          <input id="course" onChange={this.handleChange} type="text" className="form-control" placeholder="Course" />
        </div>
        <div className="input-group mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
          </div>
          <input id="grade" onChange={this.handleChange} type="text" className="form-control" placeholder="Grade" />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">Add</button>
          <button type="reset" className="btn ml-1 mr-1 btn-secondary">Reset</button>
        </div>
      </form>
    );
  }
}
