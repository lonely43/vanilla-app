function printError(text, printHelp=true){
   if(printHelp){
      console.error
(`\x1b[41m ERROR \x1b[0m
   ${text}\x1b[0m \x1b[1m
   Print "help" if you got problems\x1b[0m`)
   }
   else{
      console.error
(`\x1b[41m ERROR \x1b[0m
   ${text}\x1b[0m`)
   }
   process.exit(1)
}

function isLegit(args, length){
   let legit = true
   let arr = args.slice(1)

   if(arr.length !== length){
      legit = false 
   }

   for(i = 0; i < length; i++){
      if(arr[i] == undefined || arr[i] == null || arr[i] == false){
         legit = false 
         break;
      }
   }
   
   return !legit
}

function command(breakPoint, callback){
   let args = process.argv.slice(2)
   if(String(args[0]) == String(breakPoint)){
      callback()
   }
}

module.exports = {printError, isLegit, command}