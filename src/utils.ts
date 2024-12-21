const fs = require("fs"), path = require("path")

export const prText = {
  red: `\x1b[31m`,
  green: `\x1b[32m`,
  bold: `\x1b[1m`,
  undeline: `\x1b[4m`,
  reset: `\x1b[0m`,
}

export function handleJSON(json: any, url: string){
   let jsonData = json;
   for(let i in jsonData){
     fs.writeFileSync(path.join(url, jsonData[i].path), jsonData[i].data)
   }
 }