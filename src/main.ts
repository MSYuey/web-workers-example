import * as MyWorker from 'worker-loader!./a.worker.ts';

export default function main() {
  const worker = new MyWorker() as Worker;
  worker.postMessage("Hello world!");
  worker.addEventListener("message", (msg) => console.log(msg));
};
