import axios from "axios"
import { toast } from "react-toastify";

  export const  postCard = async (
    countryName: string,
    countryFlag: string,
    local: string,
    goalDate: string,
  ) => {
    await axios
      .post("http://localhost:3333/places", {
        countryName: countryName,
        countryFlag: countryFlag,
        local: local,
        goalDate: goalDate,
      })
   
      toast.success('Você adicionou um novo lugar', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false
        });
  }

  export async function deleteCard(id: number){
    await axios.delete(`http://localhost:3333/places/${id}`)
    toast.warn('Você deletou um card.', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: false
    })
  }

  export async function editCard(
    id: number,
    local: string,
    goalDate: string,
    countryFlag: string,
    countryName: string
  ) {
    await axios.put(`http://localhost:3333/places/${id}`, {
      local: local,
      goalDate: goalDate,
      countryFlag: countryFlag,
      countryName: countryName
    });
  }
