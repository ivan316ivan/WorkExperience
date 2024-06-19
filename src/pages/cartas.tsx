import { Carta } from "../components/carta/carta";
import styles from "./cartas.module.css";

export const Cartas = () => {
    return (
        <>
            <div className={styles.cartas}>
                <h1>CARTAS</h1>
            </div>
            <div className={styles.common}>Comunes</div>
            <div className={styles.content}>
                <Carta
                    title="caballero"
                    imgLink="https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                />
                <Carta
                    title="arqueras"
                    imgLink="https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                />
                <Carta
                    title="caballero"
                    imgLink="https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                />
                <Carta
                    title="caballero"
                    imgLink="https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png"
                />
            </div>
        </>
    );
};
