import ErrorMiddleware from '@chubbyjs/chubbyjs-framework/dist/Middleware/ErrorMiddleware';
import ResponseFactory from '@chubbyjs/chubbyjs-http-message/dist/Factory/ResponseFactory';
import PinoPsrLogger from '@chubbyjs/chubbyjs-pino-psr/dist/PinoPsrLogger';
import PsrContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import { Config } from '../../../config/prod';

export default (container: PsrContainerInterface): ErrorMiddleware => {
    return new ErrorMiddleware(
        container.get<ResponseFactory>(ResponseFactory.name),
        container.get<Config>('config').debug,
        container.get<PinoPsrLogger>(PinoPsrLogger.name),
    );
};
