import React from 'react';
interface Option {
    value: string;
    content: any;
    icon?: any;
}
interface Dropdown {
    options: Option[];
    selectedOption?: string;
    onChange: (selectedOption: string) => void;
    buttonLabel?: string;
    buttonIndicator?: boolean;
    buttonArrow?: 'single' | 'double';
    selectedOptionIcon?: any;
    className?: string;
}
declare const Dropdown: React.FC<Dropdown>;
export default Dropdown;
declare const Option: import("styled-components").StyledComponent<"button", any, {}, never>;
