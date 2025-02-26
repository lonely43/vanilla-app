import createApp from "./commands/create-app";
import developmentServe from "./commands/developmentServe";
import helpCommand from "./commands/helpCommand";
import { logError, UnknownCommand } from "./utils/errors";

export default class VnJs{
   private args: Array<string>;

   constructor(args: Array<string>){
      this.args = args;
   }

   private getCommand(): string{
      return this.args[0];
   }
   private getArgs(): Array<string>{
      return this.args.splice(1);
   }
   
   public command(): void{
      let cmd = this.getCommand();

      try{
         switch(cmd){
            case "create":
               createApp(this.getArgs());
               break;
   
            case "dev":
               developmentServe(this.getArgs());
               break;
            
            case "help":
               helpCommand();
               break;
   
            default:
               throw new UnknownCommand(cmd);
         }
      } catch(err){
         logError(err);
      }
   }
}