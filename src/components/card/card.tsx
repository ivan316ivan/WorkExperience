import { Tooltip } from "antd";
import styles from "./card.module.css";
import { IItem } from "../../models/items";

interface IProps {
    item: IItem;
}

export const Card = ({ item }: IProps) => {
    return (
        <>
            <Tooltip title={"Elixir cost: " + item.elixirCost}>
                <div className={styles.carta}>
                    <h4>{item.name}</h4>
                    <img src={item.iconUrls.medium} alt="cardImg"></img>
                </div>
            </Tooltip>
        </>
    );
};
