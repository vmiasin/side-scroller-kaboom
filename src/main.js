import kaboom from "kaboom";
import gameScene from "./game";
import loseScene from "./lose";
import startScene from "./start";

const k = kaboom({
  // width: 1600,
  // height: 800,
  background: [0, 0, 100],
});

k.setGravity(2400);
k.loadSprite("plane", "sprites/plane.png");
k.loadSprite("cloud", "sprites/cloud.png");
k.loadSprite("startButton", "sprites/startButton.png");

gameScene(k);
loseScene(k);
startScene(k);

k.go("start");
