import { Carta } from "../components/carta/carta";
import styles from "./cartas.module.css"

export const Cartas = () => {
    return (
        <>
                    <div className={styles.cartas}>
                        <h1>CARTAS</h1>
                    </div>
                    <div className={styles.comon}>Comunes</div>
                <div>
                    <Carta />
                    <Carta />
                    <Carta />
                    <Carta />
                    <Carta />
                    <Carta />
                    <Carta />
                    <Carta />
                </div>
        </>
    );
};
