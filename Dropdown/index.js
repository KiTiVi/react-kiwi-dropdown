"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./styles/Dropdown.css");
require("./styles/arrows.css");
var Dropdown = function (_a) {
    var options = _a.options, selectedOption = _a.selectedOption, resetValue = _a.resetValue, onChange = _a.onChange, buttonLabel = _a.buttonLabel, buttonIndicator = _a.buttonIndicator, buttonIndicatorContent = _a.buttonIndicatorContent, buttonArrow = _a.buttonArrow, selectedOptionIcon = _a.selectedOptionIcon, className = _a.className;
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
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("button", { onClick: function (e) { return toggleOptions(e); }, id: "KIWI-button" },
            buttonIndicator && (react_1.default.createElement("span", { ref: refButtonIndicator, className: "KIWI-button-indicator " + (selectedOption ? 'selected' : ''), onClick: function () { return selectedOption && onChange(resetValue); } }, buttonIndicatorContent)),
            buttonLabel && buttonLabel,
            buttonArrow === 'double' && react_1.default.createElement("span", { className: "KIWI-double-arrow" }),
            !buttonArrow && react_1.default.createElement("span", { className: "KIWI-single-arrow" })),
        showOptions && (react_1.default.createElement("ul", { ref: refDropdown, id: "KIWI-option-list" }, options.map(function (option) { return (react_1.default.createElement("li", { key: option.value },
            react_1.default.createElement("button", { className: "KIWI-option " + (selectedOption === option.value ||
                    (selectedOption.length &&
                        selectedOption.includes(option.value))
                    ? 'selected'
                    : ''), onClick: function () { return onChange(option); } },
                option.icon,
                react_1.default.createElement("span", { style: {
                        opacity: selectedOption === option.value ? 1 : 0
                    } }, selectedOptionIcon),
                option.content))); })))));
};
exports.default = Dropdown;
