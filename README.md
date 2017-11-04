# ESLint Config Latest
[![Build Status](https://scrutinizer-ci.com/g/kukiron/eslint-config-latest/badges/build.png?b=master)](https://scrutinizer-ci.com/g/kukiron/eslint-config-latest/build-status/master) [![Maintainability](https://api.codeclimate.com/v1/badges/5704eff87830bea705c1/maintainability)](https://codeclimate.com/github/kukiron/eslint-config-latest/maintainability) [![bitHound Overall Score](https://www.bithound.io/github/kukiron/eslint-config-latest/badges/score.svg)](https://www.bithound.io/github/kukiron/eslint-config-latest) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/kukiron/eslint-config-latest/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/kukiron/eslint-config-latest/?branch=master) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/57b06fda2c124a62b1ca7e2ecf2d73dd)](https://www.codacy.com/app/kukiron/eslint-config-latest?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kukiron/eslint-config-latest&amp;utm_campaign=Badge_Grade) [![Known Vulnerabilities](https://snyk.io/test/github/kukiron/eslint-config-latest/badge.svg)](https://snyk.io/test/github/kukiron/eslint-config-latest) [![bitHound Dependencies](https://www.bithound.io/github/kukiron/eslint-config-latest/badges/dependencies.svg)](https://www.bithound.io/github/kukiron/eslint-config-latest/master/dependencies/npm)

`eslint-config-latest` is the complete & latest [ESLint](https://eslint.org/) configuration imcorporating [Prettier](https://github.com/prettier/prettier) for even better code formatting & unification. It also covers [React](https://github.com/facebook/react), providing linting solution for your react code out of the box.

The installation & usage is pretty simple & it's also fully customizable.

## Usage
1. Download the npm version of ```eslint-config-latest``` add it to your project.
```shell
npm i -D eslint-config-latest
```
2. Create a ```.eslintrc.js``` config file:
```javascript
module.exports = {
  extends: ['latest'],
};
```
3. Then, add lint scripts to ```package.json```:
```json
"scripts": {
  "lint": "eslint -- . --ext .jsx",
  "lint:fix": "eslint --fix . --ext .js, .jsx"
}
```
4. Run ```npm run lint``` to lint your code
5. Run ```npm run lint:fix``` to lint, format and fix the code
6. If you want to disable any rules or create an exception, just mention it at the top of your file.
```shell
/*eslint no-undef: 0*/
```

