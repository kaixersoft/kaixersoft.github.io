### Rapid Static Website Prototyping
- Helps you to automate download and inclusion of external 
libaries
- No more page refresh needed when javascript, html and css files are modified
- Self host your project and automatically open default browser for you

## Installations
1.) Following needs to be installed globally on your machine
 - [Git](https://git-scm.com/downloads)
 - [NodeJs](https://nodejs.org/en/download/)
 - [Grunt-cli](http://gruntjs.com/getting-started)
 - [Bower](http://bower.io/#install-bower)

2.) Clone this [repository](https://gitlab.com/kakitech/static-server) and run command to initialized your libraries and build tools
 
> $> git clone https://gitlab.com/kakitech/static-server.git mywebsite
 
> $> cd mywebsite
 
> $> npm install && bower install
 

 **(Optional)**
 By default, all css,images,js are ignored, if you plan to track your changes, you need to re-initialized your 
 project repository and modify ".gitignore" to allow tracking of css,images,js
 
 > $> rm -rf .git
 
 > $> git init
 
 See [.gitignore](.gitignore) to know which part to remove to be able to track your files
 
## Folder Structure
- .gitignore
- .bowerrc
- bower.json
- Gruntfile.js
- package.json
- Readme.md
- index.html (Initial HTML file)
- www (folder)
- www/js/ (Put all your custom javascript file)
- www/js/lib/ (Bower will put all libraries here)
- www/css/ (Put all your custom style sheets here)

## How to start working on your project

- If working on index.html, run

> $> grunt serve --html=index

-- All new, deleted, updated javascript and css files will automatically be injected to index.html and reload the page.

- If working on other html file, run

> $> grunt serve --html=other

-- This will monitor "other.html" file for any javascript and css changes and automatically inject files your target html file and reload the page

## How to add libraries
By default, this repository comes with bootstrap library, it will automatically 
include [jQuery](https://jquery.com/) and [Twitter Bootstrap](http://getbootstrap.com/) libraries to your target html.
Adding new libraries encourage you to use bower.
> $> bower install animate.css --save

Notes:
- Add "--save" to update bower.json
- You can find bower packages [here](http://bower.io/search/?q=animate.css)

