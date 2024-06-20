import { useEffect, useState } from "react";
import { clashOfClansDataSource } from "../dataSource/clashOfClansDataSource";
import arena1 from "../assets/arena_goblin.webp";
import arena2 from "../assets/arena2.webp";
import arena3 from "../assets/arena3.webp";
import arena4 from "../assets/arena4.webp";
import arena5 from "../assets/arena5.webp";
import arena6 from "../assets/arena6.webp";
import arena7 from "../assets/arena7.webp";
import styles from "./maps.module.css";
import { Card } from "../components/card/card";

export const Maps = () => {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    setCards(clashOfClansDataSource().getCards().items);
  }, []);

  const goblins = cards.find((card) => card.name === "Goblins");
  const spearGoblins = cards.find((card) => card.name === "Spear Goblins");
  const goblinHut = cards.find((card) => card.name === "Goblin Hut");
  const goblinCage = cards.find((card) => card.name === "Goblin Cage");

  const skeletons = cards.find((card) => card.name === "Skeletons");
  const valkyrie = cards.find((card) => card.name === "Valkyrie");
  const bomber = cards.find((card) => card.name === "Bomber");
  const tombstone = cards.find((card) => card.name === "Tombstone");

  const barbarians = cards.find((card) => card.name === "Barbarians");
  const battleRam = cards.find((card) => card.name === "Battle Ram");
  const megaMinion = cards.find((card) => card.name === "Mega Minion");
  const cannon = cards.find((card) => card.name === "Cannon");

  const wizard = cards.find((card) => card.name === "Wizard");
  const fireSpirit = cards.find((card) => card.name === "Fire Spirit");
  const skeletonDragons = cards.find((card) => card.name === "Skeleton Dragons");
  const electroSpirit = cards.find((card) => card.name === "Electro Spirit");
  const infernoTower = cards.find((card) => card.name === "Inferno Tower");
  const bombTower = cards.find((card) => card.name === "Bomb Tower");

  const hogRider = cards.find((card) => card.name === "Hog Rider");
  const bats = cards.find((card) => card.name === "Bats");
  const flyingMachine = cards.find((card) => card.name === "Flying Machine");
  const mortar = cards.find((card) => card.name === "Mortar");
  const rocket = cards.find((card) => card.name === "Rocket");
  const zap = cards.find((card) => card.name === "Zap");

  const pekka = cards.find((card) => card.name === "P.E.K.K.A");
  const witch = cards.find((card) => card.name === "Witch");
  const skeletonArmy = cards.find((card) => card.name === "Skeleton Army");
  const babyDragon = cards.find((card) => card.name === "Baby Dragon");
  const guards = cards.find((card) => card.name === "Guards");
  const goblinBarrel = cards.find((card) => card.name === "Goblin Barrel");

  const balloon = cards.find((card) => card.name === "Balloon");
  const prince = cards.find((card) => card.name === "Prince");
  const skeletonArmy = cards.find((card) => card.name === "Skeleton Army");
  const babyDragon = cards.find((card) => card.name === "Baby Dragon");
  const guards = cards.find((card) => card.name === "Guards");
  const goblinBarrel = cards.find((card) => card.name === "Goblin Barrel");
  const goblinBarrel = cards.find((card) => card.name === "Goblin Barrel");

  return (
    <>
      <div className={styles.maps}>
        <h1>Mapas</h1>
        <div className={arena1}>
          <h3>Arena 1 {"(0-300 copas)"}</h3>
          <img src={arena1}></img>
          <div className={styles.characters}>
            <Card
              title={!!goblins ? goblins.name : ""}
              imgLink={!!goblins ? goblins.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!spearGoblins ? spearGoblins.name : ""}
              imgLink={!!spearGoblins ? spearGoblins.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!goblinHut ? goblinHut.name : ""}
              imgLink={!!goblinHut ? goblinHut.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!goblinCage ? goblinCage.name : ""}
              imgLink={!!goblinCage ? goblinCage.iconUrls.medium : ""}
            ></Card>
          </div>
        </div>
        <div className={arena2}>
          <h3>Arena 2 {"(300-600 copas)"}</h3>
          <img src={arena2}></img>
          <div className={styles.characters}>
            <Card
              title={!!skeletons ? skeletons.name : ""}
              imgLink={!!skeletons ? skeletons.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!valkyrie ? valkyrie.name : ""}
              imgLink={!!valkyrie ? valkyrie.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!bomber ? bomber.name : ""}
              imgLink={!!bomber ? bomber.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!tombstone ? tombstone.name : ""}
              imgLink={!!tombstone ? tombstone.iconUrls.medium : ""}
            ></Card>
          </div>
        </div>
        <div className={arena3}>
          <h3>Arena 3 {"(600-1000 copas)"}</h3>
          <img src={arena3}></img>
          <div className={styles.characters}>
            <Card
              title={!!barbarians ? barbarians.name : ""}
              imgLink={!!barbarians ? barbarians.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!battleRam ? battleRam.name : ""}
              imgLink={!!battleRam ? battleRam.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!megaMinion ? megaMinion.name : ""}
              imgLink={!!megaMinion ? megaMinion.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!cannon ? cannon.name : ""}
              imgLink={!!cannon ? cannon.iconUrls.medium : ""}
            ></Card>
          </div>
        </div>
        <div className={arena4}>
          <h3>Arena 4 {"(1000-1300 copas)"}</h3>
          <img src={arena4}></img>
          <div className={styles.characters}>
            <Card
              title={!!wizard ? wizard.name : ""}
              imgLink={!!wizard ? wizard.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!fireSpirit ? fireSpirit.name : ""}
              imgLink={!!fireSpirit ? fireSpirit.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!skeletonDragons ? skeletonDragons.name : ""}
              imgLink={!!skeletonDragons ? skeletonDragons.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!electroSpirit ? electroSpirit.name : ""}
              imgLink={!!electroSpirit ? electroSpirit.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!infernoTower ? infernoTower.name : ""}
              imgLink={!!infernoTower ? infernoTower.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!bombTower ? bombTower.name : ""}
              imgLink={!!bombTower ? bombTower.iconUrls.medium : ""}
            ></Card>
          </div>
        </div>
        <div className={arena5}>
          <h3>Arena 5 {"(1300-1600 copas)"}</h3>
          <img src={arena5}></img>
          <div className={styles.characters}>
            <Card
              title={!!hogRider ? hogRider.name : ""}
              imgLink={!!hogRider ? hogRider.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!bats ? bats.name : ""}
              imgLink={!!bats ? bats.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!flyingMachine ? flyingMachine.name : ""}
              imgLink={!!flyingMachine ? flyingMachine.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!mortar ? mortar.name : ""}
              imgLink={!!mortar ? mortar.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!rocket ? rocket.name : ""}
              imgLink={!!rocket ? rocket.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!zap ? zap.name : ""}
              imgLink={!!zap ? zap.iconUrls.medium : ""}
            ></Card>
          </div>
        </div>
        <div className={arena6}>
          <h3>Arena 6 {"(1600-2000 copas)"}</h3>
          <img src={arena6}></img>
          <div className={styles.characters}>
            <Card
              title={!!pekka ? pekka.name : ""}
              imgLink={!!pekka ? pekka.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!witch ? witch.name : ""}
              imgLink={!!witch ? witch.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!skeletonArmy ? skeletonArmy.name : ""}
              imgLink={!!skeletonArmy ? skeletonArmy.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!babyDragon ? babyDragon.name : ""}
              imgLink={!!babyDragon ? babyDragon.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!guards ? guards.name : ""}
              imgLink={!!guards ? guards.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!goblinBarrel ? goblinBarrel.name : ""}
              imgLink={!!goblinBarrel ? goblinBarrel.iconUrls.medium : ""}
            ></Card>
          </div>
        </div>
        <div className={arena7}>
          <h3>Arena 7 {"(1600-2000 copas)"}</h3>
          <img src={arena7}></img>
          <div className={styles.characters}>
            <Card
              title={!!balloon ? balloon.name : ""}
              imgLink={!!balloon ? balloon.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!prince ? prince.name : ""}
              imgLink={!!prince ? prince.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!skeletonArmy ? skeletonArmy.name : ""}
              imgLink={!!skeletonArmy ? skeletonArmy.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!babyDragon ? babyDragon.name : ""}
              imgLink={!!babyDragon ? babyDragon.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!guards ? guards.name : ""}
              imgLink={!!guards ? guards.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!goblinBarrel ? goblinBarrel.name : ""}
              imgLink={!!goblinBarrel ? goblinBarrel.iconUrls.medium : ""}
            ></Card>
            <Card
              title={!!goblinBarrel ? goblinBarrel.name : ""}
              imgLink={!!goblinBarrel ? goblinBarrel.iconUrls.medium : ""}
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
};
