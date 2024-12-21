import { htmlJson } from "../data/html";
import { scriptsJson } from "../data/scripts";
import scssJson from "../data/scss.json";

const fs = require("fs"), path = require("path")


function handleJSON(json: any, url: string){
  let jsonData = json;
  for(let i in jsonData){
    fs.writeFileSync(path.join(url, jsonData[i].path), jsonData[i].data)
  }
}

function createFiles(url: string){
  handleJSON(htmlJson, url)
  handleJSON(scssJson, url)
  handleJSON(scriptsJson, url)

  //favicon.ico
  let data = fs.readFileSync(path.join(__dirname, "../../../public/favicon.ico"))
  fs.writeFileSync(path.join(url, "public/favicon.ico"), data)
}


function createFolders(appName: string, url: any): void{
  // rewrite in future
  if(!(appName == ".")){
    if(fs.existsSync(url)){ //dsd
      // make unique error
      throw new Error(`${url} - already exists`)
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
  // "src/components", 
    "src/pages", 
    "src/scripts",
    "src/scripts/index"
  ]

  dirs.forEach(route => {
    fs.mkdirSync(path.join(url, route))
  })
}

function createStructure(appName: string): void{
  let url = (appName == ".") ? path.join(process.cwd()) : path.join(process.cwd(), "VNpagesTest", String(appName)) // remove !!! /VNpagesTest on production
  createFolders(appName, url)
  createFiles(url)
}

export default function createApp(args: Array<string>): void{ 
  let appName: string = args[0]

  createStructure(appName)
  
  console.info(`${appName} - successful created`)
}