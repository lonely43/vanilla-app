//const {printError, isLegit, command, developmentServe} = require('./utils.js')
//const createApp = require('./commands/create-app.js');
const { UnknownCommand } = require('./errors/errors')

class VnJs{
   constructor(args){
      this.args = args; // array
     // console.log(args)
   }

   getCommand(){
      return this.args[0];
   }
   getArgs(){
      return this.args.splice(1);
   }
   
   command(){
      let cmd = this.getCommand()

      switch(cmd){
         case "create-app":
            console.log('create-app')
            break;

         case "dev":
            console.log('dev')
            break;

         case "test":
            console.log('test')
            break;
            
         default:
            UnknownCommand(cmd)
      }
   }
}

module.exports = VnJs