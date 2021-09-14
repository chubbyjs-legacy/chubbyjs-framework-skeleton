import ResponseFactory from '@chubbyjs/chubbyjs-http-message/dist/Factory/ResponseFactory';
import { describe, expect, test } from '@jest/globals';
import ResponseFactoryFactory from '../../../../src/ServiceFactory/Http/ResponseFactoryFactory';

describe('ResponseFactoryFactory', () => {
    test('invoke', async () => {
        const responseFactory = ResponseFactoryFactory();

        expect(responseFactory).toBeInstanceOf(ResponseFactory);
    });
});
