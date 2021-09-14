import ResponseInterface from '@chubbyjs/psr-http-message/dist/ResponseInterface';
import ServerRequestInterface from '@chubbyjs/psr-http-message/dist/ServerRequestInterface';
import RequestHandlerInterface from '@chubbyjs/psr-http-server-handler/dist/RequestHandlerInterface';

class RequestHandlerDouble implements RequestHandlerInterface {
    async handle(request: ServerRequestInterface): Promise<ResponseInterface> {
        throw new Error('Method not implemented.');
    }
}

export default RequestHandlerDouble;
