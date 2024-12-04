#!/usr/bin/env node

const args = process.argv.slice(2);
const {printError, isLegit, command} = require('./utils.js')
const createApp = require('./commands/create-app.js')

command("help", ()=>{
  console.log
  (`\x1b[1m List of available commands:
    • create-app (name-of-project)
    • add-page (name-of-page)
    • add-block (name-of-block's-page) (name-of-block)\x1b[0m
  `)
  
  process.exit(0)
})

command("create-app", ()=>{
  if(isLegit(args, 1)){
    printError(`\x1b[1mPlease enter correct arguments.`)
  }
  
  let appName = String(args[1])
  createApp(appName)
})

/*
command("add-page", ()=>{
  if(isLegit(args, 1)){
    printError(`\x1b[1mPlease enter correct arguments.`)
  }
  
  let pageName = args[1]
})

command("add-block", ()=>{
  if(isLegit(args, 2)){
    printError(`\x1b[1mPlease enter correct arguments.`)
  }
  
  let blockName = args[1]
})
*/
  
console.log("\x1b[31m UNKNOW COMMAND \x1b[0m")
process.exit(1)
