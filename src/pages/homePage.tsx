import { useNavigate } from "react-router-dom";
import styles from "./homePage.module.css"

export const HomePage = () => {
    const navigate = useNavigate()

    return (<>

        <header className={styles.header}>
            CLASH ROYALE
        </header>

        <div onClick={() => {
            navigate("/cartas")
        }} className={styles.card}>cards</div>

        <div onClick={() => {
            navigate("/mapa")
        }} className={styles.mapas}>maps</div>

        <div onClick={() => {
            navigate("/mazos")
        }} className={styles.mazos}>decks</div>

        <div onClick={() => {
            navigate("/quiz")
        }} className={styles.quiz}>quiz</div>
        
        </>
    );
};
