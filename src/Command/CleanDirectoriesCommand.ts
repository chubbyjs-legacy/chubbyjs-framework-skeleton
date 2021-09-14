import { rmSync, mkdirSync } from 'fs';

class CleanDirectoriesCommand {
    public constructor(private directories: Map<string, string>) {}

    public clean(directoryNames: Array<string>) {
        const unsupportedDirectoryNames: Array<string> = directoryNames.filter(
            (directoryName) => !this.directories.has(directoryName),
        );

        if (unsupportedDirectoryNames.length > 0) {
            console.error(`Unsupported directory names: ${unsupportedDirectoryNames.join(', ')}`);

            return 1;
        }

        directoryNames.forEach((directoryName) => {
            const directory = this.directories.get(directoryName) as string;

            console.info(`Start clean directory with name "${directoryName}" at path "${directory}"`);

            rmSync(directory, { recursive: true });
            mkdirSync(directory);
        });

        return 0;
    }
}

export default CleanDirectoriesCommand;
