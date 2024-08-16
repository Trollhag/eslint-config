# @trollhag/eslint-config

[![test](https://github.com/trollhag/eslint-config/workflows/test/badge.svg)](https://github.com/trollhag/eslint-config/actions/workflows/test.yml)
[![release](https://github.com/trollhag/eslint-config/workflows/release/badge.svg)](https://github.com/trollhag/eslint-config/actions/workflows/release.yml)
[![license](https://img.shields.io/github/license/trollhag/eslint-config.svg)](https://github.com/trollhag/eslint-config/blob/main/LICENSE)

## Install

```shell script
npm install --save-dev eslint @trollhag/eslint-config
```

## Usage

Add a `.eslintrc` file with contents:

```json
{
  "extends": "@trollhag"
}
```

_The `eslint-config` suffix may be omitted because it is assumed by ESLint._

### Configurations

This package contains the following configurations:

- default - TypeScript + JavaScript
- `typestrict` - TypeScript strict, type checking (slower)
- `react` - React / React + TypeScript
- `javascript` - JavaScript

### Examples

React

```json
{
  "extends": "@trollhag/eslint-config/react"
}
```

The default and `typestrict` configuration require `typescript` and `eslint` as peer dependencies. The `javascript` configuration only requires `eslint`.

## License

MIT © Oscar Trollhag
