// const UP_KEYS = ["w", "W", "ArrowUp", "ц", "Ц"];
// const DOWN_KEYS = ["s", "S", "ArrowDown", "ы", "Ы"];

const gameScene = (k) =>
  k.scene("game", () => {
    let lives = 8;
    let score = 0;

    let planeSpeedHorizontal = 480;
    let planeSpeedVertical = 320;

    const player = k.add([
      k.sprite("plane"),
      k.pos(80, 40),
      k.area(),
      k.body({ isStatic: true }),
      k.health(10),
      k.scale(0.4),
    ]);

    k.onKeyDown("up", () =>
      player.pos.y >= 0 ? player.move(0, -planeSpeedVertical) : null
    );

    k.onKeyDown("down", () =>
      player.pos.y + player.height * 0.4 <= k.height()
        ? player.move(0, planeSpeedVertical)
        : null
    );

    k.add([k.text("Жизней:"), pos(20, 20)]);
    const livesText = k.add([k.text(lives), pos(20, 50)]);

    k.add([k.text("Счет:"), pos(20, 80)]);
    const scoreText = k.add([k.text(score), pos(20, 110)]);

    const spawnCloud = () => {
      k.add([
        k.sprite("cloud"),
        k.area(),
        k.pos(k.width(), k.rand(0, k.height())),
        k.move(k.LEFT, planeSpeedHorizontal),
        "cloud",
      ]);

      k.wait(k.rand(2, 2.5), spawnCloud);
    };

    const spawnGift = () => {
      k.add([
        k.rect(50, 50),
        k.color(255, 0, 255),
        k.area(),
        k.pos(k.width(), k.rand(0, k.height())),
        k.move(k.LEFT, planeSpeedHorizontal),
        "gift",
      ]);

      k.wait(k.rand(1.6, 2.5), spawnGift);
    };

    spawnCloud();
    spawnGift();

    player.onCollide("cloud", (cloud) => {
      cloud.destroy();
      const newLives = lives - 1;

      if (newLives <= 0) {
        k.go("lose", score);
      }

      lives = newLives;
      livesText.text = newLives;
    });

    player.onCollide("gift", (gift) => {
      gift.destroy();
      const newScore = score + 10;
      score = newScore;
      scoreText.text = newScore;

      const isSpeedIncrease = k.rand() < 0.2;
      if (isSpeedIncrease) planeSpeedHorizontal += 30;
    });

    k.onKeyDown("escape", () => k.go("start"));
  });

export default gameScene;
