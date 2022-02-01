"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectField = void 0;
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const formik_material_ui_1 = require("formik-material-ui");
const OutlinedInput_1 = __importDefault(require("@material-ui/core/OutlinedInput"));
const SelectField = (_a) => {
    var { name, id, children } = _a, props = __rest(_a, ["name", "id", "children"]);
    return (react_1.default.createElement(formik_1.Field, Object.assign({ component: formik_material_ui_1.Select, input: react_1.default.createElement(OutlinedInput_1.default, { name: name, id: id, labelWidth: 100 }), name: name, id: id }, props), children));
};
exports.SelectField = SelectField;
exports.default = exports.SelectField;
