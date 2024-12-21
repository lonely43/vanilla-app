const http = require("http")

function hostServer(port=4000){
   let server = http.createServer((res: any)=>{
      res.write('Hello World!');
      res.end()
   })
   server.listen(port, () => {console.log(`\x1b[4mhttp://localhost:${port}\x1b[0m - started`)})
}

function serve(){
   hostServer()
}

export default function developmentServe(){
   serve()
}
