import ErrorMiddleware from '@chubbyjs/chubbyjs-framework/dist/Middleware/ErrorMiddleware';
import LazyMiddleware from '@chubbyjs/chubbyjs-framework/dist/Middleware/LazyMiddleware';
import RouteMatcherMiddleware from '@chubbyjs/chubbyjs-framework/dist/Middleware/RouteMatcherMiddleware';
import PsrContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import MiddlewareInterface from '@chubbyjs/psr-http-server-middleware/dist/MiddlewareInterface';

export default (container: PsrContainerInterface): Array<MiddlewareInterface> => {
    return [
        new LazyMiddleware(container, ErrorMiddleware.name),
        new LazyMiddleware(container, RouteMatcherMiddleware.name),
    ];
};
