import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";

function initGame(config) {
  let tmp = Object.assign({}, config);
  const width = calcWidth();
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

function calcWidth(h = 580) {
  const ratio = window.innerWidth / innerHeight;
  const width = Math.min(1300, Math.round(h * ratio));
  return width;
}

function isMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    return true;
  } else {
    return false;
  }
}

const config = {
  type: Phaser.AUTO,
  width: calcWidth(580),
  height: 580,
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
  game = initGame(config);
}

let lastScene = null;

window.addEventListener(
  "resize",
  function () {
    if (window.innerWidth > innerHeight) {
      if (game === null) {
        game = initGame(config);
      } else {
        game.scene.resume(lastScene);
      }
    } else {
      if (game === null) return;
      const scene = game.scene.getScenes(true);
      if ("length" in scene && scene.length > 0 && "scene" in scene[0]) {
        lastScene = scene[0].scene.key;
        game.scene.pause(lastScene);
      }
    }
  },
  false,
);

window.$G = game;

export default game;

// to see
/*
$G.scale.resize(900,400)
$G.scene.stop('MainMenu')
$G.scene.start('MainMenu')
*/
// if can help to manage resizing
