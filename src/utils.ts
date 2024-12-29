import { WrongArguments } from "./errors";

const fs = require("fs"), path = require("path")

export const prText = {
  red: `\x1b[31m`,
  pink: `\x1b[35m`,
  green: `\x1b[32m`,
  bgGreen: `\x1b[42m`,
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

export function isPortLegit(port?: any){
  if(port == null || undefined){
    return 4000
}
  if (isNaN(port) || String(port).length !== 4){
    throw new WrongArguments(port)
  }

  return Number(port)
}