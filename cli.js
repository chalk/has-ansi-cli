#!/usr/bin/env node
import getStdin from 'get-stdin';
import meow from 'meow';
import hasAnsi from 'has-ansi';

const cli = meow(`
	Usage
	  $ has-ansi <text>
	  $ echo <text> | has-ansi

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

(async () => {
	if (input) {
		init(input);
	} else {
		init(await getStdin());
	}
})();
