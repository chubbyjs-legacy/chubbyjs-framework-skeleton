import Call from '@chubbyjs/chubbyjs-mock/dist/Call';
import MockByCalls from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import PinoPsrLogger from '@chubbyjs/chubbyjs-pino-psr/dist/PinoPsrLogger';
import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import { describe, expect, test } from '@jest/globals';
import { DestinationStream } from 'pino';
import { Config } from '../../../../config/prod';
import PinoPsrLoggerFactory from '../../../../src/ServiceFactory/Logger/PinoPsrLoggerFactory';
import DestinationStreamDouble from '../../Double/Pino/DestinationStreamDouble';
import ContainerDouble from '../../Double/Psr/Container/ContainerDouble';

const mockByCalls = new MockByCalls();

describe('PinoPsrLoggerFactory', () => {
    test('invoke', async () => {
        const stream = mockByCalls.create<DestinationStream>(DestinationStreamDouble);

        const config: Config = {
            ...({} as Config),
            pino: {
                options: { level: 'debug' },
                stream,
            },
        };

        const container = mockByCalls.create<ContainerInterface>(ContainerDouble, [
            Call.create('get').with('config').willReturn(config),
        ]);

        const pinoPsrLogger = PinoPsrLoggerFactory(container);

        expect(pinoPsrLogger).toBeInstanceOf(PinoPsrLogger);
    });
});
