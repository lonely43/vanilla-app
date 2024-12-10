const fs = require("fs"),
path = require("path"),
http = require("http")
const { spawn } = require('node:child_process');

function printError(text, printHelp=true){
   if(printHelp){
      console.error
(`\x1b[41m ERROR \x1b[0m
   ${text}\x1b[0m \x1b[1m
   Print "help" if you got problems\x1b[0m`)
   }
   else{
      console.error
(`\x1b[41m ERROR \x1b[0m
   ${text}\x1b[0m`)
   }
   process.exit(1)
}

function isLegit(args, length){
   let legit = true
   let arr = args.slice(1)

   if(arr.length !== length){
      legit = false 
   }

   for(i = 0; i < length; i++){
      if(arr[i] == undefined || arr[i] == null || arr[i] == false){
         legit = false 
         break;
      }
   }
   
   return !legit
}

function command(breakPoint, callback){
   let args = process.argv.slice(2)
   if(String(args[0]) == String(breakPoint)){
      return callback()
   }
}

function hostServer(port=4000){
   let server = http.createServer((req, res)=>{
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

module.exports = {printError, isLegit, command, developmentServe}

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