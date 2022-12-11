/**
 * A basic simple concept i did come up with is the node repl which forms a stream based declarativ interface between nodejs and browsers.
 * It adds in general only one feature that is importent the so called launch watch capabilitys of host processes. 
 * so it can give us a ECMAScript able interface to access net and file system streams and pipe them to the browser or our execution logic.
 * most of the time it is most best to use the browser filesystem access api directly when you not need to execute something directly
 *
 * for example linux when using systemd allows you to create so called systemd units to interact with the host scheduler for tasks and processes
 * this allows you to use a browser directly with the filesystem access api to create services and even execute them when you schedule a job 
 * to automatic reload systemd units in a special directory.
 *
 * that is much prefered over using this method this method only exists to allow you to incremental adopt
 * while it is simple it is always more simple to use the host embedder operating system of the engine it self or use the engine it self if 
 * it is the host which is also a common case.
 */

// Exposing all kind of repls
const net = await import('/node-resolve-load.js?id=node:net');
const repl = await import ('/node-resolve-load.js?id=node:repl');

let connections = 0;

repl.start({
  prompt: 'Node.js via stdin> ',
  input: process.stdin,
  output: process.stdout,
});

net.createServer((socket) => {
  connections += 1;
  repl.start({
    prompt: 'Node.js via Unix socket> ',
    input: socket,
    output: socket,
  }).on('exit', () => {
    socket.end();
  });
}).listen('/tmp/node-repl-sock');

net.createServer((socket) => {
  connections += 1;
  repl.start({
    prompt: 'Node.js via TCP socket> ',
    input: socket,
    output: socket,
  }).on('exit', () => {
    socket.end();
  });
}).listen(5001);
