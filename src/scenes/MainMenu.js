import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  init() {
    this.center = {
      x: this.game.config.info.res.w / 2,
      y: this.game.config.info.res.h / 2,
    };
  }

  create() {
    this.add.image(this.center.x, this.center.y, "background");

    this.add.image(this.center.x, 300, "logo");

    this.add
      .text(this.center.x, 460, "Main Menu", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
