
import { GlobalStyle } from './GlobalStyles'
import InputMask from 'react-input-mask'

import Header from './components/Header'
import Select from './components/Select'
import Input from './components/Input'
import Button from './components/Button'
import Card from './components/Card'





export default function App() {
  return (
    <>
      <GlobalStyle>
      </GlobalStyle>
      <Header />
      <main>
        <div className="main-container">
          <Select />
          <Input />
          <InputMask
          style={{
            borderRadius: 7,
            paddingLeft: 8,
            border: 'none'
          }}
          mask='99/2029'
          placeholder='mês/ano'
          />
          <Button />
        </div>
      </main>
      <div className="cards-container">
        <Card/>
        <Card/>
        <Card/>

      </div>
    </>
  )
}
