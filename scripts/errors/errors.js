let helpMessage = `\x1b[0m\n\n\x1b[1mPrint "help" to see available commands\x1b[0m`
let textRed = `\x1b[1m`
let textBold = `\x1b[31m`
let textUndeline = `\x1b[4m`
let textReset = `\x1b[0m`


function Error(name, message=""){
   console.error(`${textBold}${textRed}Error: ${name}. ${message}${textReset}`)
   process.exit(1)
}

function UnknownCommand(cmd=""){
   let name = "Unavailable command"
   let message = `${textUndeline}${cmd}`
   Error(name, message)
}

module.exports = {UnknownCommand}