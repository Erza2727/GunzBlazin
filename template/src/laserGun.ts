import { addAnimationClass, addShot, publishTopicAfterXSeconds } from "./common";
import { subscribe } from "./observer";

export function laserGun(): void {
  subscribe("machine_gun_done", () => {
    addAnimationClass("laser-gun");

    for (let i = 0; i < 10; i++) {
      addShot("laser", "laser-gun", 90, "left", i * 1000);
    }

    publishTopicAfterXSeconds("laser_done", 6000);
  });
}