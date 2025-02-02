import cmdTemplate from "../interfaces/cmdTemplate"

const commandsList: Array<cmdTemplate> = [
   {
      name: "create <project-name>",
      info: "Creating project folder. Type name for the project as argument."
   },
   {
      name: "dev <port?>",
      info: "Start live server. Type port as argument (default port: 3000)."
   }
]

export default commandsList