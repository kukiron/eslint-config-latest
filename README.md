# ESLint Config Latest
[![Build Status](https://scrutinizer-ci.com/g/kukiron/eslint-config-latest/badges/build.png?b=master)](https://scrutinizer-ci.com/g/kukiron/eslint-config-latest/build-status/master) [![Maintainability](https://api.codeclimate.com/v1/badges/5704eff87830bea705c1/maintainability)](https://codeclimate.com/github/kukiron/eslint-config-latest/maintainability) [![bitHound Overall Score](https://www.bithound.io/github/kukiron/eslint-config-latest/badges/score.svg)](https://www.bithound.io/github/kukiron/eslint-config-latest) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/kukiron/eslint-config-latest/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/kukiron/eslint-config-latest/?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/kukiron/eslint-config-latest/badge.svg)](https://snyk.io/test/github/kukiron/eslint-config-latest) [![bitHound Dependencies](https://www.bithound.io/github/kukiron/eslint-config-latest/badges/dependencies.svg)](https://www.bithound.io/github/kukiron/eslint-config-latest/master/dependencies/npm)

`eslint-config-latest` is an opinionated [ESLint](https://eslint.org/) config imcorporating [Prettier](https://github.com/prettier/prettier) for even better code formatting & unification.

## Usage
1. Download the npm version ```eslint-config-latest``` to your project: ```npm i -D eslint-config-latest```
2. Add dependencies: ```npm i -D eslint babel-eslint prettier eslint-config-prettier eslint-plugin-prettier```
3. Create ```.eslintrc.js``` config file:
```javascript
module.exports = {
  extends: ['latest'],
};
```
4. Add lint scripts to ```package.json```:
```json
"scripts": {
  "lint": "eslint -- . --ext .jsx",
  "lint:fix": "npm run lint -- --fix"
}
```
5. Run ```npm run lint``` to lint your code
6. Run ```npm run lint:fix``` to lint, format and fix your code
