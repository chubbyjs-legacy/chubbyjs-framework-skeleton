import { describe, expect, test } from '@jest/globals';
import { execSync, ExecSyncOptionsWithStringEncoding } from 'child_process';
import { realpathSync } from 'fs';

const rootDir = realpathSync(__dirname + '/../..');
const consoleCommand = 'node ' + rootDir + '/node_modules/.bin/ts-node ' + rootDir + '/bin/console.ts';
const options: ExecSyncOptionsWithStringEncoding = { encoding: 'utf-8' };

describe('console', () => {
    test('help', () => {
        const output = execSync(consoleCommand + ' -h', options);

        expect(output).toMatchInlineSnapshot(`
"Usage: console [options] [command]

Options:
  -h, --help                                    display help for command

Commands:
  clean-directories [options] [directoryNames]  Delete everything within a given directory.
  help [command]                                display help for command
"
`);
    });

    test('clean-directories', () => {
        const output = execSync(consoleCommand + ' clean-directories cache,log -e jest', options);

        expect(output).toMatch(/Start clean directory with name "cache" at path "[^"]+\/var\/cache\/jest"/);
        expect(output).toMatch(/Start clean directory with name "log" at path "[^"]+\/var\/log"/);
    });
});
