
import { useState, useEffect, ChangeEvent, useRef } from 'react'
import { GlobalStyle } from './GlobalStyles'
import InputMask from 'react-input-mask'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'
import Card from './components/Card'
import ModalEdit from './components/ModalEdit'
import ModalDelete from './components/ModalDelete'

import countryRequestTypes from './types/countriesTypes'
import countryCardsTypes from './types/countryCardsTypes'
import { postCard, deleteCard, editCard } from './utils/cardsControl'


export default function App() {

  const formRef = useRef<HTMLFormElement>(null)

  const [countriesList, setCountriesList] = useState<string[]>()
  const [countriesCards, setCountriesCards] = useState<countryCardsTypes[]>()
  const [selectedCountry, setSelectedCountry] = useState('')
  const [countryId,] = useState(0)
  const [currentCountryFlag, setCurrentCountryFlag] = useState('')
  const [local, setLocal] = useState('')
  const [goalDate, setGoalDate] = useState('')
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [requestCount, setRequestCount] = useState(0)


  useEffect(() => {
    axios.get<countryRequestTypes[]>('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const list = response.data.map(country => country.name)
        setCountriesList(list)
      })
  }, [selectedCountry])


  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/name/${selectedCountry}?fullText=true`)
      .then(response => {
        const { flag } = response.data[0]
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
  }, [requestCount])



  return (
    <>
      <GlobalStyle>
      </GlobalStyle>
      <Header />
      <main>
        <form ref={formRef} onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
          postCard(
            countryId,
            selectedCountry,
            currentCountryFlag,
            local,
            goalDate,
          )
          e.preventDefault()
          formRef.current?.reset()
          setRequestCount(requestCount + 1)
        }}>

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
                border: 'none',
                height: 48
              }}
              mask='99/2029'
              placeholder='mês/ano'
              onChange={e => setGoalDate(e.target.value)}
            />
            <Button />
          </div>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </main>
      <div className="cards-container">

        {
          showModalDelete && countriesCards?.map(card => (
            <ModalDelete
              modalStatus={showModalDelete}
              deleteCard={() => {
                deleteCard(card.id)
                setRequestCount(requestCount + 1)
                setShowModalDelete(false)
              }}
              closeModalDelete={() => { setShowModalDelete(false) }}
            />
          ))
        }

        {
          showModalEdit && countriesCards?.map(card => (
            <ModalEdit
              modalStatus={showModalEdit}
              updateLocal={(e) => { setLocal(e.target.value) }}
              updateMeta={(e) => { setGoalDate(e.target.value) }}
              editCard={() => {
                editCard(
                  card.id,
                  local,
                  goalDate,
                  card.countryFlag,
                  card.countryName
                )
                setRequestCount(requestCount + 1)
                setShowModalEdit(false)
              }}
              closeModalEdit={() => { setShowModalEdit(false) }}
            />
          ))
        }

        {
          !showModalDelete && countriesCards?.map(card => (
            <Card
              id={card.id}
              local={card.local}
              goalDate={card.goalDate}
              countryName={card.countryName}
              countryFlag={card.countryFlag}
              editCard={() => {
                editCard(
                  card.id,
                  local,
                  goalDate,
                  card.countryFlag,
                  card.countryName
                )
              }}
              deleteCard={() => { deleteCard(card.id) }}
              openModalEdit={() => { setShowModalEdit(true) }}
              openModalDelete={() => { setShowModalDelete(true) }}
            />
          ))

        }
      </div>
    </>
  )
}
