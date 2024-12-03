const fs = require("fs"),
path = require("path")

function createFiles(){
  
}
function createSchema(url){
  let isExist = !(fs.existsSync(url))
  if(!isExist){
    console.log(`ERROR \n ${url} - already exist.`)
    process.exit(1)
  }
  try{
    // create application's folder
    fs.mkdirSync(url)

    fs.mkdirSync(path.join(url, "public"))

    fs.mkdirSync(path.join(url, "src"))
    let sUrl = path.join(url, "src/assets")
    fs.mkdirSync(path.join(sUrl))  
    fs.mkdirSync(path.join(sUrl, "css"))
    fs.mkdirSync(path.join(sUrl, "scss"))
  }
  catch(err){
    console.log(`ERROR \n ${err}`);process.exit(0)
  }
  
  createFiles(url)
}

function createApp(appName){
  let url = path.join(process.cwd(), String(appName))

  createSchema(url)

  console.log(`${appName} - successful created`)
  process.exit(0)
}

module.exports = createApp