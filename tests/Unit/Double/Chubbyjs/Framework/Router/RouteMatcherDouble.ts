import RouteInterface from '@chubbyjs/chubbyjs-framework/dist/Router/RouteInterface';
import RouteMatcherInterface from '@chubbyjs/chubbyjs-framework/dist/Router/RouteMatcherInterface';
import ServerRequestInterface from '@chubbyjs/psr-http-message/dist/ServerRequestInterface';

class RouteMatcherDouble implements RouteMatcherInterface {
    match(request: ServerRequestInterface): RouteInterface {
        throw new Error('Method not implemented.');
    }
}

export default RouteMatcherDouble;
