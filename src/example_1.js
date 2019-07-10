export const example_1 = `import React, { useState, useEffect } from 'react'
import Dropdown from 'react-kiwi-dropdown'
import logo from './images/icons8-kiwi-80.png'

const options = [
  { value: 'kiwi', text: 'Select kiwis' },
  { value: 'banana', text: 'Select bananas' },
  { value: 'pineapple', text: 'Select pineapples' }
]

const fruitBaskets = [
  { type: 'kiwi', text: 'Basket #1' },
  { type: 'banana', text: 'Basket #2' },
  { type: 'pineapple', text: 'Basket #3' },
  { type: 'kiwi', text: 'Basket #4' },
  { type: 'banana', text: 'Basket #5' },
  { type: 'pineapple', text: 'Basket #6' }
]

function App() {
  const [selectedOption, setSelectedOption] = useState('')

  const onChange = selectedOption => {
    setSelectedOption(selectedOption)
  }

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <header style={{ display: 'flex', alignItems: 'baseline' }}>
        <img alt="icons8-kiwi-80.png" src={logo} />
        <h1>react-kiwi-dropdown</h1>
      </header>

      <h2>Example #1</h2>
      <section style={{ display: 'flex' }}>
        <section style={{ display: 'flex' }}>
          <aside style={{ marginRight: '40px' }}>
            <Dropdown
              options={options}
              onChange={onChange}
              buttonIndicator
              selectedOption={selectedOption}
              checkedButtonIndicatorStyle={\`background: #000;\`}
            />
          </aside>
          <main>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {fruitBaskets.map((basket, i) => (
                <li
                  key={i}
                  style={{
                    fontWeight:
                      selectedOption === basket.type ? 'bold' : 'normal'
                  }}
                >
                  {basket.text}
                </li>
              ))}
            </ul>
          </main>
        </section>
      </section>
    </div>
  )
}

export default App
`
