import React from 'react';

export default class GradeForm extends React.Component {

  render() {
    return (
      <form>
        <div className="input-group mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
          </div>
          <input type="text" className="form-control" placeholder="Name" id="name"/>
        </div>
        <div className="input-group mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-list-alt"></i></span>
          </div>
          <input type="text" className="form-control" placeholder="Course" id="course"/>
        </div>
        <div className="input-group mb-1">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
          </div>
          <input type="text" className="form-control" placeholder="Grade" id="grade"/>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" id="submit" className="btn btn-primary">Add</button>
          <button type="reset" id="reset" className="btn ml-1 mr-1 btn-secondary">Reset</button>
        </div>
      </form>
    );
  }
}
