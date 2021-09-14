import ResponseFactoryInterface from '@chubbyjs/psr-http-factory/dist/ResponseFactoryInterface';
import ResponseInterface from '@chubbyjs/psr-http-message/dist/ResponseInterface';

class ResponseFactoryDouble implements ResponseFactoryInterface {
    createResponse(code: number, reasonPhrase?: string): ResponseInterface {
        throw new Error('Method not implemented.');
    }
}

export default ResponseFactoryDouble;
