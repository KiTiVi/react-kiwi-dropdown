import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SingleArrow, DoubleArrow } from './styles/arrows'

interface Option {
  value: string
  content: any
  icon?: any
}

interface Dropdown {
  options: Option[]
  selectedOption?: string
  onChange: (selectedOption: string) => void
  buttonLabel?: string
  buttonIndicator?: boolean
  buttonArrow?: 'single' | 'double'
  selectedOptionIcon?: any
  className?: string
}

const Dropdown: React.FC<Dropdown> = ({
  options,
  selectedOption,
  onChange,
  buttonLabel,
  buttonIndicator,
  buttonArrow,
  selectedOptionIcon,
  className
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
    <div className={className}>
      <Button onClick={e => toggleOptions(e)} id="button">
        {buttonIndicator && (
          <ButtonIndicator
            ref={refButtonIndicator}
            className={`button-indicator ${selectedOption ? 'selected' : ''}`}
            onClick={() => selectedOption && onChange('')}
          />
        )}
        {buttonLabel && buttonLabel}
        {buttonArrow === 'double' && <DoubleArrow />}
        {!buttonArrow && <SingleArrow />}
      </Button>
      {showOptions && (
        <OptionList ref={refDropdown} id="option-list">
          {options.map(option => (
            <li key={option.value}>
              <Option
                className={`option ${
                  selectedOption === option.value ? 'selected' : ''
                }`}
                onClick={() => onChange(option.value)}
              >
                {option.icon}
                <span
                  style={{
                    opacity: selectedOption === option.value ? 1 : 0
                  }}
                >
                  {selectedOptionIcon}
                </span>

                {option.content}
              </Option>
            </li>
          ))}
        </OptionList>
      )}
    </div>
  )
}

export default Dropdown

const Button = styled.button`
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
`

const ButtonIndicator = styled.span`
  display: inline-block;
  padding: 7px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin-right: 7.5px;
`

const OptionList = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Option = styled.button`
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

  &.selected {
    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;
  }
`
