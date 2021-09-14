import ResponseFactory from '@chubbyjs/chubbyjs-http-message/dist/Factory/ResponseFactory';
import Call from '@chubbyjs/chubbyjs-mock/dist/Call';
import MockByCalls from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import ResponseFactoryInterface from '@chubbyjs/psr-http-factory/dist/ResponseFactoryInterface';
import { describe, expect, test } from '@jest/globals';
import PingRequestHandler from '../../../../src/RequestHandler/PingRequestHandler';
import PingRequestHandlerFactory from '../../../../src/ServiceFactory/RequestHandler/PingRequestHandlerFactory';
import ContainerDouble from '../../Double/Psr/Container/ContainerDouble';
import ResponseFactoryDouble from '../../Double/Psr/HttpFactory/ResponseFactoryDouble';

const mockByCalls = new MockByCalls();

describe('PingRequestHandlerFactory', () => {
    test('invoke', async () => {
        const responseFactory = mockByCalls.create<ResponseFactoryInterface>(ResponseFactoryDouble);

        const container = mockByCalls.create<ContainerInterface>(ContainerDouble, [
            Call.create('get').with(ResponseFactory.name).willReturn(responseFactory),
        ]);

        const pingRequestHandler = PingRequestHandlerFactory(container);

        expect(pingRequestHandler).toBeInstanceOf(PingRequestHandler);
    });
});
