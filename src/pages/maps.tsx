import { useEffect, useState } from "react";
import { clashOfClansDataSource } from "../dataSource/clashOfClansDataSource";
import arena1 from "../assets/arena_goblin.webp";
import arena2 from "../assets/arena2.webp";
import arena3 from "../assets/arena3.webp";
import arena4 from "../assets/arena4.webp";
import arena5 from "../assets/arena5.webp";
import arena6 from "../assets/arena6.webp";
import arena7 from "../assets/arena7.webp";
import arena8 from "../assets/arena8.webp";
import arena9 from "../assets/arena9.webp";
import styles from "./maps.module.css";
import { Card } from "../components/card/card";
import { Arena } from "../components/arena/arena";

export const Maps = () => {
    const [cards, setCards] = useState<any[]>([]);

    useEffect(() => {
        clashOfClansDataSource()
            .getCards()
            .then((res) => {
                setCards(res.items);
            });
    }, []);

    const { getCardByName } = clashOfClansDataSource();

    const goblins = getCardByName("Goblins");
    const spearGoblins = getCardByName("Spear Goblins");
    const goblinHut = getCardByName("Goblin Hut");
    const goblinCage = getCardByName("Goblin Cage");

    const skeletons = getCardByName("Skeletons");
    const valkyrie = getCardByName("Valkyrie");
    const bomber = getCardByName("Bomber");
    const tombstone = getCardByName("Tombstone");

    const barbarians = getCardByName("Barbarians");
    const battleRam = getCardByName("Battle Ram");
    const megaMinion = getCardByName("Mega Minion");
    const cannon = getCardByName("Cannon");

    const wizard = getCardByName("Wizard");
    const fireSpirit = getCardByName("Fire Spirit");
    const skeletonDragons = getCardByName("Skeleton Dragons");
    const electroSpirit = getCardByName("Electro Spirit");
    const infernoTower = getCardByName("Inferno Tower");
    const bombTower = getCardByName("Bomb Tower");

    const hogRider = getCardByName("Hog Rider");
    const bats = getCardByName("Bats");
    const flyingMachine = getCardByName("Flying Machine");
    const mortar = getCardByName("Mortar");
    const rocket = getCardByName("Rocket");
    const zap = getCardByName("Zap");

    const pekka = getCardByName("P.E.K.K.A");
    const witch = getCardByName("Witch");
    const skeletonArmy = getCardByName("Skeleton Army");
    const babyDragon = getCardByName("Baby Dragon");
    const guards = getCardByName("Guards");
    const goblinBarrel = getCardByName("Goblin Barrel");

    const balloon = getCardByName("Balloon");
    const prince = getCardByName("Prince");
    const royalGiant = getCardByName("Royal Giant");
    const darkPrince = getCardByName("Dark Prince");
    const threeMusketeers = getCardByName("Three Musketeers");
    const royalRecruits = getCardByName("Royal Recruits");
    const royalHogs = getCardByName("Royal Hogs");

    const giantSkeleton = getCardByName("Giant Skeleton");
    const iceSpirit = getCardByName("Ice Spirit");
    const iceGolem = getCardByName("Ice Golem");
    const battleHealer = getCardByName("Battle Healer");
    const freeze = getCardByName("Freeze");
    const lightning = getCardByName("Lightning");
    const giantSnowball = getCardByName("Giant Snowball");

    const dartGoblin = getCardByName("Dart Goblin");
    const goblinGang = getCardByName("Goblin Gang");
    const skeletonBarrel = getCardByName("Skeleton Barrel");
    const goblinGiant = getCardByName("Goblin Giant");
    const barbarianHut = getCardByName("Barbarian Hut");
    const poison = getCardByName("Poison");
    const barbarianBarrel = getCardByName("Barbarian Barrel");

    const arenas = [
        {
            title: "Arena 1 (0-300 copas)",
            imgSrc: arena1,
            cards: (
                <>
                    <Card item={goblins} />
                    <Card item={spearGoblins} />
                    <Card item={goblinHut} />
                    <Card item={goblinCage} />
                </>
            ),
        },
        {
            title: "Arena 2 (300-600 copas)",
            imgSrc: arena2,
            cards: (
                <>
                    <Card item={skeletons} />
                    <Card item={valkyrie} />
                    <Card item={bomber} />
                    <Card item={tombstone} />
                </>
            ),
        },
        {
            title: "Arena 3 (600-1000 copas)",
            imgSrc: arena3,
            cards: (
                <>
                    <Card item={barbarians} />
                    <Card item={battleRam} />
                    <Card item={megaMinion} />
                    <Card item={cannon} />
                </>
            ),
        },
        {
            title: "Arena 4 (1000-1300 copas)",
            imgSrc: arena4,
            cards: (
                <>
                    <Card item={wizard} />
                    <Card item={fireSpirit} />
                    <Card item={skeletonDragons} />
                    <Card item={electroSpirit} />
                    <Card item={infernoTower} />
                    <Card item={bombTower} />
                </>
            ),
        },
        {
            title: "Arena 5 (1300-1600 copas)",
            imgSrc: arena5,
            cards: (
                <>
                    <Card item={hogRider} />
                    <Card item={bats} />
                    <Card item={flyingMachine} />
                    <Card item={mortar} />
                    <Card item={rocket} />
                    <Card item={zap} />
                </>
            ),
        },
        {
            title: "Arena 6 (1600-2000 copas)",
            imgSrc: arena6,
            cards: (
                <>
                    <Card item={pekka} />
                    <Card item={witch} />
                    <Card item={skeletonArmy} />
                    <Card item={babyDragon} />
                    <Card item={guards} />
                    <Card item={goblinBarrel} />
                </>
            ),
        },
        {
            title: "Arena 7 (2000-2300 copas)",
            imgSrc: arena7,
            cards: (
                <>
                    <Card item={balloon} />
                    <Card item={prince} />
                    <Card item={royalGiant} />
                    <Card item={darkPrince} />
                    <Card item={threeMusketeers} />
                    <Card item={royalRecruits} />
                    <Card item={royalHogs} />
                </>
            ),
        },
        {
            title: "Arena 8 (2300-2600 copas)",
            imgSrc: arena8,
            cards: (
                <>
                    <Card item={giantSkeleton} />
                    <Card item={iceSpirit} />
                    <Card item={iceGolem} />
                    <Card item={battleHealer} />
                    <Card item={freeze} />
                    <Card item={lightning} />
                    <Card item={giantSnowball} />
                </>
            ),
        },
        {
            title: "Arena 9 (2600-3000 copas)",
            imgSrc: arena9,
            cards: (
                <>
                    <Card item={dartGoblin} />
                    <Card item={goblinGang} />
                    <Card item={skeletonBarrel} />
                    <Card item={goblinGiant} />
                    <Card item={barbarianHut} />
                    <Card item={poison} />
                    <Card item={barbarianBarrel} />
                </>
            ),
        },
    ];

    return (
        <>
            <div className={styles.maps}>
                <h1>Mapas</h1>
                {arenas.map((arena, index) => (
                    <Arena
                        key={index}
                        title={arena.title}
                        imgSrc={arena.imgSrc}
                        cards={arena.cards}
                    />
                ))}
            </div>
        </>
    );
};
