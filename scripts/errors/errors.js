//let helpMessage = `\x1b[0m\n\n\x1b[1mPrint "help" to see available commands\x1b[0m`

// pretty log
let Red = `\x1b[31m`
let Bold = `\x1b[1m`
let Undeline = `\x1b[4m`
let Reset = `\x1b[0m`

class VanAppErrors extends Error{
   constructor(message){
      super(message)
      this.name = "VanAppError"
      this.stack = ""
   }
}

class UnknownCommand extends VanAppErrors{
   constructor(message=""){
      super(`${message}`)
      this.name = "Unknown command"
   }
}

function logError(error){
   if(!error.stack == ""){
      console.error(error)
   }
   else{
      console.error(`${Bold}${Red}Error: ${error.name}. ${Undeline}${error.message}${Reset}`)
   }
   process.exit(1)
}

module.exports = {UnknownCommand, logError}