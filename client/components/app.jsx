import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.toggleFormEdit = this.toggleFormEdit.bind(this);
    this.state = {
      grades: [],
      editGrade: {},
      editState: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/grades', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data });
      });
  }

  addGrade(newGrade) {
    fetch('http://localhost:3000/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => {
        const newData = this.state.grades.concat(data);
        this.setState({ grades: newData });
      });
  }

  deleteGrade(deleteId) {
    const grades = this.state.grades.slice();
    let idIndex;
    grades.forEach((grade, index) => {
      if (grade.id === deleteId) {
        idIndex = index;
      }
    });
    grades.splice(idIndex, 1);
    fetch(`http://localhost:3000/api/grades/${deleteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: grades });
      });
  }

  getAverageGrade() {
    const grades = this.state.grades;
    if (!grades.length) {
      return 0;
    }
    let sum = 0;
    grades.forEach(entry => { sum += entry.grade; });
    if (!sum) {
      return 0;
    }
    const average = Math.ceil(sum / grades.length);
    return average;
  }

  toggleFormEdit(grade) {
    this.setState({
      editGrade: grade,
      editState: true
    }, () => console.log(this.state));
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <>
        <Header average={average}/>
        <div className="d-flex">
          <GradeTable
            toggleFormEdit={this.toggleFormEdit}
            grades={this.state.grades}
            onSubmit={this.deleteGrade}
          />
          <GradeForm
            onSubmit={this.addGrade}
            editGrade={this.state.editGrade}
            editState={this.state.editState}
          />
        </div>
      </>
    );
  }
}

export default App;
