import React, { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import './prism.css'
import logo from './images/icons8-kiwi-80.png'
import MultiSelect from './examples/MultiSelect/MultiSelect'

function App() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <Header>
        <img alt="icons8-kiwi-80.png" src={logo} />
        <h1>react-kiwi-dropdown</h1>
      </Header>

      <MultiSelect />
    </div>
  )
}

export default App

const Header = styled.header`
  display: flex;
  align-items: baseline;

  img {
    margin-top: 10px;
  }
`
