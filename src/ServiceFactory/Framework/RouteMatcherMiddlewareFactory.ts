import PathToRegexpRouteMatcher from '@chubbyjs/chubbyjs-framework-router-path-to-regexp/dist/PathToRegexpRouteMatcher';
import RouteMatcherMiddleware from '@chubbyjs/chubbyjs-framework/dist/Middleware/RouteMatcherMiddleware';
import ResponseFactory from '@chubbyjs/chubbyjs-http-message/dist/Factory/ResponseFactory';
import PinoPsrLogger from '@chubbyjs/chubbyjs-pino-psr/dist/PinoPsrLogger';
import PsrContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';

export default (container: PsrContainerInterface): RouteMatcherMiddleware => {
    return new RouteMatcherMiddleware(
        container.get<PathToRegexpRouteMatcher>(PathToRegexpRouteMatcher.name),
        container.get<ResponseFactory>(ResponseFactory.name),
        container.get<PinoPsrLogger>(PinoPsrLogger.name),
    );
};
