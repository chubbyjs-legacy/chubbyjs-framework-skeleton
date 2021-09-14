import PathToRegexpRouteMatcher from '@chubbyjs/chubbyjs-framework-router-path-to-regexp/dist/PathToRegexpRouteMatcher';
import RouteMatcherMiddleware from '@chubbyjs/chubbyjs-framework/dist/Middleware/RouteMatcherMiddleware';
import RouteMatcherInterface from '@chubbyjs/chubbyjs-framework/dist/Router/RouteMatcherInterface';
import ResponseFactory from '@chubbyjs/chubbyjs-http-message/dist/Factory/ResponseFactory';
import Call from '@chubbyjs/chubbyjs-mock/dist/Call';
import MockByCalls, { mockByCallsUsed } from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import PinoPsrLogger from '@chubbyjs/chubbyjs-pino-psr/dist/PinoPsrLogger';
import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import ResponseFactoryInterface from '@chubbyjs/psr-http-factory/dist/RequestFactoryInterface';
import LoggerInterface from '@chubbyjs/psr-log/dist/LoggerInterface';
import { describe, expect, test } from '@jest/globals';
import RouteMatcherMiddlewareFactory from '../../../../src/ServiceFactory/Framework/RouteMatcherMiddlewareFactory';
import RouteMatcherDouble from '../../Double/Chubbyjs/Framework/Router/RouteMatcherDouble';
import ContainerDouble from '../../Double/Psr/Container/ContainerDouble';
import ResponseFactoryDouble from '../../Double/Psr/HttpFactory/ResponseFactoryDouble';
import LoggerDouble from '../../Double/Psr/Log/LoggerDouble';

const mockByCalls = new MockByCalls();

describe('RouteMatcherMiddlewareFactory', () => {
    test('invoke', async () => {
        const routeMatcher = mockByCalls.create<RouteMatcherInterface>(RouteMatcherDouble);

        const responseFactory = mockByCalls.create<ResponseFactoryInterface>(ResponseFactoryDouble);

        const logger = mockByCalls.create<LoggerInterface>(LoggerDouble);

        const container = mockByCalls.create<ContainerInterface>(ContainerDouble, [
            Call.create('get').with(PathToRegexpRouteMatcher.name).willReturn(routeMatcher),
            Call.create('get').with(ResponseFactory.name).willReturn(responseFactory),
            Call.create('get').with(PinoPsrLogger.name).willReturn(logger),
        ]);

        const routeMatcherMiddleware = RouteMatcherMiddlewareFactory(container);

        expect(routeMatcherMiddleware).toBeInstanceOf(RouteMatcherMiddleware);

        expect(mockByCallsUsed(routeMatcher)).toBe(true);
        expect(mockByCallsUsed(responseFactory)).toBe(true);
        expect(mockByCallsUsed(logger)).toBe(true);
        expect(mockByCallsUsed(container)).toBe(true);
    });
});
