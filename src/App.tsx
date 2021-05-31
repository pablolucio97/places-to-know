
import { useState, useEffect, ChangeEvent } from 'react'
import { GlobalStyle } from './GlobalStyles'
import InputMask from 'react-input-mask'
import axios from 'axios'

import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'
import Card from './components/Card'

import countryRequestTypes from './types/countriesTypes'
import countryCardsTypes from './types/countryCardsTypes'
import {postCard, deleteCard, editCard} from './utils/cardsControl'


export default function App() {


  const [countriesList, setCountriesList] = useState<string[]>()
  const [countriesCards, setCountriesCards] = useState<countryCardsTypes[]>()
  const [selectedCountry, setSelectedCountry] = useState('')
  const [countryId, setCountryId] = useState(0)
  const [currentCountryFlag, setCurrentCountryFlag] = useState('')
  const [local, setLocal] = useState('')
  const [goalDate, setGoalDate] = useState('')


  useEffect(() => {
    axios.get<countryRequestTypes[]>('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const list = response.data.map(country => country.name)
        setCountriesList(list)
      })
  }, [selectedCountry])


  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/name/${selectedCountry}?fullText=true`)
    .then( response => {
      const {flag} = response.data[0]
      console.log(flag)
      setCurrentCountryFlag(flag)
    })
  }, [selectedCountry])


  useEffect(() => {
    axios.get<countryCardsTypes[]>(`http://localhost:3333/places`)
    .then(response => {
    const list = response.data.map(card => card)
    setCountriesCards(list)
    })
  }, [countriesCards])


  return (
    <>
      <GlobalStyle>
      </GlobalStyle>
      <Header />
      <main>
        <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => {e.target.reset()}}>
        <div className="main-container">
          <select name="find-country" onChange={e => setSelectedCountry(e.target.value)}>
            <option value={0}>Procurar por um país</option>
            {countriesList?.sort().map((country, index) => (
              <option value={country} key={index}>{country}</option>
            ))}
          </select>
          <Input 
            editLocal={e => setLocal(e.target.value)}
          />
          <InputMask
            style={{
              borderRadius: 7,
              paddingLeft: 8,
              border: 'none'
            }}
            mask='99/2029'
            placeholder='mês/ano'
            onChange={e => setGoalDate(e.target.value)}
          />
          <Button />
        </div>
        </form>
      </main>
      <div className="cards-container">
       {countriesCards?.map(card => (
          <Card
          id={card.id}
          local={card.local}
          goalDate={card.goalDate}
          countryName={card.countryName}
          countryFlag={card.countryFlag}
          editCard={() => {editCard(card.id, local, goalDate, card.countryFlag)}}
          deleteCard={() => {deleteCard(card.id)}}
        />
       ))}
        <button 
          onClick={() => 
          postCard(
          countryId,
          selectedCountry,
          currentCountryFlag,
          local,
          goalDate
          )}>Test post</button>
      </div>
    </>
  )
}
