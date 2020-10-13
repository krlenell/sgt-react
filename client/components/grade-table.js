'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const grade_1 = __importDefault(require('./grade'));
function GradeTable(props) {
  const gradeList = props.grades.map(grade => (react_1.default.createElement(grade_1.default, { setGradeToEdit: props.setGradeToEdit, deleteGrade: props.deleteGrade, key: grade.id, grade: grade, setFormEdit: props.setFormEdit })));
  return (react_1.default.createElement('table', { className: 'table table-striped grade-table' },
    react_1.default.createElement('thead', { className: 'thead-dark' },
      react_1.default.createElement('tr', null,
        react_1.default.createElement('th', { scope: 'col' }, 'Name'),
        react_1.default.createElement('th', { scope: 'col' }, 'Course'),
        react_1.default.createElement('th', { scope: 'col' }, 'Grade'),
        react_1.default.createElement('th', { scope: 'col' }, 'Operations'))),
    react_1.default.createElement('tbody', null, gradeList)));
}
exports.default = GradeTable;
