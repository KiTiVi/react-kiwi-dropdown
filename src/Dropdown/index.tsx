import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SingleArrow, DoubleArrow } from './styles/arrows'

interface Option {
  value: string
  text: string
  icon?: any
}

interface Dropdown {
  options: Option[]
  selectedOption?: string
  onChange: (selectedOption: string) => void
  customContainerStyle?: string
  buttonLabel?: string
  buttonIndicator?: boolean
  buttonArrow?: 'single' | 'double'
  customButtonStyle?: string
  customButtonIndicatorStyle?: string
  checkedButtonIndicatorStyle?: string
  customOptionListStyle?: string
  customOptionStyle?: string
  selectedOptionIcon?: any
  selectedOptionStyle?: string
}

const Dropdown: React.FC<Dropdown> = ({
  options,
  selectedOption,
  onChange,
  customContainerStyle,
  buttonLabel,
  buttonIndicator,
  buttonArrow,
  customButtonStyle,
  customButtonIndicatorStyle,
  checkedButtonIndicatorStyle,
  customOptionListStyle,
  customOptionStyle,
  selectedOptionIcon,
  selectedOptionStyle
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const refDropdown = useRef<HTMLUListElement>(null)
  const refButtonIndicator = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (showOptions) {
      document.addEventListener('click', handleClick)
      return () => {
        document.removeEventListener('click', handleClick)
      }
    }
  }, [showOptions])

  const handleClick = (e: any) => {
    if (
      refDropdown &&
      refDropdown.current &&
      refDropdown.current.contains(e.target)
    ) {
      return
    }

    setShowOptions(false)
  }

  const toggleOptions = (e: any) => {
    if (
      selectedOption &&
      refButtonIndicator &&
      refButtonIndicator.current &&
      refButtonIndicator.current.contains(e.target)
    ) {
      return
    }
    setShowOptions(prevShowOptions => !prevShowOptions)
  }

  return (
    <Container customContainerStyle={customContainerStyle}>
      <Button
        onClick={e => toggleOptions(e)}
        customButtonStyle={customButtonStyle}
      >
        {buttonIndicator && (
          <ButtonIndicator
            ref={refButtonIndicator}
            className={selectedOption ? 'selected' : ''}
            customButtonIndicatorStyle={customButtonIndicatorStyle}
            checkedButtonIndicatorStyle={checkedButtonIndicatorStyle}
            onClick={() => selectedOption && onChange('')}
          />
        )}
        {buttonLabel && buttonLabel}
        {buttonArrow === 'double' && <DoubleArrow />}
        {!buttonArrow && <SingleArrow />}
      </Button>
      {showOptions && (
        <OptionList
          ref={refDropdown}
          customOptionListStyle={customOptionListStyle}
        >
          {options.map(option => (
            <li key={option.value}>
              <Option
                className={selectedOption === option.value ? 'selected' : ''}
                onClick={() => onChange(option.value)}
                customOptionStyle={customOptionStyle}
                selectedOptionStyle={selectedOptionStyle}
              >
                {option.icon}
                <span
                  style={{
                    opacity: selectedOption === option.value ? 1 : 0
                  }}
                >
                  {selectedOptionIcon}
                </span>

                {option.text}
              </Option>
            </li>
          ))}
        </OptionList>
      )}
    </Container>
  )
}

export default Dropdown

interface ContainerProps {
  readonly customContainerStyle?: string
}

const Container = styled.div<ContainerProps>`
  ${({ customContainerStyle }) => customContainerStyle}
`

interface ButtonProps {
  readonly customButtonStyle?: string
}

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  padding: 8px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;

  &:focus {
    outline: none;
  }

  ${({ customButtonStyle }) => customButtonStyle}
`

interface ButtonIndicatorProps {
  readonly customButtonIndicatorStyle?: string
  readonly checkedButtonIndicatorStyle?: string
}

const ButtonIndicator = styled.span<ButtonIndicatorProps>`
  display: inline-block;
  padding: 7px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin-right: 7.5px;

  ${({ customButtonIndicatorStyle }) => customButtonIndicatorStyle}

  &.selected {
    ${({ checkedButtonIndicatorStyle }) => checkedButtonIndicatorStyle};
  }
`

interface OptionProps {
  readonly customOptionStyle?: string
  readonly selectedOptionStyle?: string
}

const Option = styled.button<OptionProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  background: #fff;
  border: none;
  position: relative;
  font-size: 12px;

  &:hover {
    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;
  }

  ${({ customOptionStyle }) => customOptionStyle}

  &.selected {
    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;
    ${({ selectedOptionStyle }) => selectedOptionStyle}
  }
`

interface OptionListProps {
  readonly customOptionListStyle?: string
}

const OptionList = styled.ul<OptionListProps>`
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${({ customOptionListStyle }) => customOptionListStyle}
`
