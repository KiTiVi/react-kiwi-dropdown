import React, { useState, useEffect, useRef } from 'react'
import './Dropdown.css'
import './arrows.css'

interface Option {
  value: string
  content: any
  icon?: any
}

interface Dropdown {
  options: Option[]
  selectedOption?: string | string[]
  resetValue?: any
  onChange: (selectedOption: any) => void
  buttonLabel?: string
  buttonIndicator?: boolean
  buttonIndicatorContent?: any
  buttonArrow?: 'single' | 'double'
  selectedOptionIcon?: any
  className?: string
}

const Dropdown: React.FC<Dropdown> = ({
  options,
  selectedOption,
  resetValue,
  onChange,
  buttonLabel,
  buttonIndicator,
  buttonIndicatorContent,
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
      <button onClick={e => toggleOptions(e)} className="KIWI-button">
        {buttonIndicator && (
          <span
            ref={refButtonIndicator}
            className={`KIWI-button-indicator ${
              selectedOption && selectedOption.length ? 'selected' : ''
            }`}
            onClick={() => selectedOption && onChange(resetValue)}
          >
            {buttonIndicatorContent}
          </span>
        )}
        {buttonLabel && buttonLabel}
        {buttonArrow === 'double' && <span className="KIWI-double-arrow" />}
        {!buttonArrow && <span className="KIWI-single-arrow" />}
      </button>
      {showOptions && (
        <ul ref={refDropdown} className="KIWI-option-list">
          {options.map(option => (
            <li key={option.value}>
              <button
                className={`KIWI-option ${
                  selectedOption === option.value ||
                  (selectedOption &&
                    selectedOption.length &&
                    selectedOption.includes(option.value))
                    ? 'selected'
                    : ''
                }`}
                onClick={() => onChange(option)}
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
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
