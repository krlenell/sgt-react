import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      course: '',
      grade: '',
      editState: false
    };
  }

  handleSubmit(event) {
    if (this.state.editState) {
      console.log('sending to the app');
      return;
    }
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: parseInt(this.state.grade, 10)
    };
    this.props.onSubmit(newGrade);
    this.reset();
  }

  reset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset(e) {
    event.preventDefault();
    if (this.state.editState) {
      this.props.stopEditing();
    } else {
      this.reset();
    }
  }

  handleChange(event) {
    const target = event.target.id;
    this.setState({ [target]: event.target.value });
  }

  componentDidUpdate(prevProps) {
    if (this.props.editState !== prevProps.editState) {
      if (this.props.editState === true) {
        const editGrade = this.props.editGrade;
        this.setState({
          name: editGrade.name,
          course: editGrade.course,
          grade: editGrade.grade,
          editState: true
        });
      } else {
        this.setState({
          editState: false
        });
        this.reset();
      }
    }
  }

  render() {
    let buttonsText = { submit: 'Add', reset: 'Reset' };
    if (this.state.editState) {
      buttonsText = { submit: 'Update', reset: 'Cancel' };
    }
    return (
      <form
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
        className="grade-form">
        <div className="input-group mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-user"></i>
            </span>
          </div>
          <input
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="input-group mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-list-alt"></i>
            </span>
          </div>
          <input
            id="course"
            onChange={this.handleChange}
            value={this.state.course}
            type="text"
            className="form-control"
            placeholder="Course"
          />
        </div>
        <div className="input-group mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-graduation-cap"></i>
            </span>
          </div>
          <input
            id="grade"
            onChange={this.handleChange}
            value={this.state.grade}
            type="text"
            className="form-control"
            placeholder="Grade"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            {buttonsText.submit}
          </button>
          <button type="reset" className="btn ml-1 mr-1 btn-secondary">
            {buttonsText.reset}
          </button>
        </div>
      </form>
    );
  }
}
