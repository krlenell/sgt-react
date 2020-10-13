'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? function (o, v) {
  Object.defineProperty(o, 'default', { enumerable: true, value: v });
} : function (o, v) {
  o.default = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importStar(require('react')); // add useffect
function GradeForm(props) {
  const [formGrade, setFormGrade] = react_1.useState({
    name: '',
    course: '',
    grade: ''
  });
  react_1.useEffect(() => {
    if (props.formEdit && props.gradeToEdit) {
      setFormGrade({
        name: props.gradeToEdit.name,
        course: props.gradeToEdit.course,
        grade: props.gradeToEdit.grade.toString()
      });
    }
  }, [props.gradeToEdit]);
  function handleReset(event) {
    event.preventDefault();
    if (props.formEdit) {
      props.setFormEdit(false);
    }
    setFormGrade({
      name: '',
      course: '',
      grade: ''
    });
  }
  function handleChange(event) {
    const target = event.target.id;
    setFormGrade(Object.assign(Object.assign({}, formGrade), { [target]: event.target.value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (props.formEdit && props.gradeToEdit) {
      const updatedGrade = Object.assign({}, props.gradeToEdit);
      updatedGrade.name = formGrade.name;
      updatedGrade.course = formGrade.course;
      updatedGrade.grade = parseInt(formGrade.grade, 10);
      props.updateGrade(updatedGrade);
      props.setFormEdit(false);
    } else {
      const newGrade = {
        name: formGrade.name,
        course: formGrade.course,
        grade: parseInt(formGrade.grade, 10)
      };
      props.addGrade(newGrade);
    }
    setFormGrade({
      name: '',
      course: '',
      grade: ''
    });
  }
  return (react_1.default.createElement('form', { onSubmit: handleSubmit, onReset: handleReset, className: 'grade-form' },
    react_1.default.createElement('div', { className: 'input-group mb-1' },
      react_1.default.createElement('div', { className: 'input-group-prepend' },
        react_1.default.createElement('span', { className: 'input-group-text' },
          react_1.default.createElement('i', { className: 'fas fa-user' }))),
      react_1.default.createElement('input', { id: 'name', onChange: handleChange, value: formGrade.name, type: 'text', className: 'form-control', placeholder: 'Name' })),
    react_1.default.createElement('div', { className: 'input-group mb-1' },
      react_1.default.createElement('div', { className: 'input-group-prepend' },
        react_1.default.createElement('span', { className: 'input-group-text' },
          react_1.default.createElement('i', { className: 'fas fa-list-alt' }))),
      react_1.default.createElement('input', { id: 'course', onChange: handleChange, value: formGrade.course, type: 'text', className: 'form-control', placeholder: 'Course' })),
    react_1.default.createElement('div', { className: 'input-group mb-1' },
      react_1.default.createElement('div', { className: 'input-group-prepend' },
        react_1.default.createElement('span', { className: 'input-group-text' },
          react_1.default.createElement('i', { className: 'fas fa-graduation-cap' }))),
      react_1.default.createElement('input', { id: 'grade', onChange: handleChange, value: formGrade.grade, type: 'text', className: 'form-control', placeholder: 'Grade' })),
    react_1.default.createElement('div', { className: 'd-flex justify-content-end' },
      react_1.default.createElement('button', { type: 'submit', className: 'btn btn-primary' }, props.formEdit ? 'Update' : 'Add'),
      react_1.default.createElement('button', { type: 'reset', className: 'btn ml-1 mr-1 btn-secondary' }, props.formEdit ? 'Cancel' : 'Reset'))));
}
exports.default = GradeForm;
