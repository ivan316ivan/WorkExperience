import styles from "./arena.module.css";

interface IProps {
    title: string;
    imgSrc?: string;
    cards: JSX.Element;
}

export const Arena = ({ title, imgSrc, cards }: IProps) => {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <img src={imgSrc}></img>
            <div className={styles.characters}>{cards}</div>
        </div>
    );
};
