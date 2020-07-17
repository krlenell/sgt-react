import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
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

  componentDidUpdate() {
    this.getAverageGrade();
  }

  getAverageGrade() {
    const grades = this.state.grades;
    let sum = 0;
    grades.forEach(entry => { sum += entry.grade; });
    const average = Math.ceil(sum / grades.length);
    return average;
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <>
        <Header average={average}/>
        <GradeTable grades={this.state.grades}/>
      </>
    );
  }
}

export default App;
