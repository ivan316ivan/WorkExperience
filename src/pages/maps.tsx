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

    return (
        <>
            <div className={styles.maps}>
                <h1>Mapas</h1>
                <div className={arena1}>
                    <h3>Arena 1 {"(0-300 copas)"}</h3>
                    <img src={arena1}></img>
                    <div className={styles.characters}>
                        <Card item={goblins}></Card>
                        <Card item={spearGoblins}></Card>
                        <Card item={goblinHut}></Card>
                        <Card item={goblinCage}></Card>
                    </div>
                </div>
                <div className={arena2}>
                    <h3>Arena 2 {"(300-600 copas)"}</h3>
                    <img src={arena2}></img>
                    <div className={styles.characters}>
                        <Card item={skeletons}></Card>
                        <Card item={valkyrie}></Card>
                        <Card item={bomber}></Card>
                        <Card item={tombstone}></Card>
                    </div>
                </div>
                <div className={arena3}>
                    <h3>Arena 3 {"(600-1000 copas)"}</h3>
                    <img src={arena3}></img>
                    <div className={styles.characters}>
                        <Card item={barbarians}></Card>
                        <Card item={battleRam}></Card>
                        <Card item={megaMinion}></Card>
                        <Card item={cannon}></Card>
                    </div>
                </div>
                <div className={arena4}>
                    <h3>Arena 4 {"(1000-1300 copas)"}</h3>
                    <img src={arena4}></img>
                    <div className={styles.characters}>
                        <Card item={wizard}></Card>
                        <Card item={fireSpirit}></Card>
                        <Card item={skeletonDragons}></Card>
                        <Card item={electroSpirit}></Card>
                        <Card item={infernoTower}></Card>
                        <Card item={bombTower}></Card>
                    </div>
                </div>
                <div className={arena5}>
                    <h3>Arena 5 {"(1300-1600 copas)"}</h3>
                    <img src={arena5}></img>
                    <div className={styles.characters}>
                        <Card item={hogRider}></Card>
                        <Card item={bats}></Card>
                        <Card item={flyingMachine}></Card>
                        <Card item={mortar}></Card>
                        <Card item={rocket}></Card>
                        <Card item={zap}></Card>
                    </div>
                </div>
                <div className={arena6}>
                    <h3>Arena 6 {"(1600-2000 copas)"}</h3>
                    <img src={arena6}></img>
                    <div className={styles.characters}>
                        <Card item={pekka}></Card>
                        <Card item={witch}></Card>
                        <Card item={skeletonArmy}></Card>
                        <Card item={babyDragon}></Card>
                        <Card item={guards}></Card>
                        <Card item={goblinBarrel}></Card>
                    </div>
                </div>
                <div className={arena7}>
                    <h3>Arena 7 {"(1600-2000 copas)"}</h3>
                    <img src={arena7}></img>
                    <div className={styles.characters}>
                        <Card item={balloon}></Card>
                        <Card item={prince}></Card>
                        <Card item={royalGiant}></Card>
                        <Card item={darkPrince}></Card>
                        <Card item={threeMusketeers}></Card>
                        <Card item={royalRecruits}></Card>
                        <Card item={royalHogs}></Card>
                    </div>
                </div>
                <div className={arena8}>
                    <h3>Arena 8 {"(1600-2000 copas)"}</h3>
                    <img src={arena8}></img>
                    <div className={styles.characters}>
                        <Card item={giantSkeleton}></Card>
                        <Card item={iceSpirit}></Card>
                        <Card item={iceGolem}></Card>
                        <Card item={battleHealer}></Card>
                        <Card item={freeze}></Card>
                        <Card item={lightning}></Card>
                        <Card item={giantSnowball}></Card>
                    </div>
                </div>
                <div className={arena9}>
                    <h3>Arena 9 {"(2000-2300 copas)"}</h3>
                    <img src={arena9}></img>
                    <div className={styles.characters}>
                        <Card item={dartGoblin}></Card>
                        <Card item={goblinGang}></Card>
                        <Card item={skeletonBarrel}></Card>
                        <Card item={goblinGiant}></Card>
                        <Card item={barbarianHut}></Card>
                        <Card item={poison}></Card>
                        <Card item={barbarianBarrel}></Card>
                    </div>
                </div>
            </div>
        </>
    );
};
