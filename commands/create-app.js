const fs = require("fs")
const path = require("path")

function isExist(url){
  let isExist = !(fs.existsSync(url))
 
  if(!isExist){
    console.log(`ERROR \n ${url} - already exist.`)
    process.exit(1)
  }
}

function createSchema(url){
  // create app's folder
  fs.mkdirSync(url, (err)=>{if(err){console.log(`ERROR \n ${err}`);process.exit(0)}})

  // create static folder
  fs.mkdirSync(path.join(url, "static"), (err)=>{if(err){console.log(`ERROR \n ${err}`);process.exit(0)}})
}

function createApp(dirName){
  let url = path.join(process.cwd(), String(dirName))
  
  isExist(url)
  createSchema(url)
  process.exit(0)
}

module.exports = createApp