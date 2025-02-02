import { readdir, readdirSync } from "fs"
import { ExistedFolder, WrongArguments } from "../utils/errors"
import { prText, logo } from "../utils/utils"

const fs = require("fs"),
	path = require("path")

function logger(appName: string, url: string): void {
	logo()
	console.info(`${prText.bold}${prText.white}${prText.undeline}${url}${prText.reset}${prText.bold}${prText.green} - successful created${prText.reset}\n`)
	console.info(`${prText.bold}${prText.white}Next steps: \n> cd ${appName}\n> vn dev <port?>${prText.reset}`)
	process.exit(0)
}

function copyDirectory(src: string, dest: string) {
	try {
		fs.mkdirSync(dest)
	} catch {
		throw new ExistedFolder(dest)
	}

	const items = readdirSync(src)

	items.forEach((item) => {
		const srcItem = path.join(src, item)
		const destItem = path.join(dest, item)

		if (fs.statSync(srcItem).isDirectory()) {
			copyDirectory(srcItem, destItem)
		} else {
			fs.copyFileSync(srcItem, destItem)
		}
	})
}

function create(appName: string): void {
	const url = path.join(process.cwd(), String(appName))

	const templatePath = path.join(__dirname + "../../../../template")
	const appPath = path.join(url)
  
	copyDirectory(templatePath, appPath)

	logger(appName, url)
}

export default function createApp(args: Array<string>): void {
	if (!args[0]) {
		throw new WrongArguments(`${prText.reset}vn create ${prText.bold}${prText.red}${prText.undeline}<?>${prText.reset}`)
	}

	create(args[0])
}
