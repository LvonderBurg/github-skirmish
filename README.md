# GitHub Skirmish

This is my implementation of the GitHub Battle app developed during [React Training](https://www.reacttraining.com)'s course on React Fundamentals.

## How to use

### Run dev server
```bash
# assumes you have NodeJS installed, of course
$ npm start
```

### Build for production

```bash
# assumes you have NodeJS installed, of course
$ npm build
```

## Under the hood
This app was not created with create-react-app, which is a great starter kit for React btw.
Instead, it is built from the ground up using the following tooling:
- **Yarn** for package / dependency management (installed globally, but yarn.lock file installed here)
- **Webpack Dev Server** for running a simple development server with hot module reloading
- **Webpack** for running transpiling, minifying, and injecting the finished JS bundle into our static html page
- **Babel** for transpiling ES6 syntax as well as JSX into regular (ES5-)JavaScript
