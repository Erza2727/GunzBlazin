import { addAnimationClass, addShot, publishTopicAfterXSeconds } from "./common";
import { subscribe } from "./observer";

export function machineGun(): void {
  subscribe("uzi_done", () => {
    // 1. Animate machine gun
    addAnimationClass("machine-gun");

    // 2. Fire 10 bullets
    for (let i = 0; i < 10; i++) {
      addShot("bullet", "machine-gun", 90, "right", i * 200);
    }

    // 3. Notify when done
    publishTopicAfterXSeconds("machine-gun_done", 2000);
  });
}