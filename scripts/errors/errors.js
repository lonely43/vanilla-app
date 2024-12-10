class VanAppErrors extends Error{
   constructor(message, name){
      super(`\x1b[4m${message}\x1b[0m`)
      this.name = `\x1b[1m\x1b[31m${name}\x1b[0m`
   }
}

class UnknownCommand extends VanAppErrors{
   constructor(message){
      let name = "Unavailable command"
      let helpMessage = `\x1b[0m\n\n\x1b[1mPrint "help" to see available commands\x1b[0m\n`
      super(`${message} ${helpMessage}`, name)

      this.cause = "Entered unavailable command"
   }
}
throw new UnknownCommand("vna dsd")