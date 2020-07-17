import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <h1>Student Grade Table</h1>
        <h3>Average <span className="badge badge-secondary">{this.props.average}</span></h3>
      </div>
    );
  }
}
