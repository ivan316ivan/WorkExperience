import axios from "axios";
import cards from "../assets/response_1718700344564.json";
import { IItemsResponse } from "../models/items";

const API_URL = "https://api.clashroyale.com/v1/";

export const clashOfClansDataSource = () => {
    const getCards = async (): Promise<IItemsResponse> => {
        return cards as IItemsResponse;

        return await axios.get(`/api/v1/cards`, {
            headers: {
                Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
            },
        });
    };

    return { getCards };
};
