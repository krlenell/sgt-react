"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Header(props) {
    return (react_1.default.createElement("div", { className: "d-flex justify-content-between align-items-end" },
        react_1.default.createElement("h1", null, "Student Grade Table"),
        react_1.default.createElement("h3", { className: "mr-3" },
            "Average ",
            react_1.default.createElement("span", { className: "badge badge-secondary" }, props.average))));
}
exports.default = Header;
