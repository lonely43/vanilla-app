const fs = require("fs"),
path = require("path")
const { printError } = require('../utils.js')

function createFiles(url){
  fs.writeFileSync(path.join(url, "/src/index.html"), 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta property="og:title" content="Vanilla App" />
  <meta name="description" content="Land page of VN project!">
  <meta property="og:image" content="../public/icon.jpg" />

  <link rel="stylesheet" href="./assets/css/index.css">
  <link rel="icon" href="../public/icon.jpg">

  <title>Van-App</title>
</head>
<body>
  <noscript>You need to enable JavaScript to see full app.</noscript>
  <!-- global script -->
  <script src="./scripts/main.js"></script>

  <main>
    <h1>Main page!</h1>
  </main>

  <!-- project's script -->
  <script src="./scripts/index/index.js"></script>
</body>
</html>`)

  //js
  fs.writeFileSync(path.join(url, "/src/scripts/main.js"),
`//
`)
  fs.writeFileSync(path.join(url, "/src/scripts/index/index.js"),
`//
`)

  //favicon.ico
  let data = fs.readFileSync(path.join(__dirname, "../../favicon.ico"))
  fs.writeFileSync(path.join(url, "public/favicon.ico"), data)
}

function createSchema(url, createFolder=true){
  if(createFolder){
    let isExist = !(fs.existsSync(url))
    if(!isExist){
      printError(`\x1b[4m ${url} \x1b[0mis already exist.`)
    }

    // core folder
    fs.mkdirSync(url, (err)=>{
      if(err){
        printError(`${err}`, false)
      }})
  }

  //folders
  let dirs = ["public", "src", "src/assets", "src/assets/imgs", "src/assets/styles", "src/assets/styles/css", "src/assets/styles/scss", "src/components", "src/pages", "src/scripts", "src/scripts/index"]
  try{
    dirs.forEach(route => {
      fs.mkdirSync(path.join(url, route))
    })
  }catch(err){
    printError(`${err}`, false)
  }

  //files
  createFiles(url)
}

function createApp(appName){
  let createFolder = (appName == ".") ? false : true
  
  let url
  if(createFolder){
    url = path.join(process.cwd(), String(appName))
  }
  else{
    url = path.join(process.cwd())
  }

  createSchema(url, createFolder)

  console.log(`${appName} - successful created`)
  process.exit(0)
}

module.exports = createApp