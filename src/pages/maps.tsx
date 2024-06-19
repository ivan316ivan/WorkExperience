import { useEffect, useState } from "react";
import { clashOfClansDataSource } from "../dataSource/clashOfClansDataSource";
import arena1 from "../assets/arena_goblin.webp"

export const Maps = () => {
    const [cards, setCards] = useState<any[]>([]);

    useEffect(() => {
        setCards(clashOfClansDataSource().getCards().items);
    }, []);


    return(<>
    <div>
        <div className={arena1}>
            <h3>Arena 1 {"(0-300 copas)"}</h3>
            <img src={arena1}></img>
            
        </div>
    </div>
    </>
    );
};
