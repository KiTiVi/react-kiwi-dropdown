"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var arrows_1 = require("./styles/arrows");
var Dropdown = function (_a) {
    var options = _a.options, selectedOption = _a.selectedOption, onChange = _a.onChange, customContainerStyle = _a.customContainerStyle, buttonLabel = _a.buttonLabel, buttonIndicator = _a.buttonIndicator, buttonArrow = _a.buttonArrow, customButtonStyle = _a.customButtonStyle, customButtonIndicatorStyle = _a.customButtonIndicatorStyle, checkedButtonIndicatorStyle = _a.checkedButtonIndicatorStyle, customOptionListStyle = _a.customOptionListStyle, customOptionStyle = _a.customOptionStyle, selectedOptionIcon = _a.selectedOptionIcon, selectedOptionStyle = _a.selectedOptionStyle;
    var _b = react_1.useState(false), showOptions = _b[0], setShowOptions = _b[1];
    var refDropdown = react_1.useRef(null);
    var refButtonIndicator = react_1.useRef(null);
    react_1.useEffect(function () {
        if (showOptions) {
            document.addEventListener('click', handleClick);
            return function () {
                document.removeEventListener('click', handleClick);
            };
        }
    }, [showOptions]);
    var handleClick = function (e) {
        if (refDropdown &&
            refDropdown.current &&
            refDropdown.current.contains(e.target)) {
            return;
        }
        setShowOptions(false);
    };
    var toggleOptions = function (e) {
        if (selectedOption &&
            refButtonIndicator &&
            refButtonIndicator.current &&
            refButtonIndicator.current.contains(e.target)) {
            return;
        }
        setShowOptions(function (prevShowOptions) { return !prevShowOptions; });
    };
    return (react_1.default.createElement(Container, { customContainerStyle: customContainerStyle },
        react_1.default.createElement(Button, { onClick: function (e) { return toggleOptions(e); }, customButtonStyle: customButtonStyle },
            buttonIndicator && (react_1.default.createElement(ButtonIndicator, { ref: refButtonIndicator, className: selectedOption ? 'selected' : '', customButtonIndicatorStyle: customButtonIndicatorStyle, checkedButtonIndicatorStyle: checkedButtonIndicatorStyle, onClick: function () { return selectedOption && onChange(''); } })),
            buttonLabel && buttonLabel,
            buttonArrow === 'double' && react_1.default.createElement(arrows_1.DoubleArrow, null),
            !buttonArrow && react_1.default.createElement(arrows_1.SingleArrow, null)),
        showOptions && (react_1.default.createElement(OptionList, { ref: refDropdown, customOptionListStyle: customOptionListStyle }, options.map(function (option) { return (react_1.default.createElement("li", { key: option.value },
            react_1.default.createElement(Option, { className: selectedOption === option.value ? 'selected' : '', onClick: function () { return onChange(option.value); }, customOptionStyle: customOptionStyle, selectedOptionStyle: selectedOptionStyle },
                option.icon,
                react_1.default.createElement("span", { style: {
                        opacity: selectedOption === option.value ? 1 : 0
                    } }, selectedOptionIcon),
                option.text))); })))));
};
exports.default = Dropdown;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var customContainerStyle = _a.customContainerStyle;
    return customContainerStyle;
});
var Button = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 35px;\n  padding: 8px;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 14px;\n\n  &:focus {\n    outline: none;\n  }\n\n  ", "\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 35px;\n  padding: 8px;\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 14px;\n\n  &:focus {\n    outline: none;\n  }\n\n  ", "\n"])), function (_a) {
    var customButtonStyle = _a.customButtonStyle;
    return customButtonStyle;
});
var ButtonIndicator = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  padding: 7px;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  margin-right: 7.5px;\n\n  ", "\n\n  &.selected {\n    ", ";\n  }\n"], ["\n  display: inline-block;\n  padding: 7px;\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  margin-right: 7.5px;\n\n  ", "\n\n  &.selected {\n    ", ";\n  }\n"])), function (_a) {
    var customButtonIndicatorStyle = _a.customButtonIndicatorStyle;
    return customButtonIndicatorStyle;
}, function (_a) {
    var checkedButtonIndicatorStyle = _a.checkedButtonIndicatorStyle;
    return checkedButtonIndicatorStyle;
});
var Option = styled_components_1.default.button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px;\n  background: #fff;\n  border: none;\n  position: relative;\n  font-size: 12px;\n\n  &:hover {\n    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;\n  }\n\n  ", "\n\n  &.selected {\n    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;\n    ", "\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px;\n  background: #fff;\n  border: none;\n  position: relative;\n  font-size: 12px;\n\n  &:hover {\n    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;\n  }\n\n  ", "\n\n  &.selected {\n    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;\n    ", "\n  }\n"])), function (_a) {
    var customOptionStyle = _a.customOptionStyle;
    return customOptionStyle;
}, function (_a) {
    var selectedOptionStyle = _a.selectedOptionStyle;
    return selectedOptionStyle;
});
var OptionList = styled_components_1.default.ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n\n  ", "\n"], ["\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n\n  ", "\n"])), function (_a) {
    var customOptionListStyle = _a.customOptionListStyle;
    return customOptionListStyle;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;