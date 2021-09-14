import PinoPsrLogger from '@chubbyjs/chubbyjs-pino-psr/dist/PinoPsrLogger';
import PsrContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import * as pino from 'pino';
import { Config } from '../../../config/prod';

export default (container: PsrContainerInterface): PinoPsrLogger => {
    const pinoConfig = container.get<Config>('config').pino;

    return new PinoPsrLogger(pino(pinoConfig.options, pinoConfig.stream));
};
