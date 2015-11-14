#!/usr/bin/env node
'use strict';
const getStdin = require('get-stdin');
const meow = require('meow');
const hasAnsi = require('has-ansi');

const cli = meow(`
	Usage
	  $ has-ansi <string>
	  $ echo <string> | has-ansi

	Example
	  $ ls --color | has-ansi && echo 'has ansi'

	Exits with code 0 if input has ANSI escape codes and 1 if not
`);

const input = cli.input[0];

function init(data) {
	process.exit(hasAnsi(data) ? 0 : 1);
}

if (!input && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(2);
}

if (input) {
	init(input);
} else {
	getStdin().then(init);
}
