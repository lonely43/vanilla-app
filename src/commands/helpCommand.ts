import { prText } from "../utils"

function welcome(){
   console.log(`${prText.bgGreen}${prText.bold} VanillaApp ${prText.reset}`)
   console.log(`${prText.bold}Hello. That's a "mini framework" for web projects using HTML5/SASS/JS${prText.reset}`)
}

export default function helpCommand(){
   welcome()
}