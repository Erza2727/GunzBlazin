import { addAnimationClass, addShot, publishTopicAfterXSeconds } from "./common";

export function pistol(): void {
  // 1. Animate pistol
  addAnimationClass("pistol");

  // 2. Fire 2 bullets
  addShot("bullet", "pistol", 90, "right", 0);
  addShot("bullet", "pistol", 90, "right", 300);

  // 3. Notify when done
  publishTopicAfterXSeconds("pistol_done", 1200);
}