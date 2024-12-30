import { htmlData } from "../data/htmlData";
import { scriptsData } from "../data/scriptsData";
import { scssData } from "../data/scssData";

import { ExistedFolder, WrongArguments } from "../errors";
import { handleJSON, prText, logo } from "../utils";

const fs = require("fs"), path = require("path")

function createFiles(url: string){
  handleJSON(htmlData, url)
  handleJSON(scriptsData, url)
  handleJSON(scssData, url)


  // img
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
    "src/pages", 
    "src/scripts",
    "src/scripts/index"
  ]

  dirs.forEach(dir => {
    fs.mkdirSync(path.join(url, dir))
  })
}

function createStructure(appName: string): void{
  let url = (appName == ".") ? path.join(process.cwd()) : path.join(process.cwd(), String(appName))
  
  createFolders(appName, url)
  createFiles(url)

  // in successful case
  logo()
  console.info(`${prText.bold}${prText.white}${prText.undeline}${url}${prText.reset}${prText.bold}${prText.green} - successful created${prText.reset}\n`)
  console.info(`${prText.bold}${prText.white}Next steps: \n$> cd ${appName}\n$> vn dev <port?>${prText.reset}`)
  process.exit(0)
}

export default function createApp(args: Array<string>): void{ 
  if(!(args[0])){
    throw new WrongArguments(`${prText.reset}${prText.bold}${prText.red}vn create ${prText.undeline}???`)
  }

  let appName: string = args[0]

  createStructure(appName)
}