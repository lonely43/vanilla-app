# Welcome to Van-App!

Hello. That's a "mini framework" for web projects using HTML5/SASS/JS. 
In a nutshell VN allows you quickly create structure for your web project and serve it in real time!

## Download

Install the library:

    npm i -g van-app

> **Achtung!** Pay attention to the **-g**  flag.

   ## Usage
   All operation happens in **CLI** using **vn** as external command.

## Help command
The **help** command shows all available commands and their descriptions

    vn help

   

## Create van-app
The **create** command takes one argument as the name of your project.
	
    vn create my-app

> In this case, the project's name is my-app.

## Serving server
The **dev** command creates live http-server using [live-server](https://www.npmjs.com/package/live-server) and [Sass's](https://sass-lang.com/) compile

    vn dev 7000

> It takes one optional argument as a port for the server (default: 3000).
