import { prText } from "./utils"

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

export class ExistedFolder extends VanAppErrors{
   constructor(message=""){
      super(`${message}`)
      this.name = "Folder already exists"
   }
}

export function logError(error: any){
   if(error.stack !== ""){
      console.error(error)
   }
   else{
      console.error(`${prText.bold}${prText.red}Error: ${error.name}. ${prText.undeline}${error.message}${prText.reset}`)
   }
   process.exit(1)

}