//const {printError, isLegit, command, developmentServe} = require('./utils.js')
//const createApp = require('./commands/create-app.js');

class VnJs{
   constructor(args){
      this.args = args; // array
      console.log(args)
   }

   getCommand(){
      return this.args[0];
   }
   getArguments(){
      return this.args.splice(1)
   }
   
   line(){
      console.log(this.getCommand())
   }
}

module.exports = VnJs