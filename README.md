# ESLint Config Latest

[![Build Status](https://scrutinizer-ci.com/g/kukiron/eslint-config-latest/badges/build.png?b=master)](https://scrutinizer-ci.com/g/kukiron/eslint-config-latest/build-status/master) [![Known Vulnerabilities](https://snyk.io/test/github/kukiron/eslint-config-latest/badge.svg)](https://snyk.io/test/github/kukiron/eslint-config-latest) [![bitHound Dependencies](https://www.bithound.io/github/kukiron/eslint-config-latest/badges/dependencies.svg)](https://www.bithound.io/github/kukiron/eslint-config-latest/master/dependencies/npm)

[![NPM](https://nodei.co/npm/eslint-config-latest.png)](https://nodei.co/npm/eslint-config-latest/)

`eslint-config-latest` is the complete & latest [ESLint](https://eslint.org/) configuration imcorporating [Prettier](https://github.com/prettier/prettier) for even better code formatting & unification. It also covers [React](https://github.com/facebook/react), providing linting solution for your react code out of the box.

**Support for testing frameworks** `mocha` **&** `jest`. **Also, no more semi-colons & it's okay!**

The installation & usage is pretty simple & it's also fully customizable.

## Usage

1. Download the npm version of `eslint-config-latest` add it to your project.

```shell
npm i -D eslint-config-latest
```

2. Create a `.eslintrc.js` config file:

```javascript
module.exports = {
  extends: ["latest"]
}
```

3. Then, add lint scripts to `package.json`:

```json
"scripts": {
  "lint": "eslint -- . --ext .js, .jsx",
  "lint:fix": "eslint --fix . --ext .js, .jsx"
}
```

4. Run `npm run lint` to lint your code
5. Run `npm run lint:fix` to lint, format and fix the code
6. If you want to disable any rules or create an exception, just mention it at the top of your file.

```shell
/*eslint no-undef: 0*/
```

Or you can configure the `.eslintrc.js` & add new rules.

Happy linting! 👍
