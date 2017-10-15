# ESLint Config Latest

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
