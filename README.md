# Vue CLI plugin git-describe

[![npm version](https://img.shields.io/npm/v/vue-cli-plugin-git-describe.svg)](https://www.npmjs.com/package/vue-cli-plugin-git-describe)
[![npm license](https://img.shields.io/npm/l/vue-cli-plugin-git-describe.svg)](https://www.npmjs.com/package/vue-cli-plugin-git-describe)
[![Build Status](https://travis-ci.org/idelsink/vue-cli-plugin-git-describe.svg?branch=master)](https://travis-ci.org/idelsink/vue-cli-plugin-git-describe)

This [Vue CLI](https://cli.vuejs.org/) plugin calls
[git-describe](https://www.npmjs.com/package/git-describe) with the provided arguments on the working directory or any other directory and
parses the output to individual components. On compilation time the
git-describe information will be injected so that it can be used in, for example,
browser served applications which have no access to the local file system.

## Installation

Available from npm:

```shell
$ vue add git-describe
```

Tests are not included in the npm package —
clone the git repository to run tests.

## Usage

vue-cli-plugin-git-describe uses the node [git-describe](https://www.npmjs.com/package/git-describe) module.
During compilation, the variable `variableName`, default `GIT_DESCRIBE`, is replaced with the
[git-describe](https://www.npmjs.com/package/git-describe#example-output) object.

## Example output

```javascript
{
    dirty: false,
    hash: 'g3c9c15b',
    distance: 6,
    tag: 'v2.1.0-beta',
    semver: SemVer, // SemVer instance, see https://github.com/npm/node-semver
    suffix: '6-g3c9c15b',
    raw: 'v2.1.0-beta-6-g3c9c15b',
    semverString: '2.1.0-beta+6.g3c9c15b'
}
```

## More information

See [git-describe](https://www.npmjs.com/package/git-describe) for more information about the usage of the git-describe package.

## Tests

Tests can be run by cloning the repository and running the following command.

```sh
$ npm install
$ npm test
```
