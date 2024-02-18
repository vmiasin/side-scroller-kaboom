const loseScene = (k) =>
  k.scene("lose", (score) => {
    k.add([k.text(`Игра окончена. Счет: ${score}`), k.pos(20, 20)]);
    k.add([
      k.text("Нажмите 'R' или кнопку ниже, чтобы попробовать снова"),
      k.pos(20, 80),
    ]);

    const startButton = k.add([
      k.sprite("startButton"),
      k.pos(20, 140),
      k.area(),
      "loseStartButton",
    ]);

    k.onKeyPress("r", () => k.go("game"));
    k.onKeyPress("к", () => k.go("game"));
    k.onClick("loseStartButton", () => k.go("game"));

    // k.onTouchStart((id, pointerPos) => {
    //   if (startButton.hasPoint(pointerPos)) {
    //     k.go("game");
    //   }
    // });

    // k.onMousePress((e, pos) => {
    //   console.log(e);
    // });
  });

export default loseScene;
