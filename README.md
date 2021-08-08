# Mono-Repo for Full-Stack App with NextJS + Optional CMS

This package is a template for bootstrapping my NextJS frontends with an optional node backend package (optional as Next itself has a server-side API), using a configuration which I tend to replicate across projects.

## Project Root

- Git Hooks provided with Husky for pre-commit and pre-push package scripts.
- Mono-repo tooling provided with lerna and yarn workspaces.

## Front-End

- CSS in JS with emotion (custom babel config provided to add support for emotion features)
- Linting and Formatting with @sun33t/eslint-config and Prettier
- Unit tests with @testing-library. Custom jest.config.js to enable transforming of jsx to js with babel-jest
- Prop-Types for type checking

## Back-End

- A `backend` package can be added optionally to house a node-based cms (e.g. [sanity](https://sanity.io))

## How To Use

Use the 'template' feature in GitHub to create a copy of this template. When it's cloned down to your machine, ensure you change the package names in each of the package.json files to the naming convention of your project.

Issue `yarn` in the root folder to ensure all dependencies are installed and any local packages are linked together.

## Authors

- [@sun33t](https://www.github.com/sun33t)
  
## Feedback

If you have any feedback, please reach out to me at hello@suneet.codes

## Acknowledgements

- [@sun33t/eslint-config](https://github.com/sun33t/eslint-config)
- [nextJS](https://github.com/vercel/next.js)
- [emotion](https://emotion.sh)
- [babel-jest](https://www.npmjs.com/package/babel-jest)
- [babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [testing-library](https://testing-library.com/)
- [lerna](https://lerna.js.org/)
- [husky](https://typicode.github.io/husky/#/)