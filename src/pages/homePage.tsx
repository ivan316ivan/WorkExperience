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
        }} className={styles.card}>cartas</div>

        <div onClick={() => {
            navigate("/mapa")
        }} className={styles.mapas}>mapas</div>

        <div onClick={() => {
            navigate("/mazos")
        }} className={styles.mazos}>mazos</div>

        <div onClick={() => {
            navigate("/quiz")
        }} className={styles.quiz}>quiz</div>
        
        </>
    );
};
