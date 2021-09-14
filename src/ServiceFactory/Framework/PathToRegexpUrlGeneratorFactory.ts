import PathToRegexpUrlGenerator from '@chubbyjs/chubbyjs-framework-router-path-to-regexp/dist/PathToRegexpUrlGenerator';
import Routes from '@chubbyjs/chubbyjs-framework/dist/Router/Routes';
import PsrContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';

export default (container: PsrContainerInterface): PathToRegexpUrlGenerator => {
    return new PathToRegexpUrlGenerator(container.get<Routes>(Routes.name));
};
