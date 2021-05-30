
import { GlobalStyle } from './GlobalStyles'

import Header from './components/Header'
import Select from './components/Select'
import Input from './components/Input'
import MetaInput from './components/MetaInput'
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
          <MetaInput />
          <Button />
        </div>
      </main>
      <div className="cards-container">
        <Card/>
      </div>
    </>
  )
}
