
import { GlobalStyle } from './GlobalStyles'

import Header from './components/Header'
import Select from './components/Select'
import Input from './components/Input'
import Button from './components/Button'

export default function App() {
    return (
      <>
        <GlobalStyle>
        </GlobalStyle>
        <Header/>
        <main>
            <Select/>
            <Input/>
            <Button/>
        </main>
      </>
    )
}
