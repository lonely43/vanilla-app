import cmdTemplate from "../interfaces/cmdTemplate"

const commandsList: Array<cmdTemplate> = [
   {
      name: "create <project-name>",
      info: "Creating project folder. Select name for the project or './'"
   },
   {
      name: "dev <port?>",
      info: "Start live server. Select port unnecessary."
   }
]

export default commandsList