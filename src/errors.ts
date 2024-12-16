// pretty log
let Red = `\x1b[31m`
let Bold = `\x1b[1m`
let Undeline = `\x1b[4m`
let Reset = `\x1b[0m`

class VanAppErrors extends Error{
   constructor(message: string){
      super(message)
      this.name = "VanAppError"
      this.stack = ""
   }
}

export class UnknownCommand extends VanAppErrors{
   constructor(message=""){
      super(`${message}`)
      this.name = "Unknown command"
   }
}

export function logError(error: any){
   if(error.stack !== ""){
      console.error(error)
   }
   else{
      console.error(`${Bold}${Red}Error: ${error.name}. ${Undeline}${error.message}${Reset}`)
   }
   process.exit(1)
}