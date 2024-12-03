#!/usr/bin/env node

const path = require("path")
const createApp = require('./commands/create-app.js')

const args = process.argv.slice(2);

function init(){
  //something
}
init()

// handle cmds
{
  if(args[0] === "create-app"){
    // legit check
    if(args.length !== 2 || args[1] == undefined || args[1] == null || args[1] == false){
      console.log(`ERROR \n Please enter the name for your project`)
      process.exit(1)
    }

    let dirName = args[1]
    createApp(dirName)
  }
  
  console.log("UNKNOW COMMAND")
  process.exit(1)
}