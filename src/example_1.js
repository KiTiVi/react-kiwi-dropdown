export const example_1 = `import React, { useState } from 'react'
import Dropdown from 'react-kiwi-dropdown'

const options = [
  { value: 'kiwi', content: '🥝' },
  { value: 'banana', content: '🍌' },
  { value: 'pineapple', content: '🍍' }
]

const fruitBaskets = [
  { type: 'kiwi', text: 'Basket with 🥝' },
  { type: 'banana', text: 'Basket with 🍌' },
  { type: 'pineapple', text: 'Basket with 🍍' },
  { type: 'kiwi', text: 'Basket with 🥝' },
  { type: 'banana', text: 'Basket with 🍌' },
  { type: 'pineapple', text: 'Basket with 🍍' }
]

function App() {
  const [selectedOption, setSelectedOption] = useState('')

  const onChange = selectedOption => {
    setSelectedOption(selectedOption)
  }

  return (
    <section style={{ display: 'flex' }}>
      <aside style={{ marginRight: '40px' }}>
        <Dropdown
          options={options}
          onChange={onChange}
          buttonIndicator
          selectedOption={selectedOption}
        />
      </aside>
      <main>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {fruitBaskets.map((basket, i) => (
            <li
              key={i}
              style={{
                fontWeight: selectedOption === basket.type ? 'bold' : 'normal'
              }}
            >
              {basket.text}
            </li>
          ))}
        </ul>
      </main>
    </section>
  )
}

export default App
`
