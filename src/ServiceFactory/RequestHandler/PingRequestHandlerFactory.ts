import ResponseFactory from '@chubbyjs/chubbyjs-http-message/dist/Factory/ResponseFactory';
import PsrContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import ResponseFactoryInterface from '@chubbyjs/psr-http-factory/dist/ResponseFactoryInterface';
import PingRequestHandler from '../../RequestHandler/PingRequestHandler';

export default (container: PsrContainerInterface): PingRequestHandler => {
    return new PingRequestHandler(container.get<ResponseFactoryInterface>(ResponseFactory.name));
};
