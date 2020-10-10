import React from 'react';

export default function Grade({ grade, onSubmit }) {
  function handleClick(event) {
    const deleteId = grade.id;
    onSubmit(deleteId);
  }

  return (
    <tr>
      <td>{grade.name}</td>
      <td>{grade.course}</td>
      <td>{grade.grade}</td>
      <td><button onClick={handleClick} className="btn btn-danger">
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button></td>
    </tr>
  );
}

// export default class Grade extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     const deleteId = grade.id;
//     this.props.onSubmit(deleteId);
//   }

//   render() {
//     return (
//       <tr>
//         <td>{this.props.grade.name}</td>
//         <td>{this.props.grade.course}</td>
//         <td>{this.props.grade.grade}</td>
//         <td><button onClick={this.handleClick} className="btn btn-danger">
//           <i className="fa fa-trash" aria-hidden="true"></i>
//         </button></td>
//       </tr>
//     );
//   }
// }
