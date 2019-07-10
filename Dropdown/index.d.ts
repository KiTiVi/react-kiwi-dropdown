import React from 'react';
interface Option {
    value: string;
    text: string;
    icon?: any;
}
interface Dropdown {
    options: Option[];
    selectedOption?: string;
    onChange: (selectedOption: string) => void;
    customContainerStyle?: string;
    buttonLabel?: string;
    buttonIndicator?: boolean;
    buttonArrow?: 'single' | 'double';
    customButtonStyle?: string;
    customButtonIndicatorStyle?: string;
    checkedButtonIndicatorStyle?: string;
    customOptionListStyle?: string;
    customOptionStyle?: string;
    selectedOptionIcon?: any;
    selectedOptionStyle?: string;
}
declare const Dropdown: React.FC<Dropdown>;
export default Dropdown;
interface OptionProps {
    readonly customOptionStyle?: string;
    readonly selectedOptionStyle?: string;
}
declare const Option: import("styled-components").StyledComponent<"button", any, OptionProps, never>;
