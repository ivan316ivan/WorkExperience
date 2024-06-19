import styles from "./carta.module.css";

interface IProps {
    title: string;
    imgLink: string;
}

export const Carta = ({ title, imgLink }: IProps) => {
    return (
        <>
            <div className={styles.carta}>
                <h4>{title}</h4>
                <img src={imgLink} alt="caballero"></img>
            </div>
        </>
    );
};
