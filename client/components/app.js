"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const header_1 = __importDefault(require("./header"));
const grade_table_1 = __importDefault(require("./grade-table"));
const grade_form_1 = __importDefault(require("./grade-form"));
function App() {
    const [grades, setGrades] = react_1.useState([]);
    const [formEdit, setFormEdit] = react_1.useState(false);
    const [gradeToEdit, setGradeToEdit] = react_1.useState();
    react_1.useEffect(() => {
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
            if (grade.id) {
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
    function updateGrade(updatedGrade) {
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
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(header_1.default, { average: getAverageGrade() }),
        react_1.default.createElement("div", { className: "d-flex" },
            react_1.default.createElement(grade_table_1.default, { setGradeToEdit: setGradeToEdit, grades: grades, deleteGrade: deleteGrade, setFormEdit: setFormEdit }),
            react_1.default.createElement(grade_form_1.default, { addGrade: addGrade, updateGrade: updateGrade, formEdit: formEdit, setFormEdit: setFormEdit, gradeToEdit: gradeToEdit }))));
}
exports.default = App;
