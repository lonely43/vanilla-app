#!/usr/bin/env node

const args = process.argv.slice(2);


const {printError, isLegit, command, developmentServe} = require('./scripts/utils.js')
const createApp = require('./scripts/commands/create-app.js');

const VnJs = require("./scripts/library");
const VN = new VnJs(args)

VN.command()

/*
(()=>{
command("help", ()=>{
  console.log
  (`\x1b[1m List of available commands:
    • create-app (name-of-project)
    • add-page (name-of-page)
    • add-block (name-of-block's-page) (name-of-block)\x1b[0m
  `)
})

command("create-app", ()=>{
  if(isLegit(args, 1)){
    printError(`\x1b[1mPlease enter correct arguments.`)
  }
  
  let appName = String(args[1])
  createApp(appName)
})

command("dev", () =>{
  if( !(fs.existsSync(path.join(process.cwd(), "projectName.txt"))) ){
    printError(`You ain't in project's folder!`, false)
  }

  return developmentServe()
})

console.log("\x1b[31m UNKNOW COMMAND \x1b[0m")
})();
*/

//console.log("\x1b[31m UNKNOW COMMAND \x1b[0m")
//process.exit(1)