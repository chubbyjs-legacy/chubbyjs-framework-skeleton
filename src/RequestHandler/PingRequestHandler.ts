import ResponseFactoryInterface from '@chubbyjs/psr-http-factory/dist/ResponseFactoryInterface';
import ResponseInterface from '@chubbyjs/psr-http-message/dist/ResponseInterface';
import RequestHandlerInterface from '@chubbyjs/psr-http-server-handler/dist/RequestHandlerInterface';

class PingRequestHandler implements RequestHandlerInterface {
    public constructor(private responseFactory: ResponseFactoryInterface) {}

    public async handle(): Promise<ResponseInterface> {
        const response = this.responseFactory
            .createResponse(200)
            .withHeader('Content-Type', 'application/json')
            .withHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            .withHeader('Pragma', 'no-cache')
            .withHeader('Expires', '0');

        response.getBody().end(JSON.stringify({ datetime: new Date().toISOString() }));

        return response;
    }
}

export default PingRequestHandler;
