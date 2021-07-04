# coolest nobody
_to make this purty, right click the file up there ^^ and click open preview_

## starting development server
_note that no changes show up until u save whatever file u edited in vs code owo_
* install all required node modules (dependencies)
    * npm i
* start dat bitch
    * npm start
* to kill the server
    * click in terminal and hit Crtl + C to kill da operation

## git commands
* to push to your branch
    * git add .
    * git commit -m "message detailing what u did"
    * git push origin branchname
* to pull from your branch
    * git pull origin branchname
* to switch branches
    * git checkout branchname
* to make new branch
    * git checkout -b branchname
* to check what branch ur on
    * git status

_if ur tring to push, pull, or switch and it's giving you a hard time, type_ **git stash** _to store your changes and it should work B-)_

## making your changes live
* if ur good to go, merge all ur changes into develop and then merge develop into master
* switch to master (or stay on develop if it is working and best version {master should be impeccable, tho >:(}) and then run these commands
    * npm run build
    * npm run deploy
* that's literally it.

## need 2 know shortcuts
* comment out line of code (vs code)
    * Ctrl + /
* open terminal (in vs code)
    * Ctrl + ~
* show hide file explorer (vs code)
    * Ctrl + B
* to split the view with two files
    * right click the tab of the file ^^ up der and click "split right"
* kill terminal operation/process
    * Ctrl + C
* open file by typing name then hit enter (vs code)
    * Ctrl + P
* to go into folder in terminal
    * cd foldername
* to list out files in folder
    * dir (ls on mac/linux)
* download new themes (vs code)
    * click the extensions tab on the far left of vs code and search name of whatever theme name it is (im high sry if that made no sense)
* change theme of vs code
    * Ctrl + K then Ctrl + T


## misc react/web dev notes
* all of ur pages are in src/components. pages are components. components can literally be anything lol. u can put components inside of components. <-- that is the whole point of using react or any framework, reusability and decluttering ur workflow/amount of code u have to write. 
* first thing the browser sees when it's loading ur page is App.js. notice how the only thing in App.js is <Home/>. the <BrowserRouter/> that's wrapper around it is a tool that makes it so u can switch pages. it just starts with Home.
* all images go in the resources folder, you rename this assets or make a subfolder in it called "images" if u so desire
* dont write any css in app.css or index.css, every bit of css goes in the accompanying .css files that every component has when we make a component. u can store the style for a component in the actual .js file, but as u can see we have the style separated into it's own .css file which is then imported at the top of the .js file. look at Home folder for reference. on line #3 we import the css file we made.
* package.json has a bunch of info about ur website, dependencies it uses, and the scripts it has to deploy ur site. on line #34, we put ur s3 bucket that we made on amazon web services (AWS) in there, so that's where it points at every time we run "npm run deploy".
* u still need to add info for your website to the index.html file in the public folder like u would in a normal html.css website. this is also the file u would link bootstrap in. 
* the favicon.ico file in the public folder is the little icon that's on the tab when ur in chrome or firefox or whatever. look up favicon generator and u can put a company's logo in it, and it will convert it to a favicon.ico and u can drag and dropp al that shit into dis file, replacing these old ones. 
* the routes.js file in the services folder is the router, which is the service that makes it so you can go from one page to another. u have to add each component there with the corresponding name of the page. 
* nav is super annoyingg, if it works just praise christ and don't worry why. find good navs and never let go. bootstrap has a lot of navs u can use. 

## things u should learn/know about to be a frontend developer
* html/css
* know how to move around with ur terminal. cd into folders, use dir to list out all files in a folder. don't need 2 know a lot ab terminal tbh just basic stuff.
* front-end frameworks
    * react is the best path here, but there are other options like vue or angular. react is by far the most in demand.
* basic javascript
    * need to know for loops, if statements, passing data
* react hooks
* how to use npm
* how to use git
* how to make api calls in react or even normal html css with a js implementation
* bootstrap
* flex box
* scss
* backend (need to know a bit even if ur doing frontend, tackle this stuff last tho)
    * hosting
        * aws
            * route 53 (registering a domain name)
            * s3 (where we put website files)
            * cloudfront (distribution? i dont rly know lol)
        * basic mySQL/noSQL
            * dynamoDB is the database service we use which is noSQL, i guess it's rly good.
