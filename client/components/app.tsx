import React, { useState, useEffect } from 'react';
import Header from './header';
import GradeTable from './grade-table'
import GradeForm from './grade-form'

export default function App(): React.ReactElement{

  const [grades, setGrades] = useState<Grade[]>([]);

  const [formEdit, setFormEdit] = useState(false);

  const [gradeToEdit, setGradeToEdit] = useState<Grade>();

  useEffect(() => {
    fetch('http://localhost:3000/api/grades', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setGrades(data);
      });
  }, []);

  function addGrade(newGrade: Grade) {
    fetch('http://localhost:3000/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => {
        const newData = grades.concat(data);
        setGrades(newData);
      });
  }

  function deleteGrade(deleteId: number) {
    let idIndex;
    grades.forEach((grade, index) => {
      if(grade.id){
        if (grade.id === deleteId) {
          idIndex = index;
          grades.splice(idIndex, 1);
        }
      }
    });
    fetch(`http://localhost:3000/api/grades/${deleteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setGrades(grades.slice());
      });
  }

  function updateGrade(updatedGrade: Grade) {
    const { id: updateId } = updatedGrade;
    fetch(`http://localhost:3000/api/grades/${updateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedGrade)
    })
      .then(response => response.json())
      .then(data => {
        let idIndex;
        const gradesCopy = JSON.parse(JSON.stringify(grades));
        grades.forEach((grade, index) => {
          if (grade.id === updateId) {
            idIndex = index;
          }
        });
        gradesCopy.splice(idIndex, 1, data);
        setGrades(gradesCopy);
      });
  }

  function getAverageGrade() {
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

  if (grades === undefined) {
    return <></>;
  }
  return (
    <>
      <Header average={getAverageGrade()} />
      <div className="d-flex">
        <GradeTable
          setGradeToEdit={setGradeToEdit}
          grades={grades}
          deleteGrade={deleteGrade}
          setFormEdit={setFormEdit}
        />
        <GradeForm
          addGrade={addGrade}
          updateGrade={updateGrade}
          formEdit={formEdit}
          setFormEdit={setFormEdit}
          gradeToEdit={gradeToEdit}
        />
      </div>
    </>
  );
}
