import React from 'react';
import './Dropdown.css';
import './arrows.css';
interface Option {
    value: string;
    content: any;
    icon?: any;
}
interface Dropdown {
    options: Option[];
    selectedOption?: string | string[];
    resetValue?: any;
    onChange: (selectedOption: any) => void;
    buttonLabel?: string;
    buttonIndicator?: boolean;
    buttonIndicatorContent?: any;
    buttonArrow?: 'single' | 'double';
    selectedOptionIcon?: any;
    className?: string;
}
declare const Dropdown: React.FC<Dropdown>;
export default Dropdown;
