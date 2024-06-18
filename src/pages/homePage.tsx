import { useNavigate } from "react-router-dom";
import styles from "./homePage.module.css"

export const HomePage = () => {
    const navigate = useNavigate()

    return (<>

        <header>
            CLASH ROYALE
        </header>

        <div onClick={() => {
            navigate("/cartas")
        }} className={styles.card}>cartas</div>

        <div onClick={() => {
            navigate("/mapa")
        }}>mapas</div>

        <div onClick={() => {
            navigate("/mazos")
        }}>mazos</div>

        <div onClick={() => {
            navigate("/quiz")
        }}>quiz</div>
        
        </>
    );
};
