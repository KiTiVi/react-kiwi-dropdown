export const code = `import React, { useState } from 'react'
import styled from 'styled-components'
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

function SingleSelect() {
  const [showCode, setShowCode] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const onChange = option => {
    if (option.value === selectedOption) {
      setSelectedOption('')
    } else {
      setSelectedOption(option.value)
    }
  }

  return (
    <StyledDropdown
      options={options}
      onChange={onChange}
      resetValue={''}
      buttonIndicator
      selectedOption={selectedOption}
    />

    <BasketList>
      {fruitBaskets.map((basket, i) => (
        <Basket
          key={i}
          style={{
            background: selectedOption === basket.type ? '#f0fedf' : '#ddd'
          }}
        >
          {basket.text}
        </Basket>
      ))}
    </BasketList>
  )
}

export default SingleSelect

const Preview = styled.div\`
  display: flex;

  aside {
    flex: 1;
  }
\`

const BasketList = styled.ul\`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0%;
\`

const Basket = styled.li\`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  font-size: 50px;
  margin: 5px;
  border-radius: 50%;
\`

const StyledDropdown = styled(Dropdown)\`
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
\`
`
