import { addAnimationClass, addShot, publishTopicAfterXSeconds } from "./common";
import { subscribe } from "./observer";

export function uzi(): void {
  subscribe("pistol_done", () => {
    // 1. Animate uzi
    addAnimationClass("uzi");

    // 2. Fire 10 bullets
    for (let i = 0; i < 10; i++) {
      addShot("bullet", "uzi", 90, "left", i * 200);
    }

    // 3. Notify when done
    publishTopicAfterXSeconds("uzi_done", 2000);
  });
}