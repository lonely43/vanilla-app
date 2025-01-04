import { cmds, prText, logo } from "../utils"

const preset = `${prText.bold}${prText.white}`

import commandsList from "../data/commandsData";

function welcome(){
   logo()
   console.info(`${preset}Hello. That's a "mini framework" for web projects using HTML5/SASS/JS${prText.reset}`)
}

function listOfCommands(){
   console.info(`${preset} List of available commands:${prText.reset}`)
   cmds(commandsList, preset)
}

export default function helpCommand(){
   welcome()
   listOfCommands()
   process.exit(0)
}