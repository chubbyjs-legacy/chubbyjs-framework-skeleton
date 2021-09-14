import { Command } from 'commander';
import CleanDirectoriesCommand from '../src/Command/CleanDirectoriesCommand';
import container from '../bootstrap/container';

const console = new Command();

console
    .command('clean-directories [directoryNames]')
    .description('Delete everything within a given directory.')
    .option('-e, --env [env]', 'Environment', 'dev')
    .action((directoryNamesAsString: string, options: { env: string }) => {
        container(options.env)
            .get<CleanDirectoriesCommand>(CleanDirectoriesCommand.name)
            .clean(directoryNamesAsString.split(',').map((directoryName) => directoryName.trim()));
    });

console.parse(process.argv);
