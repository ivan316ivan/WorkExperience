import axios from "axios"
import cards from "../assets/response_1718700344564.json"

const API_URL = "https://api.clashroyale.com/v1/"

export const clashOfClansDataSource = () => {
    const getCards = ():any => {
        return cards;

        return axios.get(`${API_URL}cards`, {headers: {
            Authorization: "Bearer " + import.meta.env.VITE_API_KEY
        }})
    }

    return {getCards}
}