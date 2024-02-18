const startScene = (k) =>
  k.scene("start", () => {
    k.add([k.text("Добро пожаловать!"), k.pos(20, 20)]);
    k.add([
      k.text("Управление в игре происходит нажатием стрелок на клавиатуре!"),
      k.pos(20, 80),
    ]);
    k.add([
      k.text("За столкновение с подарком вам будут начисляться баллы"),
      k.pos(20, 140),
    ]);
    k.add([
      k.text("За столкновение с облаком у вас будет отниматься одна жизнь"),
      k.pos(20, 200),
    ]);
    k.add([
      k.text("Если у вас осталось 0 жизней, игра заканчивается"),
      k.pos(20, 260),
    ]);
    k.add([
      k.text("Для начала игры нажмите 'Пробел' или кнопку ниже "),
      k.pos(20, 320),
    ]);

    k.add([
      k.sprite("startButton"),
      k.pos(20, 380),
      k.area(),
      "startStartButton",
    ]);

    k.onKeyPress("space", () => k.go("game"));
    k.onClick("startStartButton", () => k.go("game"));
  });

export default startScene;
