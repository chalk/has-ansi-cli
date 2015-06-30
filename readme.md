# has-ansi-cli [![Build Status](https://travis-ci.org/sindresorhus/has-ansi-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/has-ansi-cli)

> Check if a string has [ANSI escape codes](http://en.wikipedia.org/wiki/ANSI_escape_code)


## Install

```
$ npm install --global has-ansi-cli
```


## Usage

```
$ has-ansi --help

  Usage
    $ has-ansi <string>
    $ echo <string> | has-ansi

  Example
    $ ls --color | has-ansi && echo 'has ansi'

  Exits with code 0 if input has ANSI escape codes and 1 if not
```


## Related

- [has-ansi](https://github.com/sindresorhus/has-ansi) - API for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)