import PathToRegexpRouteMatcher from '@chubbyjs/chubbyjs-framework-router-path-to-regexp/dist/PathToRegexpRouteMatcher';
import Routes from '@chubbyjs/chubbyjs-framework/dist/Router/Routes';
import RoutesInterface from '@chubbyjs/chubbyjs-framework/dist/Router/RoutesInterface';
import Call from '@chubbyjs/chubbyjs-mock/dist/Call';
import MockByCalls, { mockByCallsUsed } from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import { describe, expect, test } from '@jest/globals';
import PathToRegexpRouteMatcherFactory from '../../../../src/ServiceFactory/Framework/PathToRegexpRouteMatcherFactory';
import RoutesDouble from '../../Double/Chubbyjs/Framework/Router/RoutesDouble';
import ContainerDouble from '../../Double/Psr/Container/ContainerDouble';

const mockByCalls = new MockByCalls();

describe('PathToRegexpRouteMatcherFactory', () => {
    test('invoke', async () => {
        const routes = mockByCalls.create<RoutesInterface>(RoutesDouble, [
            Call.create('getRoutesByName').with().willReturn(new Map()),
        ]);

        const container = mockByCalls.create<ContainerInterface>(ContainerDouble, [
            Call.create('get').with(Routes.name).willReturn(routes),
        ]);

        const pathToRegexpRouteMatcher = PathToRegexpRouteMatcherFactory(container);

        expect(pathToRegexpRouteMatcher).toBeInstanceOf(PathToRegexpRouteMatcher);

        expect(mockByCallsUsed(routes)).toBe(true);
        expect(mockByCallsUsed(container)).toBe(true);
    });
});
