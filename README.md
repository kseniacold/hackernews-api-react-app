# Hacker News Reader Application

__Hacker News Reader__ is a `React.js` application consisting of 2 sub-apps: 

* __Landing Page__  available at `/` is a responsive view created accroding to the prototype.
* __Hacker News Reader__ available `/hacker-news` is a feed reader. It fetches from [the Hacker News APIs](https://github.com/HackerNews/API) and allows to view 100 top stories and to bookmark them.
<br>
The project shows the basic patterns of React application state management using [Redux.js](https://redux.js.org/)
<br>
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Views

* Hacker News Reader App:

![Main screen][main_screen]

[main_screen]: https://github.com/kseniacold/hackernews-api-react-app/blob/master/docs/main_screen.png?raw=true "Hacker News Reader Screen"

* Bookmarked Stories Screen: 

![Bookmarked stories][bookmarked_stories]

[bookmarked_stories]: https://github.com/kseniacold/hackernews-api-react-app/blob/master/docs/bookmarks_screen.png?raw=true "Bookmarked Stories Screen"


---

## Getting Started

### To install the project: 

1. `git clone https://github.com/kseniacold/hackernews-api-react-app.git`

2. In the project directy: `npm install `

## Available Scripts

In the project directory, you can run:

#### `npm run watch-less`

Watches the changes in `.less` stylesheet files, compiles them to `.css` files on the change.

#### `npm run start-js`

Runs the React Application without compiling `.less` files

#### `npm run start`

Runs the application in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### Available Routes

* `/` __Sure App Landing Page__ view
* `/hacker-news` __Hacker News Reader__: top 100 stories with draggable layout
* `/my-bookmarks` __Recently Bookmarked Stories__

The pages reloads when you make changes in the project files. `.less` files compile to `.css` on change as well.

#### `npm run test`

>Launches the test runner in the interactive watch mode.<br>
>See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build-less`

Compiles all the `.less` files to `.css` files

#### `npm run build`

First, compiles all the `.less` files to `.css` files to prepare for the Webpack building process. 
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Under the hood [Create React App]
(https://github.com/facebook/create-react-app) uses [Webpack](https://webpack.js.org/) to build and [Babel](https://babeljs.io/) to compile. Next section, copied from the oroginal __Create React App__ `README.md` explains how to __eject__ the building tool to use undelying technologies directly

#### `npm run eject`

>**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

>If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will >remove the single build dependency from your project.

>Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into >your project so you have full control over them. All of the commands except `eject` will still work, but they will point to >the copied scripts so you can tweak them. At this point you’re on your own.

>You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t >feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it >when you are ready for it.

---

## Project Structure

### Project source code is loacated in the `/src/` and organized the following way: 

* Each component has its folder named `/src/Component`
* `/src/Component/Component.js` contains source code for the React Component
* `/src/Component/Component.less` is the component stylesheet written in [Less.js](http://lesscss.org/). It is watched by `watch-less` script and compiled with `build-less` -  [Gulp.js](https://gulpjs.com/) task
* `src/Component/Component.mobile.less` is a the component's responsive stylesheet. It is imported to the `/src/Component/Component.less` stylesheet and get's compiled there
* `src/Component/Component.css` is a compiled stylesheet, do not modify it directly
* The component folder also may contain additional files like images and icons
* `/src/commons.less` is a mixins files - that provides common variables and mixins to the project. It allows to quicky modify the project's theme in one place
* `/src/index.less` resets default styles and installs necessary fonts
* `index.js` Application Entry point
* `/src/actions.js` and `/src/reducers.js` are the JavaScript files that defines application State management for [Redux.js](https://redux.js.org/)
* `/src/packery.js` a JavaScript object providing [Packery.js](https://packery.metafizzy.co/) functionality for building __Hacker News Reader__ application layout. 


## More on Development and Process

* __Bookmarked stories__ are percistent within the same browser. The app uses [Local forage](https://github.com/localForage/localForage) offline storage to facilitate it.
* Routes are managed with [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
<br>
<br>

__author__ [Ksenia  Koldaeva](https://kseniacodes.com)
