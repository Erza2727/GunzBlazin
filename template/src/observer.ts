type Callback = () => void;

const topics: Record<string, Callback[]> = {};

export function subscribe(topic: string, fn: Callback): void {
  if (!topics[topic]) {
    topics[topic] = [];
  }

  topics[topic].push(fn);
}

export function publish(topic: string): void {
  if (!topics[topic]) {
    return;
  }

  topics[topic].forEach((fn) => {
    fn();
  });
}