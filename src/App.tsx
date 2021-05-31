
import { GlobalStyle } from './GlobalStyles'
import InputMask from 'react-input-mask'
import axios from 'axios'

import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'
import Card from './components/Card'

import countryTypes from './types/countriesTypes'
import { useState, useEffect } from 'react'



export default function App() {


  const [countriesList, setCountriesList] = useState<string[]>()
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(() => {
    axios.get<countryTypes[]>('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const list = response.data.map(country => country.name)
        setCountriesList(list)
      })
  }, [])

  return (
    <>
      <GlobalStyle>
      </GlobalStyle>
      <Header />
      <main>
        <div className="main-container">
          <select name="find-country" onChange={e => setSelectedCountry(e.target.value)}>
            <option value={0}>Procurar por um país</option>
            {countriesList?.sort().map((country, index) => (
              <option value={country} key={index}>{country}</option>
            ))}
          </select>
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
        <Card />
        <Card />
        <Card />
        <p>{selectedCountry}</p>
      </div>
    </>
  )
}
