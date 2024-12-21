import { isPortLegit, prText } from "../utils";

const http = require("http")

function hostServer(port: number){
   let server = http.createServer((res: any)=>{
      res.write('Hello World!'); /// replace on index.html
      res.end()
   })
   server.listen(port, () => {console.info(`${prText.undeline}${prText.bold}http://localhost:${port}${prText.reset}${prText.green}${prText.bold} - started${prText.reset}`)})
}

function serve(port: any){
   hostServer(isPortLegit(port))

   // add sass & dotnev
}

export default function developmentServe(arr: Array<string>){
   serve(arr[0])
}
