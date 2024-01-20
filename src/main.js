import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";

function init_game(config, width) {
  let tmp = Object.assign({}, config);
  tmp.width = width;
  const game = new Phaser.Game(tmp);
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
  return game;
}

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

let game = null;

if (window.innerWidth > innerHeight) {
  game = init_game(config, width);
}

let last_scene = null;

window.addEventListener(
  "resize",
  function () {
    if (window.innerWidth > innerHeight) {
      if (game === null) {
        const ratio = window.innerWidth / innerHeight;
        const width = Math.min(1300, Math.round(580 * ratio));
        game = init_game(config, width);
      } else {
        game.scene.resume(last_scene);
      }
    } else {
      if (game === null) return;
      let scene = game.scene.getScenes(true);
      if ("length" in scene && scene.length > 0 && "scene" in scene[0]) {
        last_scene = scene[0].scene.key;
        game.scene.pause(last_scene);
      }
    }
  },
  false,
);

export default game;
