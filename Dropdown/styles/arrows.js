"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
exports.SingleArrow = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  height: 0;\n  width: 0;\n  border-left: 5.5px solid rgba(0, 0, 0, 0);\n  border-right: 5.5px solid rgba(0, 0, 0, 0);\n  border-top: 5.5px solid rgba(0, 0, 0, 0.25);\n  position: relative;\n"], ["\n  display: inline-block;\n  height: 0;\n  width: 0;\n  border-left: 5.5px solid rgba(0, 0, 0, 0);\n  border-right: 5.5px solid rgba(0, 0, 0, 0);\n  border-top: 5.5px solid rgba(0, 0, 0, 0.25);\n  position: relative;\n"])));
exports.DoubleArrow = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  margin: 0 12px;\n\n  &::before {\n    content: '';\n    display: inline-block;\n    height: 0;\n    width: 0;\n    position: absolute;\n    top: -8.5px;\n    border-left: 5.5px solid rgba(0, 0, 0, 0);\n    border-right: 5.5px solid rgba(0, 0, 0, 0);\n    border-bottom: 5.5px solid rgba(0, 0, 0, 0.25);\n  }\n\n  &::after {\n    content: '';\n    display: inline-block;\n    height: 0;\n    width: 0;\n    position: absolute;\n    top: 1.5px;\n    border-left: 5.5px solid rgba(0, 0, 0, 0);\n    border-right: 5.5px solid rgba(0, 0, 0, 0);\n    border-top: 5.5px solid rgba(0, 0, 0, 0.25);\n  }\n"], ["\n  position: relative;\n  margin: 0 12px;\n\n  &::before {\n    content: '';\n    display: inline-block;\n    height: 0;\n    width: 0;\n    position: absolute;\n    top: -8.5px;\n    border-left: 5.5px solid rgba(0, 0, 0, 0);\n    border-right: 5.5px solid rgba(0, 0, 0, 0);\n    border-bottom: 5.5px solid rgba(0, 0, 0, 0.25);\n  }\n\n  &::after {\n    content: '';\n    display: inline-block;\n    height: 0;\n    width: 0;\n    position: absolute;\n    top: 1.5px;\n    border-left: 5.5px solid rgba(0, 0, 0, 0);\n    border-right: 5.5px solid rgba(0, 0, 0, 0);\n    border-top: 5.5px solid rgba(0, 0, 0, 0.25);\n  }\n"])));
var templateObject_1, templateObject_2;
