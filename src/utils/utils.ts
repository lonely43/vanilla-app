import { version } from "../../package.json"
import cmdTemplate from "../interfaces/cmdTemplate";
const fs = require("fs"), path = require("path")

export const prText = {
  white: `\x1b[37m`,
  red: `\x1b[31m`,
  pink: `\x1b[35m`,
  green: `\x1b[32m`,
  bgGreen: `\x1b[42m`,
  bold: `\x1b[1m`,
  undeline: `\x1b[4m`,
  reset: `\x1b[0m`,
}

export function handleJSON(json: any, url: string): void{
  let jsonData = json;
  for(let i in jsonData){
    fs.writeFileSync(path.join(url, jsonData[i].path), jsonData[i].data)
  }
}

export function cmds(array: Array<cmdTemplate>, preset: string): void{
  for(let i = 0; i < array.length; i++){
     console.info(`${preset} > vn ${array[i].name} - ${array[i].info}${prText.reset}`)
  }
}

export function logo(): void{
  console.info(`${prText.bgGreen}${prText.white}${prText.bold} Van-App ${version} ${prText.reset}`)
}