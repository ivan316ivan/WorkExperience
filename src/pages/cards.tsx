import { useEffect, useState } from "react";
import styles from "./cards.module.css";
import { clashOfClansDataSource } from "../dataSource/clashOfClansDataSource";
import { Card } from "../components/card/card";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";

export const Cards = () => {
    const [cards, setCards] = useState<any[]>([]);
    const [rarities, setRarities] = useState<string[]>([]);

    useEffect(() => {
        clashOfClansDataSource()
            .getCards()
            .then((res) => {
                setCards(res.items);
            });
    }, []);



    useEffect(() => {
        if (!cards.length) return;
        let currentRarrities: string[] = [];
        cards.forEach((card) => {
            if (currentRarrities.includes(card.rarity) === false) {
                currentRarrities.push(card.rarity);
            }
        });
        setRarities(currentRarrities);
    }, [cards]);

    return (
        <>
            <div className={styles.cartas}>
                <h1>CARDS</h1>
            </div>
            {rarities.map((rarity) => (
                <div key={rarity}>
                    <div className={styles.rarityTitle}>
                        {capitalizeFirstLetter(rarity)}
                    </div>
                    <div className={styles.content}>
                        {cards
                            .filter((card) => card.rarity === rarity)
                            .map((data) => (
                                <Card
                                    key={data.id}
                                    item={data}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </>
    );
};
