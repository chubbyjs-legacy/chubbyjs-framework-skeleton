import RouteInterface from '@chubbyjs/chubbyjs-framework/dist/Router/RouteInterface';
import Routes from '@chubbyjs/chubbyjs-framework/dist/Router/Routes';
import Call from '@chubbyjs/chubbyjs-mock/dist/Call';
import MockByCalls, { mockByCallsUsed } from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import ResponseInterface from '@chubbyjs/psr-http-message/dist/ResponseInterface';
import ServerRequestInterface from '@chubbyjs/psr-http-message/dist/ServerRequestInterface';
import RequestHandlerInterface from '@chubbyjs/psr-http-server-handler/dist/RequestHandlerInterface';
import { describe, expect, test } from '@jest/globals';
import PingRequestHandler from '../../../../src/RequestHandler/PingRequestHandler';
import RoutesFactory from '../../../../src/ServiceFactory/Framework/RoutesFactory';
import ContainerDouble from '../../Double/Psr/Container/ContainerDouble';
import ResponseDouble from '../../Double/Psr/HttpMessage/ResponseDouble';
import ServerRequestDouble from '../../Double/Psr/HttpMessage/ServerRequestDouble';
import RequestHandlerDouble from '../../Double/Psr/HttpServerHandler/RequestHandlerDouble';

const mockByCalls = new MockByCalls();

describe('RoutesFactory', () => {
    test('invoke', async () => {
        const request = mockByCalls.create<ServerRequestInterface>(ServerRequestDouble);

        const response = mockByCalls.create<ResponseInterface>(ResponseDouble);

        const pingRequestHandler = mockByCalls.create<RequestHandlerInterface>(RequestHandlerDouble, [
            Call.create('handle')
                .with(request)
                .willReturnCallback(async () => {
                    return response;
                }),
        ]);

        const container = mockByCalls.create<ContainerInterface>(ContainerDouble, [
            Call.create('get').with(PingRequestHandler.name).willReturn(pingRequestHandler),
        ]);

        const routes = RoutesFactory(container);

        expect(routes).toBeInstanceOf(Routes);

        const routesByName = routes.getRoutesByName();

        expect(routesByName.has('ping')).toBe(true);

        const pingRoute = routesByName.get('ping') as RouteInterface;

        expect(pingRoute.getPath()).toBe('/ping');

        expect(await pingRoute.getRequestHandler().handle(request)).toBe(response);

        expect(mockByCallsUsed(request)).toBe(true);
        expect(mockByCallsUsed(container)).toBe(true);
    });
});
