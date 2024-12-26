import { exec, spawn } from "child_process"

function serve(port: any){
   let liveServer = require("live-server");
   let params = {
      port: port, // Set the server port.
      host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
      root: "./src", // Set root directory that's being served. Defaults to cwd.
      open: true, // When false, it won't load your browser by default.
      //ignore: 'scss,my/templates', // comma-separated string for paths to ignore
      wait: 100, // Waits for all changes, before reloading. Defaults to 0 sec.
      mount: [['/src', './node_modules']], // Mount a directory to a route.
      logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
      //file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
      //middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
   };

   // sass
   const sass = spawn('sass', ["-w", "--no-source-map", "./:./"], {shell: true});
   
   liveServer.start(params);
}

export default function developmentServe(arr: Array<string>){
   serve(arr[0]);
}
