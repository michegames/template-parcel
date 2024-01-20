import { Scene } from "phaser";

export class GameOver extends Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    const { width, height } = this.sys.game.canvas;
    this.center = { x: width / 2, y: height / 2 };

    this.cameras.main.setBackgroundColor(0xff0000);

    this.add.image(this.center.x, this.center.y, "background").setAlpha(0.5);

    this.add
      .text(this.center.x, 384, "Game Over", {
        fontFamily: "Arial Black",
        fontSize: 64,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("MainMenu");
    });
  }
}
