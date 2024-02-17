const loseScene = (k) =>
  k.scene("lose", () => {
    k.add([k.text("Game Over"), k.pos(0, 0)]);
    k.add([k.text("'R' to restart"), k.pos(0, 30)]);
    k.onKeyPress("r", () => k.go("game"));
  });

export default loseScene;
