import LaminasConfig from '@chubbyjs/chubbyjs-laminas-config/dist/Config';
import LaminasContainerFactory from '@chubbyjs/chubbyjs-laminas-config/dist/ContainerFactory';
import ContainerInterface from '@chubbyjs/psr-container/dist/ContainerInterface';
import { existsSync, mkdirSync } from 'fs';
import { Config } from '../config/prod';

export default (env: string): ContainerInterface => {
    const config: Config = require(`../config/${env}`).default(env);

    config.directories.forEach((directory) => {
        if (!existsSync(directory)) {
            mkdirSync(directory, { recursive: true });
        }
    });

    return LaminasContainerFactory(new LaminasConfig(config));
};
