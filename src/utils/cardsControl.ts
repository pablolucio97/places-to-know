import axios from "axios"

  export async function postCard(
    cardId: number,
    countryName: string,
    countryFlag: string,
    local: string,
    goalDate: string,
  ) {
    await axios
      .post("http://localhost:3333/places", {
        cardId: cardId,
        countryName: countryName,
        countryFlag: countryFlag,
        local: local,
        goalDate: goalDate,
      })
      .then(() => console.log("ok"))
      .catch((error) => {
        throw new Error(error);
      });
  }

  export async function deleteCard(id: number){
    await axios.delete(`http://localhost:3333/places/${id}`)
  }

  export async function editCard(id: number, local: string, goalDate: string, countryFlag: string){
    await axios.put(`http://localhost:3333/places/${id}`, {
      local: local,
      goalDate: goalDate,
      countryFlag: countryFlag
    })


  }
