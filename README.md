# Hacker News Reader Application

---
__Live URL:__ [http://hnr.kseniacodes.com](http://hnr.kseniacodes.com)
---

__Hacker News Reader__ is a `React.js` app for displaying HackerNews feed:

* __Hacker News Reader__ is a feed reader. It fetches from [the Hacker News APIs](https://github.com/HackerNews/API) and allows to view 100 top stories and to bookmark them.
The project shows the basic patterns of React application state management using [Redux.js](https://redux.js.org/).
The project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### Prerequisites

You will need the following installed:

* [npm, nodejs v.10.xx](https://nodejs.org/en/)

### To install the project:

1. `git clone https://github.com/kseniacold/hackernews-api-react-app.git`

2. In the project directory: `npm install `

---

## Main Scripts

In the project directory, you can run:

#### `npm run start`

Runs the application in the development mode together with less watcher running on background.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### Available Routes

* `/` : top 100 stories with draggable layout
* `/my-bookmarks` __Recently Bookmarked Stories__


#### `npm run build`

First, compiles all the `.less` files to `.css` files to prepare for the Webpack building process.
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Under the hood [Create React App]
(https://github.com/facebook/create-react-app) uses [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/).


#### `npm run test`

>Launches the test runner in the interactive watch mode.<br>
>See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Availeble tests:
* `reducers.test.js` tests reducers function to be used in Redux Store
* `hn-api.test.js` test data format received from the API

---

## Additional Scripts

#### `npm run watch-less`

Watches the changes in `.less` stylesheet files, compiles them to `.css` files on the change.

#### `npm run start-js`

Runs the React Application without compiling `.less` files

#### `npm run build-less`

Compiles all the `.less` files to `.css` files

#### `npm run eject`

Next section, copied from the original __Create React App__ `README.md` explains how to __eject__ the building tool to use underlying technologies directly

>**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

>If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

>Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

>You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

## Project Structure

### Project source code is located in the `/src/` and organized the following way:

* Each component has its folder named `/src/Component`
* `/src/Component/Component.js` contains source code for the React Component
* `/src/Component/Component.less` is the component stylesheet written in [Less.js](http://lesscss.org/). It is watched by `watch-less` script and compiled with `build-less` -  [Gulp.js](https://gulpjs.com/) task
* `src/Component/Component.mobile.less` is a the component's responsive stylesheet. It is imported to the `/src/Component/Component.less` stylesheet and get's compiled there
* `src/Component/Component.css` is a compiled stylesheet, do not modify it directly
* The component folder also may contain additional files like images and icons
* `/src/commons.less` is a mixins files - that provides common variables and mixins to the project. It allows to quickly modify the project's theme in one place
* `/src/index.less` resets default styles and installs necessary fonts
* `index.js` Application Entry point
* `/src/actions.js` and `/src/reducers.js` are the JavaScript files that defines application State management for [Redux.js](https://redux.js.org/)
* `/src/packery.js` a JavaScript object providing [Packery.js](https://packery.metafizzy.co/) functionality for building __Hacker News Reader__ application layout.
* `/src/config.js` application-wise configuration
* `/src/services/` folder containing services provides, e.g `hn-api.js` for connecting to the Hacker News API


## More on Development and Process

* __Bookmarked stories__ are persistent within the same browser. The app uses [Local forage](https://github.com/localForage/localForage) offline storage to facilitate it.
* Routes are managed with [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
<br>
<br>

__author__ [Ksenia  Koldaeva](https://kseniacodes.com)
