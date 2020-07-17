import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addGrade = this.addGrade.bind(this);
    this.state = {
      grades: []
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

  render() {
    const average = this.getAverageGrade();
    return (
      <>
        <Header average={average}/>
        <div className="d-flex">
          <GradeTable grades={this.state.grades}/>
          <GradeForm onSubmit={this.addGrade}/>
        </div>
      </>
    );
  }
}

export default App;
