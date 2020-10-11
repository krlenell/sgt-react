import React, { useState, useEffect } from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

export default function App() {

  const [grades, setGrades] = useState();

  const [formEdit, setFormEdit] = useState(false)

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

  useEffect(() => {
    console.log("formEdit", formEdit)
  }, [formEdit])

  function addGrade(newGrade) {
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

  function deleteGrade(deleteId) {
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
        setGrades(grades.slice());
      });
  }

  function updateGrade(updateId, updates){
    console.log("updateId", updateId)
    console.table("updates", updates)
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
    return null;
  }
  return (
    <>
      <Header average={getAverageGrade()} />
      <div className="d-flex">
        <GradeTable
          grades={grades}
          deleteGrade={deleteGrade}
          setFormEdit={setFormEdit}
        />
        <GradeForm
          addGrade={addGrade}
          updateGrade={updateGrade}
          formEdit={formEdit}
          setFormEdit={setFormEdit}
        />
      </div>
    </>
  );
}
