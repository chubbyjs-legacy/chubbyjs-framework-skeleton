import PathToRegexpRouteMatcher from '@chubbyjs/chubbyjs-framework-router-path-to-regexp/dist/PathToRegexpRouteMatcher';
import Routes from '@chubbyjs/chubbyjs-framework/dist/Router/Routes';
import PsrContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';

export default (container: PsrContainerInterface): PathToRegexpRouteMatcher => {
    return new PathToRegexpRouteMatcher(container.get<Routes>(Routes.name));
};
