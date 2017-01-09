# react-redux boilerplate seed

---
# Demo 

Look demo [here](https://react-redux-webpack-seed.herokuapp.com);

## Tech stack

This is a react-redux starter boilerplate kit. Using the following technologies:

* [React](https://github.com/facebook/react)
* [React Router](https://github.com/rackt/react-router)
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* [React Router Redux](https://github.com/reactjs/react-router-redux) Redux/React Router bindings.
* [React Native](https://github.com/facebook/react-native) ~~present but not configured yet~~.
* [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap)The most popular front-end framework, rebuilt for React.
* [Redux](https://github.com/rackt/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation.
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) A live-editing time travel environment for Redux. ~~((present but not configured yet)~~.
* [Redux Promise](https://github.com/acdlite/redux-promise)
* [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware)
* [Redux Logger](https://github.com/evgenyrodionov/redux-logger) Logger for Redux.
* [Webpack](http://webpack.github.io) for bundling.
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)  ~~server for deploy app(present but only express used)~~.
* [ESLint](http://eslint.org) to maintain a consistent code style.
* [Babel](http://babeljs.io) for ES6 and ES7 magic.
* [Express](https://github.com/expressjs/express)
* Sass, Css, Style, Url, File loaders for webpack.
* [Font Awsome] (http://fontawesome.io/)
* [Cross Env](https://github.com/kentcdodds/cross-env) Cross platform setting of environment scripts.
* [Axios](https://github.com/mzabriskie/axios) Promise based HTTP client for the browser and node.js.

## Installation

```bash
npm install
```
## Running app in dev mode

```bash
npm run dev
```

## Build prod app 

```bash
npm run build
```

## Running app in prod mode

After build 

```bash
npm start
```

## Project structure 

![alt tag](https://github.com/kiskinvlad/react-redux-babel-webpack-express/blob/master/1.png?raw=true|alt=octocat) 

# Deployment on Heroku

What need(using Heroku Git):

1. Go to your heroku dashboard page in browser and create app.
2. Init git repo and add heroku remote.
3. Add(git add) dist, routes, .babelrc, package.json, server.babel.js, server.js and commit.
4. Push to heroku master
5. Open heroku dashboard -> 'YourApp' -> open App
6. Enjoi it

## License

[MIT](license) &copy; [Kiskin Vladislav][author]


[author]: https://github.com/kiskinvlad
