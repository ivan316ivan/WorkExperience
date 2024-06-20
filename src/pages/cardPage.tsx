import { useParams } from "react-router-dom";
import { Card } from "../components/card/card";
import { clashOfClansDataSource } from "../dataSource/clashOfClansDataSource";

export const CardPage = () => {
    const { cardId } = useParams();

    return (
        <>
            <Card
                item={clashOfClansDataSource().getCardById(parseInt(cardId!))}
            ></Card>
        </>
    );
};
