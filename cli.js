#!/usr/bin/env node
'use strict';
var getStdin = require('get-stdin');
var meow = require('meow');
var hasAnsi = require('has-ansi');

var cli = meow({
	help: [
		'Usage',
		'  $ has-ansi <string>',
		'  $ echo <string> | has-ansi',
		'',
		'Example',
		'  $ ls --color | has-ansi && echo \'has ansi\'',
		'',
		'Exits with code 0 if input has ANSI escape codes and 1 if not'
	]
});

var input = cli.input[0];

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
	getStdin(init);
}
