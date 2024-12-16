const fs = require("fs"),
      path = require("path")
const { printError } = require('../utils.js')
const { logError } = require("../errors/errors.js")

function createFiles(url: string){
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
  let data = fs.readFileSync(path.join(__dirname, "../../../public/favicon.ico"))
  fs.writeFileSync(path.join(url, "public/favicon.ico"), data)
}

function createSchema(appName: string){
  let url = (appName == ".") ? path.join(process.cwd()) : path.join(process.cwd(), String(appName))

  // rewrite in future
  if(!(appName == ".")){
    if(fs.existsSync(url)){
      printError(`\x1b[4m ${url} \x1b[0mis already exist.`)
    }

    fs.mkdirSync(url) 
  }

  let dirs = [
    "public", 
    "src", 
    "src/assets", 
    "src/assets/imgs", 
    "src/assets/styles", 
    "src/assets/styles/css", 
    "src/assets/styles/scss", 
    "src/components", 
    "src/pages", 
    "src/scripts", 
    "src/scripts/index"
  ]

  dirs.forEach(route => {
    fs.mkdirSync(path.join(url, route))
  })

  createFiles(url)
}

export default function createApp(args: Array<string>){ 
  //if(args.length > 0)
  
  let appName: string = args[0]

  createSchema(appName)
  console.info(`${appName} - successful created`)
}

//module.exports = create1App