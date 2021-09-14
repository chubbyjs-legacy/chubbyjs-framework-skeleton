import Call from '@chubbyjs/chubbyjs-mock/dist/Call';
import MockByCalls, { mockByCallsUsed } from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import { describe, expect, test } from '@jest/globals';
import { Config } from '../../../../config/prod';
import CleanDirectoriesCommand from '../../../../src/Command/CleanDirectoriesCommand';
import CleanDirectoriesCommandFactory from '../../../../src/ServiceFactory/Command/CleanDirectoriesCommandFactory';
import ContainerDouble from '../../Double/Psr/Container/ContainerDouble';

const mockByCalls = new MockByCalls();

describe('CleanDirectoriesCommandFactory', () => {
    test('invoke', async () => {
        const config: Config = {
            ...({} as Config),
            directories: new Map([['cache', 'cacheDir']]),
        };

        const container = mockByCalls.create<ContainerInterface>(ContainerDouble, [
            Call.create('get').with('config').willReturn(config),
        ]);

        const cleanDirectoriesCommandFactory = CleanDirectoriesCommandFactory(container);

        expect(cleanDirectoriesCommandFactory).toBeInstanceOf(CleanDirectoriesCommand);

        expect(mockByCallsUsed(container)).toBe(true);
    });
});
