## Description

[React App](https://create-react-app.dev/) application that host a web to consume the Phone Catalog API

It uses Typecript, Jest for testing and the following 3rd party libraries:

- [React Query](https://react-query.tanstack.com/) and [Axios](https://axios-http.com/docs/intro) for data fetching
- [Radix Primitives](https://www.radix-ui.com/) that provides styleless components implementations
- [React Stitches](https://stitches.dev/) to create a theme and styled components
- [Radix Colors](https://www.radix-ui.com/colors) to get colors for the theme
- [Radix Icons](https://icons.modulz.app/) for Icons
- [Formik](https://formik.org/) for creating forms
- [ahooks](https://ahooks.js.org/) for some utility hooks

## Installation

```bash
$ yarn
```

## Environments file

You have to create a .env file following the template on /.env.example

```
REACT_APP_BACKEND_API_URL=
```

## Running the app

```bash
$ yarn start
```

## Building the app

```
$ yarn build
```

## Test

```bash
# unit tests
$ yarn test

# test coverage
$ yarn test:coverage
```

## Stay in touch

- Author - [Carlos Díaz](https://github.com/linkmetal)
