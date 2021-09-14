import Call from '@chubbyjs/chubbyjs-mock/dist/Call';
import MockByCalls, { mockByCallsUsed } from '@chubbyjs/chubbyjs-mock/dist/MockByCalls';
import ResponseFactoryInterface from '@chubbyjs/psr-http-factory/dist/ResponseFactoryInterface';
import ResponseInterface from '@chubbyjs/psr-http-message/dist/ResponseInterface';
import { describe, expect, test } from '@jest/globals';
import PingRequestHandler from '../../../src/RequestHandler/PingRequestHandler';
import ResponseFactoryDouble from '../Double/Psr/HttpFactory/ResponseFactoryDouble';
import ResponseDouble from '../Double/Psr/HttpMessage/ResponseDouble';

const mockByCalls = new MockByCalls();

describe('PingRequestHandler', () => {
    test('handle', async () => {
        let responseData = '';

        const responseBody = {
            end: (data: string) => {
                responseData = data;
            },
        };

        const response = mockByCalls.create<ResponseInterface>(ResponseDouble, [
            Call.create('getBody').with().willReturn(responseBody),
        ]);

        const responseWithExpiresHeader = mockByCalls.create<ResponseInterface>(ResponseDouble, [
            Call.create('withHeader').with('Expires', '0').willReturn(response),
        ]);

        const responseWithPragmaHeader = mockByCalls.create<ResponseInterface>(ResponseDouble, [
            Call.create('withHeader').with('Pragma', 'no-cache').willReturn(responseWithExpiresHeader),
        ]);

        const responseWithCacheControlHeader = mockByCalls.create<ResponseInterface>(ResponseDouble, [
            Call.create('withHeader')
                .with('Cache-Control', 'no-cache, no-store, must-revalidate')
                .willReturn(responseWithPragmaHeader),
        ]);

        const responseWithContentTypeHeader = mockByCalls.create<ResponseInterface>(ResponseDouble, [
            Call.create('withHeader')
                .with('Content-Type', 'application/json')
                .willReturn(responseWithCacheControlHeader),
        ]);

        const responseFactory = mockByCalls.create<ResponseFactoryInterface>(ResponseFactoryDouble, [
            Call.create('createResponse').with(200).willReturn(responseWithContentTypeHeader),
        ]);

        const handler = new PingRequestHandler(responseFactory);

        expect(await handler.handle()).toBe(response);

        expect(JSON.parse(responseData)).toMatchObject({
            datetime: expect.any(String),
        });

        expect(mockByCallsUsed(response)).toBe(true);
        expect(mockByCallsUsed(responseWithExpiresHeader)).toBe(true);
        expect(mockByCallsUsed(responseWithPragmaHeader)).toBe(true);
        expect(mockByCallsUsed(responseWithCacheControlHeader)).toBe(true);
        expect(mockByCallsUsed(responseWithContentTypeHeader)).toBe(true);
        expect(mockByCallsUsed(responseFactory)).toBe(true);
    });
});
