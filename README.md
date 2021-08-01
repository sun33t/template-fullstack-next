# Mono-Repo for NextJS Front-End and Sanity.io Back-End

## Project Root
- Git Hooks provided with Husky for pre-commit and pre-push package scripts.
- Mono-repo tooling provided with lerna and yarn workspaces.

## Front-End
- CSS in JS with emotion (custom babel config provided to add support)
- Linting and Formatting with ESlint and Prettier using AirBnB (removed next lint in favour of this custom setup).
- Unit tests with @testing-library. Custom jest.config.js to enable transforming of jsx to js with babel-jest
- Prop-Types for type checking