import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";

const ratio = window.innerWidth / innerHeight;
const height = 580;
const width = Math.min(1300, Math.round(580 * ratio));

const config = {
  type: Phaser.AUTO,
  width: width,
  height: height,
  parent: "game-container",
  backgroundColor: "#028af8",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Boot, Preloader, MainMenu, Game, GameOver],
};

const game = new Phaser.Game(config);
window.$G = game;
game.config.info = {
  area: {
    w: 1031,
    h: 580,
  },
  res: {
    w: width,
    h: 580,
  },
};

export default game;
