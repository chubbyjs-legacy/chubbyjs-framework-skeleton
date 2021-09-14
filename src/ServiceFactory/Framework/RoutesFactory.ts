import LazyRequestHandler from '@chubbyjs/chubbyjs-framework/dist/RequestHandler/LazyRequestHandler';
import Route from '@chubbyjs/chubbyjs-framework/dist/Router/Route';
import Routes from '@chubbyjs/chubbyjs-framework/dist/Router/Routes';
import PsrContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import PingRequestHandler from '../../RequestHandler/PingRequestHandler';

export default (container: PsrContainerInterface): Routes => {
    const r = (name: string) => new LazyRequestHandler(container, name);

    return new Routes([Route.get('/ping', 'ping', r(PingRequestHandler.name))]);
};
