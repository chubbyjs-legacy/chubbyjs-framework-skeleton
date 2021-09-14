import MockByCalls, { mockByCallsUsed } from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import { describe, expect, test } from '@jest/globals';
import MiddlewaresFactory from '../../../../src/ServiceFactory/Framework/MiddlewaresFactory';
import ContainerDouble from '../../Double/Psr/Container/ContainerDouble';

const mockByCalls = new MockByCalls();

describe('MiddlewaresFactory', () => {
    test('invoke', async () => {
        const container = mockByCalls.create<ContainerInterface>(ContainerDouble);

        const middlewares = MiddlewaresFactory(container);

        expect(middlewares).toBeInstanceOf(Array);
        expect(middlewares.length).toBe(2);

        expect(mockByCallsUsed(container)).toBe(true);
    });
});
