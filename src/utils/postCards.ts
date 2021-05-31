import axios from "axios"

  export async function postCard(countryName: string, goalDate: string, local:string){
   await axios.post('http://localhost:3333/places', {
      id: Math.floor(Math.random() * 99),
      countryName: countryName,
      goalDate: goalDate,
      local: local
    })
    .then(() => console.log('ok'))
    .catch(error => {throw new Error(error)})
  }
