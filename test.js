/*
const child = spawn("echo", ["1"], {shell: true});

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);

child.on('close', (code) => {
console.log(`Child process exited with code ${code}`);
});*/

/*
command("add-page", ()=>{
  if(isLegit(args, 1)){
    printError(`\x1b[1mPlease enter correct arguments.`)
  }
  
  let pageName = args[1]
})

command("add-block", ()=>{
  if(isLegit(args, 2)){
    printError(`\x1b[1mPlease enter correct arguments.`)
  }
  
  let blockName = args[1]
})
*/

  /*
  if( !(fs.existsSync(path.join(process.cwd(), "projectName.txt"))) ){
    printError(`You ain't in project's folder!`, false)
  }
  */

  function command(){
    let command = 1
    console.log(command)
  }

  command()