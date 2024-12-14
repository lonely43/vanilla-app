//const {printError, isLegit, command, developmentServe} = require('./utils.js')
const createApp = require('./commands/create-app.js');
const { UnknownCommand, logError } = require('./errors/errors')

class VnJs{
   constructor(args){
      this.args = args;
   }

   getCommand(){
      return this.args[0];
   }
   getArgs(){
      return this.args.splice(1);
   }
   
   command(){
      let cmd = this.getCommand()

      try{
         switch(cmd){
            case "create-app":
               createApp(this.getArgs())
               break;
   
            case "dev":
               console.log('dev')
               break;
   
            case "test":
               console.log('test')
               break;
               
            default:
               throw new UnknownCommand(cmd)
         }
      } catch(err){
         logError(err)
      }
   }
}

module.exports = VnJs