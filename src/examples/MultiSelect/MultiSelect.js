import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import { example_1 } from './example_1'
import Dropdown from 'react-kiwi-dropdown'

const options = [
  { value: 'kiwi', content: '🥝' },
  { value: 'banana', content: '🍌' },
  { value: 'pineapple', content: '🍍' }
]

const fruitBaskets = [
  { type: 'kiwi', text: '🥝' },
  { type: 'banana', text: '🍌' },
  { type: 'pineapple', text: '🍍' },
  { type: 'kiwi', text: '🥝' },
  { type: 'banana', text: '🍌' },
  { type: 'pineapple', text: '🍍' }
]

function MultiSelect() {
  const [selectedOption, setSelectedOption] = useState([])

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const onChange = option => {
    if (!option) {
      setSelectedOption([])
      return
    }

    if (selectedOption.includes(option.value)) {
      const newOptions = selectedOption.filter(
        oldOption => oldOption !== option.value
      )
      setSelectedOption(newOptions)
    } else {
      setSelectedOption([...selectedOption, option.value])
    }
  }

  return (
    <Example>
      <h2>Multi-select</h2>

      <Preview>
        <aside>
          <StyledDropdown
            options={options}
            onChange={onChange}
            resetValue={null}
            buttonIndicator
            selectedOption={selectedOption}
          />
        </aside>

        <BasketList>
          {fruitBaskets.map((basket, i) => (
            <Basket
              key={i}
              style={{
                background: selectedOption.includes(basket.type)
                  ? '#f0fedf'
                  : '#ddd'
              }}
            >
              {basket.text}
            </Basket>
          ))}
        </BasketList>
      </Preview>
      <pre>
        <code className="language-javascript">{example_1}</code>
      </pre>
    </Example>
  )
}

export default MultiSelect

const Example = styled.article``

const Preview = styled.div`
  display: flex;

  aside {
    flex: 1;
  }
`

const BasketList = styled.ul`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0%;
`

const Basket = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  font-size: 50px;
  margin: 5px;
  border-radius: 50%;
`

const StyledDropdown = styled(Dropdown)`
  .KIWI-button-indicator {
    &.selected {
      background: #f0fedf;
    }
  }

  .KIWI-option {
    font-size: 40px;

    &:focus,
    &:active {
      outline: none;
    }

    &.selected {
      background: #f0fedf;
    }

    &:hover {
      background: #ddd;
    }
  }
`
