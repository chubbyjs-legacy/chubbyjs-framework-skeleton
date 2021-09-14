import RouteInterface from '@chubbyjs/chubbyjs-framework/dist/Router/RouteInterface';
import RoutesInterface from '@chubbyjs/chubbyjs-framework/dist/Router/RoutesInterface';

class RoutesDouble implements RoutesInterface {
    getRoutesByName(): Map<string, RouteInterface> {
        throw new Error('Method not implemented.');
    }
}

export default RoutesDouble;
