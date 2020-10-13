'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
function Grade(props) {
  function handleClick(event) {
    let clicked = event.currentTarget.id;
    clicked = clicked.split('-')[0];
    if (clicked === 'delete') {
      const deleteId = props.grade.id;
      if (deleteId) {
        props.deleteGrade(deleteId);
      }
    }
    if (clicked === 'edit') {
      props.setFormEdit(true);
      props.setGradeToEdit(props.grade);
    }
  }
  return (react_1.default.createElement('tr', null,
    react_1.default.createElement('td', null, props.grade.name),
    react_1.default.createElement('td', null, props.grade.course),
    react_1.default.createElement('td', null, props.grade.grade),
    react_1.default.createElement('td', null,
      react_1.default.createElement('button', { onClick: handleClick, id: 'edit-button', className: 'btn btn-primary mr-2' },
        react_1.default.createElement('i', { className: 'fas fa-pen-alt' })),
      react_1.default.createElement('button', { onClick: handleClick, id: 'delete-button', className: 'btn btn-danger' },
        react_1.default.createElement('i', { className: 'fa fa-trash', 'aria-hidden': 'true' })))));
}
exports.default = Grade;
