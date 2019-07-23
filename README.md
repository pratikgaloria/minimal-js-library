# @pratik.galoria/minimal-js-library
Minimal JavaScript library boilerplate for your next project.

Kick start your own JavaScript library and publish as a `npm` package.

![Travis (.org)](https://img.shields.io/travis/pratikgaloria/minimal-js-library.svg)
[![npm (scoped)](https://img.shields.io/npm/v/@pratik.galoria/minimal-js-library.svg)](https://www.npmjs.com/package/@pratik.galoria/minimal-js-library)
![GitHub issues](https://img.shields.io/github/issues/pratikgaloria/minimal-js-library.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/@pratik.galoria/minimal-js-library.svg)

## Features

- **ES6** - [Babel](https://babeljs.io/) will transpile the code
- **Test** - [Jest](https://jestjs.io/) with coverage
- **Lint** - [Eslint](https://eslint.org/) with recommended config
- **CI** - [Travis-ci](https://travis-ci.com/) minimal config
- **Minify** - Builds the minified code

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/pratikgaloria/minimal-js-library.git
```
2. Edit the source inside `src` folder.
3. Build the project and test.
```bash
npm run build
npm test
```

## Publish

```bash
npm login
#Logged in as pratik.galoria to scope @pratik.galoria on https://registry.npmjs.org/.

npm publish
# + @pratik.galoria/minimal-js-library@1.0.0
```

Step by step guide to publish the package:
https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/

## Usage

Once published as a npm package, you can install the library on any of your project using npm:

```bash
npm install --save @pratik.galoria/minimal-js-library
```

And then, use like this:

```JavaScript
import sum from '@pratik.galoria/minimal-js-library';

console.log(sum(1, 2)); // 3
```

## Commands

- `npm run build` - Babel will transpile ES6 to ES5 and minify the code.
- `npm run lint` - Run Eslint with recommended config
- `npm test` - Run Jest with coverage results

### License

MIT &copy; Pratik Galoria
