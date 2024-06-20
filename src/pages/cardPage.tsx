import styles from "./cardPage.module.css";
import { useParams } from "react-router-dom";
import { clashOfClansDataSource } from "../dataSource/clashOfClansDataSource";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";

export const CardPage = () => {
    const { cardId } = useParams();

    const item = clashOfClansDataSource().getCardById(parseInt(cardId!));

    if (!item) return <></>;

    return (
        <div>
            <h2>{item.name}</h2>
            <div className={styles.container}>
                <img src={item.iconUrls.medium} alt="profile"></img>
                <strong>{capitalizeFirstLetter(item.rarity)}</strong>
                {!!item.health ? <div>Health: {item.health}</div> : <></>}
                {!!item.damage ? <div>Damage: {item.damage}</div> : <></>}
                <div>Elixir cost: {item.elixirCost}</div>
            </div>
        </div>
    );
};
