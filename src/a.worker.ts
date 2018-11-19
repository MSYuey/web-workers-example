const context: Worker = self as any;
context.addEventListener("message", (msg) => context.postMessage(`ACK: ${msg}`));
