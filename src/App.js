import React, { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import './prism.css'
import logo from './images/icons8-kiwi-80.png'
import SingleSelect from './examples/SingleSelect/SingleSelect'
import MultiSelect from './examples/MultiSelect/MultiSelect'
import Styling from './examples/Styling/Styling'

function App() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <Header>
        <img alt="icons8-kiwi-80.png" src={logo} />
        <h1>react-kiwi-dropdown</h1>
      </Header>

      <SingleSelect />
      <MultiSelect />
      <Styling />
    </div>
  )
}

export default App

const Header = styled.header`
  display: flex;
  align-items: baseline;
  margin-bottom: 40px;

  img {
    margin-top: 10px;
  }
`
