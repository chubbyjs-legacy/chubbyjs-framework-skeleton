import PathToRegexpUrlGenerator from '@chubbyjs/chubbyjs-framework-router-path-to-regexp/dist/PathToRegexpUrlGenerator';
import Routes from '@chubbyjs/chubbyjs-framework/dist/Router/Routes';
import RoutesInterface from '@chubbyjs/chubbyjs-framework/dist/Router/RoutesInterface';
import Call from '@chubbyjs/chubbyjs-mock/dist/Call';
import MockByCalls, { mockByCallsUsed } from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import { describe, expect, test } from '@jest/globals';
import PathToRegexpUrlGeneratorFactory from '../../../../src/ServiceFactory/Framework/PathToRegexpUrlGeneratorFactory';
import RoutesDouble from '../../Double/Chubbyjs/Framework/Router/RoutesDouble';
import ContainerDouble from '../../Double/Psr/Container/ContainerDouble';

const mockByCalls = new MockByCalls();

describe('PathToRegexpUrlGeneratorFactory', () => {
    test('invoke', async () => {
        const routes = mockByCalls.create<RoutesInterface>(RoutesDouble, [
            Call.create('getRoutesByName').with().willReturn(new Map()),
        ]);

        const container = mockByCalls.create<ContainerInterface>(ContainerDouble, [
            Call.create('get').with(Routes.name).willReturn(routes),
        ]);

        const pathToRegexpUrlGenerator = PathToRegexpUrlGeneratorFactory(container);

        expect(pathToRegexpUrlGenerator).toBeInstanceOf(PathToRegexpUrlGenerator);

        expect(mockByCallsUsed(routes)).toBe(true);
        expect(mockByCallsUsed(container)).toBe(true);
    });
});
