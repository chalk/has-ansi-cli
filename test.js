import {execFile} from 'child_process';
import test from 'ava';
import pify from 'pify';

test(async t => {
	const stdout = await pify(execFile)('./cli.js', ['--version']);
	t.true(stdout.trim().length > 0);
});
