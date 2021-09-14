import Application from '@chubbyjs/chubbyjs-framework/dist/Application';
import ServerRequestFactory from '@chubbyjs/chubbyjs-http-message/dist/Factory/ServerRequestFactory';
import StreamFactory from '@chubbyjs/chubbyjs-http-message/dist/Factory/StreamFactory';
import UriFactory from '@chubbyjs/chubbyjs-http-message/dist/Factory/UriFactory';
import NodeResponseEmitter from '@chubbyjs/chubbyjs-node-psr-http-message-bridge/dist/NodeResponseEmitter';
import PsrRequestFactory from '@chubbyjs/chubbyjs-node-psr-http-message-bridge/dist/PsrRequestFactory';
import MiddlewareInterface from '@chubbyjs/psr-http-server-middleware/dist/MiddlewareInterface';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import container from '../bootstrap/container';

const app = new Application(container(process.env.APP_ENV ?? 'dev').get<Array<MiddlewareInterface>>('Middleware[]'));

const psrRequestFactory = new PsrRequestFactory(
    new ServerRequestFactory(),
    new UriFactory(),
    new StreamFactory(),
);

const nodeResponseEmitter = new NodeResponseEmitter();

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    const serverRequest = psrRequestFactory.create(req);
    const response = await app.handle(serverRequest);

    nodeResponseEmitter.emit(response, res);
});

server.listen(8080);
