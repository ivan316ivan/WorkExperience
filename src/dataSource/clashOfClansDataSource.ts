import axios from "axios";
import cards from "../assets/response_1718700344564.json";
import { IItem, IItemsResponse } from "../models/items";

const API_URL = "https://api.clashroyale.com/v1/";

export const clashOfClansDataSource = () => {
    const getCards = async (): Promise<IItemsResponse> => {
        return cards as IItemsResponse;

        /*return await axios.get(`/api/v1/cards`, {
            headers: {
                Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
            },
        });*/
    };

    const getCardByName = (name: string) =>
        cards.items.find((card) => card.name === name) as IItem | undefined;

    const getCardById = (id: number) =>
        cards.items.find((card) => card.id === id) as IItem | undefined;

    return { getCards, getCardByName, getCardById };
};
