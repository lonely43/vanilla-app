import { htmlData } from "../data/htmlData";
import { scriptsData } from "../data/scriptsData";
import { scssData } from "../data/scssData";

import { ExistedFolder } from "../errors";
import { handleJSON, prText } from "../utils";

const fs = require("fs"), path = require("path")

function createFiles(url: string){
  handleJSON(htmlData, url)
  handleJSON(scriptsData, url)
  handleJSON(scssData, url)

  let data = fs.readFileSync(path.join(__dirname, "../../../public/favicon.ico"))
  fs.writeFileSync(path.join(url, "public/favicon.ico"), data)
}


function createFolders(appName: string, url: any): void{
  // rewrite in future
  if(!(appName == ".")){
    if(fs.existsSync(url)){
      throw new ExistedFolder(url)
    }

    fs.mkdirSync(url) 
  }

  let dirs = [
    "public", 
    "src", 
    "src/assets", 
    "src/assets/imgs", 
    "src/assets/styles",
    "src/assets/styles/index", 
    "src/assets/styles/index/blocks", 
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

  console.info(`${prText.bold}${prText.undeline}${url}${prText.reset}${prText.bold}${prText.green} - successful created${prText.reset}`)
}

export default function createApp(args: Array<string>): void{ 
  if(!(args[0])){
    return console.log("error") // do sm 
  }

  let appName: string = args[0]

  createStructure(appName)
}