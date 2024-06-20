import { Tooltip } from "antd";
import styles from "./card.module.css";
import { IItem } from "../../models/items";
import { useNavigate } from "react-router-dom";

interface IProps {
    item?: IItem;
}

export const Card = ({ item }: IProps) => {
    const navigate = useNavigate();

    if (!item) return <></>;

    return (
        <>
            <Tooltip title={"Elixir cost: " + item.elixirCost}>
                <div
                    className={styles.card}
                    onClick={() => {
                        navigate("/card/" + item.id);
                    }}
                >
                    <h4>{item.name}</h4>
                    <img src={item.iconUrls.medium} alt="cardImg"></img>
                </div>
            </Tooltip>
        </>
    );
};
