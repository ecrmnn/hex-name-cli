# hex-name-cli
> CLI for checking if a package name is available on Hex.pm

[![Travis](https://img.shields.io/travis/ecrmnn/hex-name-cli.svg?style=flat-square)](https://travis-ci.org/ecrmnn/hex-name-cli.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/hex-name-cli.svg?style=flat-square)](http://badge.fury.io/js/hex-name-cli)
[![npm downloads](https://img.shields.io/npm/dm/hex-name-cli.svg?style=flat-square)](http://badge.fury.io/js/hex-name-cli)
[![npm license](https://img.shields.io/npm/l/hex-name-cli.svg?style=flat-square)](http://badge.fury.io/js/hex-name-cli)

### Installation
```bash
npm install -g hex-name-cli
```

### Usage
```bash
$ hex-name cowboy
#=> $ cowboy is unavailable

$ hex-name unicorn_module
#=> $ unicorn_module is available
```

### Related
- [hex-name](https://github.com/ecrmnn/hex-name) - API for this module

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)