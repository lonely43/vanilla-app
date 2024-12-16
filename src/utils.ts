const fs = require("fs"),
path = require("path"),
http = require("http")
//const { spawn } = require('node:child_process');

function hostServer(port=4000){
   let server = http.createServer((res: any)=>{
      res.write('Hello World!');
      res.end()
   })
   server.listen(port, () => {console.log(`\x1b[4mhttp://localhost:${port}\x1b[0m - started`)})
}

function developmentServe(){
   /*
   const child = spawn("node", ["test"], {shell: true});

   child.stdout.pipe(process.stdout);
   child.stderr.pipe(process.stderr);

   child.on('close', (code) => {
   console.log(`Child process exited with code ${code}`);
   });*/

   hostServer()
}

/*function webComponent(url, name){
   const data = ""
   if(!(fs.existsSync(url))){
      data = fs.readFileSync(url)
   }
   
   class Component extends HTMLElement{
      constructor(){
         super()
         this.innerHTML = data
      }
   }

   function create(){
      customElements.define(String(name), Component)
   }

   return create
}*/