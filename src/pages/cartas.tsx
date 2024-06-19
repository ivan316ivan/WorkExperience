import { useEffect, useState } from "react";
import { Carta } from "../components/carta/carta";
import styles from "./cartas.module.css";
import { clashOfClansDataSource } from "../dataSource/clashOfClansDataSource";

export const Cartas = () => {
    const [cartas, setCartas] = useState<any[]  >([])


    useEffect(() => {
        setCartas(clashOfClansDataSource().getCards().items)

    },  [])

  return (
    <>
      <div className={styles.cartas}>
        <h1>CARTAS</h1>
      </div>
      <div className={styles.comon}>Comunes</div>
      <div>
        {cartas.map((data) => <Carta key={data.id}/>)}
      </div>
    </>
  );
};
