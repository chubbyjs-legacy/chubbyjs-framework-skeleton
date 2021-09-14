import ErrorMiddleware from '@chubbyjs/chubbyjs-framework/dist/Middleware/ErrorMiddleware';
import ResponseFactory from '@chubbyjs/chubbyjs-http-message/dist/Factory/ResponseFactory';
import Call from '@chubbyjs/chubbyjs-mock/dist/Call';
import MockByCalls, { mockByCallsUsed } from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import PinoPsrLogger from '@chubbyjs/chubbyjs-pino-psr/dist/PinoPsrLogger';
import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import ResponseFactoryInterface from '@chubbyjs/psr-http-factory/dist/RequestFactoryInterface';
import LoggerInterface from '@chubbyjs/psr-log/dist/LoggerInterface';
import { describe, expect, test } from '@jest/globals';
import { Config } from '../../../../config/prod';
import ErrorMiddlewareFactory from '../../../../src/ServiceFactory/Framework/ErrorMiddlewareFactory';
import ContainerDouble from '../../Double/Psr/Container/ContainerDouble';
import ResponseFactoryDouble from '../../Double/Psr/HttpFactory/ResponseFactoryDouble';
import LoggerDouble from '../../Double/Psr/Log/LoggerDouble';

const mockByCalls = new MockByCalls();

describe('ErrorMiddlewareFactory', () => {
    test('invoke', async () => {
        const responseFactory = mockByCalls.create<ResponseFactoryInterface>(ResponseFactoryDouble);

        const config: Config = {
            ...({} as Config),
            debug: true,
        };

        const logger = mockByCalls.create<LoggerInterface>(LoggerDouble);

        const container = mockByCalls.create<ContainerInterface>(ContainerDouble, [
            Call.create('get').with(ResponseFactory.name).willReturn(responseFactory),
            Call.create('get').with('config').willReturn(config),
            Call.create('get').with(PinoPsrLogger.name).willReturn(logger),
        ]);

        const errorMiddleware = ErrorMiddlewareFactory(container);

        expect(errorMiddleware).toBeInstanceOf(ErrorMiddleware);

        expect(mockByCallsUsed(responseFactory)).toBe(true);
        expect(mockByCallsUsed(logger)).toBe(true);
        expect(mockByCallsUsed(container)).toBe(true);
    });
});
